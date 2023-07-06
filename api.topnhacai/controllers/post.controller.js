const Post = require("../models/post.model");
const formidable = require("formidable");
const slugHandler = require("../helpers/slugHandler");
const Taxonomy = require("../models/taxonomy.model");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const { dashLogger } = require("../logger");
const _ = require("lodash");

exports.create = (req, res) => {
  const {
    post_type,
    post_title,
    post_taxid,
    post_views,
    post_status,
    post_userid,
    post_image,
    post_content,
    post_slug,
    post_description,
    post_schemaid,
    post_keyfocus,
  } = req.body;
  if (!post_title || !post_title.length) {
    dashLogger.error(`Error : Title is required, Request : ${req.originalUrl}`);
    console.log("aaaa");
    return res.status(400).json({
      error: "Title is required",
    });
  }
  if (!post_content || !post_content.length) {
    dashLogger.error(
      `Error : Content is required, Request : ${req.originalUrl}`
    );
    console.log("aaaa");
    return res.status(400).json({
      error: "Content is too short",
    });
  }
  if (!post_taxid || post_taxid.length == 0) {
    dashLogger.error(
      `Error : At least one tax is required, Request : ${req.originalUrl}`
    );
    console.log("aaaa");
    return res.status(400).json({
      error: "At least one tax is required",
    });
  }
  if (!post_description || !post_description.length) {
    dashLogger.error(
      `Error : Description is required, Request : ${req.originalUrl}`
    );
    console.log("aaaa");
    return res.status(400).json({
      error: "Description is required",
    });
  }
  let post = new Post();
  post.post_type = post_type;
  post.post_title = post_title;
  post.post_views = post_views ? parseInt(post_views) : 0;
  post.post_status = post_status;
  post.post_content = post_content;
  post.post_description = post_description;
  post.post_image = !post_image || !post_image.length ? "" : post_image;
  post.post_userid = post_userid;
  post.post_keyfocus = post_keyfocus && post_keyfocus.split(",");
  if (!post_slug && !post_slug.length) {
    post.post_slug = slugHandler.slugify(post_title).toLowerCase();
  } else {
    post.post_slug = post_slug.toLowerCase();
  }
  let arrayOfTax = post_taxid && post_taxid.split(",");
  let arrayOfSchema = post_schemaid && post_schemaid.split(",");
  post.save((err, result) => {
    if (err) {
      dashLogger.error(`Error : ${err}, Request : ${req.originalUrl}`);
      return res.status(400).json({
        message: err.message,
      });
    }

    if (arrayOfTax) {
      Post.findByIdAndUpdate(
        result._id,
        {
          $push: { post_taxid: arrayOfTax },
        },
        { new: true }
      ).exec((err, result) => {
        if (err) {
          dashLogger.error(`Error : ${err}, Request : ${req.originalUrl}`);
          return res.status(400).json({
            message: err.message,
          });
        } else {
          Post.findByIdAndUpdate(
            result._id,
            {
              $push: { post_schemaid: arrayOfSchema },
            },
            { new: true }
          ).exec((err, result) => {
            dashLogger.error(`Error : ${err}, Request : ${req.originalUrl}`);
            res.json(result);
          });
        }
      });
    }
  });
};

exports.update = async (req, res) => {
  const id = req.params.id ? req.params.id : null;
  if (id) {
    Post.findById(id).exec((err, oldPost) => {
      if (err) {
        dashLogger.error(`Error : ${err}, Request : ${req.originalUrl}`);
        return res.status(400).json({
          message: err.message,
        });
      }
      const {
        post_type,
        post_title,
        post_taxid,
        post_views,
        post_status,
        post_userid,
        post_image,
        post_content,
        post_slug,
        post_description,
        post_schemaid,
        post_keyfocus,
      } = req.body;

      if (!post_title || !post_title.length) {
        dashLogger.error(
          `Error : Title is required, Request : ${req.originalUrl}`
        );
        return res.status(400).json({
          error: "Title is required",
        });
      }
      if (!post_content || !post_content.length) {
        dashLogger.error(
          `Error : Content is required, Request : ${req.originalUrl}`
        );
        return res.status(400).json({
          error: "Content is required",
        });
      }
      if (!post_taxid || post_taxid.length == 0) {
        dashLogger.error(
          `Error : At least one tax is required, Request : ${req.originalUrl}`
        );
        return res.status(400).json({
          error: "At least one tax is required",
        });
      }
      if (!post_description || !post_description.length) {
        dashLogger.error(
          `Error : Description is required, Request : ${req.originalUrl}`
        );
        return res.status(400).json({
          error: "Description is required",
        });
      }
      let arrayOfKeyfocus = post_keyfocus && post_keyfocus.split(",");
      oldPost.post_taxid = post_taxid && post_taxid.split(",");
      oldPost.post_schemaid =
        post_schemaid && post_schemaid != "" ? post_schemaid.split(",") : [];
      oldPost.post_title = post_title;
      oldPost.post_image = !post_image || !post_image.length ? "" : post_image;
      oldPost.post_description = post_description;
      oldPost.post_content = post_content;
      oldPost.post_status = post_status;
      oldPost.post_type = post_type;
      oldPost.post_userid = post_userid;
      oldPost.post_views = post_views ? parseInt(post_views) : 0;
      oldPost.post_keyfocus = arrayOfKeyfocus;
      if (post_slug && post_slug.length && oldPost.post_slug != post_slug) {
        oldPost.post_slug = post_slug;
      } else {
        oldPost.post_slug = slugHandler.slugify(post_title).toLowerCase();
      }

      oldPost.save((err, result) => {
        if (err) {
          dashLogger.error(`Error : ${err}, Request : ${req.originalUrl}`);
          return res.status(400).json({
            message: err.message,
          });
        }
        res.json(result);
      });
    });
  } else {
    dashLogger.error(`Error : error not id, Request : ${req.originalUrl}`);
    return res.status(400).json({
      message: "error not id",
    });
  }
};
exports.checkKeyword = async (req, res) => {
  try {
    let listKeyword = req.body.keyword;
    let id = req.body.id;
    let result = [];
    await Promise.all(
      listKeyword?.map(async (item) => {
        let match = await Post.find({
          post_keyfocus: item,
          _id: { $ne: id },
        }).select("_id post_title");
        result.push({ key: item, value: match });
      })
    );
    return res.status(200).json({ success: true, result });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error!" });
  }
};
exports.list = (req, res) => {
  var limit =
    req.query.limit && req.query.limit !== "undefined"
      ? parseInt(req.query.limit)
      : 10;
  var skip =
    req.query.skip && req.query.skip !== "undefined"
      ? parseInt(req.query.skip)
      : 0;
  var search =
    req.query.search &&
    req.query.search !== "undefined" &&
    req.query.search !== ""
      ? req.query.search
      : null;
  var tax_id =
    req.query.tax_id &&
    req.query.tax_id !== "undefined" &&
    req.query.tax_id !== ""
      ? req.query.tax_id
      : null;
  var status =
    req.query.status &&
    req.query.status !== "undefined" &&
    req.query.status !== ""
      ? req.query.status
      : null;
  var query = {};
  if (search) {
    query.$or = [
      { post_title: { $regex: search, $options: "i" } },
      { post_slug: { $regex: search, $options: "i" } },
    ];
  }
  if (tax_id) {
    query.post_taxid = tax_id;
  }
  if (status) {
    query.post_status = status;
  }
  try {
    Post.find(query)
      .populate("post_userid")
      .populate("post_taxid")
      //        .sort({'updatedAt': -1})
      .select(
        "id post_type post_title post_views post_status post_userid post_image post_slug post_description post_taxid updatedAt"
      )
      .skip(skip * limit)
      .limit(limit)
      //        .sort({'updatedAt': -1})
      .exec((err, data) => {
        if (err) {
          dashLogger.error(`Error : ${err}, Request : ${req.originalUrl}`);
          return res.status(400).json({
            message: err.message,
          });
        }
        Post.countDocuments(query).exec((count_error, count) => {
          if (err) {
            dashLogger.error(`Error : ${err}, Request : ${req.originalUrl}`);
            return res.json(count_error);
          }
          return res.json({
            total: count,
            skip: skip,
            pageSize: data.length,
            datas: data,
          });
        });
      });
  } catch (error) {
    dashLogger.error(`Error : ${error}, Request : ${req.originalUrl}`);
  }
};

exports.listSearch = (req, res) => {
  const search =
    req.query.q && req.query.q !== "" && req.query.q !== "undefined"
      ? req.query.q
      : null;
  var limit =
    req.query.limit && req.query.limit !== "undefined"
      ? parseInt(req.query.limit)
      : 10;
  var skip =
    req.query.skip && req.query.limit !== "undefined"
      ? parseInt(req.query.skip)
      : 0;
  if (search) {
    Post.find(
      {
        $or: [
          { post_title: { $regex: search, $options: "i" } },
          { post_slug: { $regex: search, $options: "i" } },
          { post_status: { $regex: search, $options: "i" } },
          { post_content: { $regex: search, $options: "i" } },
        ],
      },
      (err, posts) => {
        if (err) {
          dashLogger.error(`Error : ${err}, Request : ${req.originalUrl}`);
          return res.status(400).json({
            message: err.message,
          });
        }
        Post.countDocuments({
          $or: [
            { post_title: { $regex: search, $options: "i" } },
            { post_slug: { $regex: search, $options: "i" } },
            { post_status: { $regex: search, $options: "i" } },
            { post_content: { $regex: search, $options: "i" } },
          ],
        }).exec((count_error, count) => {
          if (err) {
            dashLogger.error(`Error : ${err}, Request : ${req.originalUrl}`);
            return res.json(count_error);
          }
          return res.json({
            total: count,
            skip: skip,
            pageSize: posts.length,
            datas: posts,
          });
        });
      }
    )
      .populate("post_userid")
      .populate("post_taxid")
      .populate("post_schemaid")
      .sort({ updatedAt: -1 })
      .allowDiskUse(true)
      .skip(skip * limit)
      .limit(limit)
      .select(
        "id post_type post_title post_views post_status post_userid post_image post_slug post_description post_schemaid post_taxid"
      );
  } else {
    var query = {};
    Post.find(query)
      .populate("post_userid")
      .populate("post_taxid")
      .populate("post_schemaid")
      .sort({ updatedAt: -1 })
      .skip(skip * limit)
      .limit(limit)
      .select(
        "id post_type post_title post_views post_status post_userid post_image post_slug post_description post_schemaid post_taxid"
      )
      .exec((err, data) => {
        if (err) {
          dashLogger.error(`Error : ${err}, Request : ${req.originalUrl}`);
          return res.status(400).json({
            message: err.message,
          });
        }
        Post.countDocuments(query).exec((count_error, count) => {
          if (err) {
            dashLogger.error(`Error : ${err}, Request : ${req.originalUrl}`);
            return res.json(count_error);
          }
          return res.json({
            total: count,
            skip: skip,
            pageSize: data.length,
            datas: data,
          });
        });
      });
  }
};
exports.remove = (req, res) => {
  const slug = req.params.slug ? req.params.slug : null;
  try {
    if (slug) {
      Post.findOneAndRemove({ post_slug: slug }).exec((err, data) => {
        if (err) {
          dashLogger.error(`Error : ${err}, Request : ${req.originalUrl}`);
          return res.status(400).json({
            message: err.message,
          });
        }
        res.json({
          message: "Post deleted successfully",
        });
      });
    } else {
      dashLogger.error(`Error : Not found Slug, Request : ${req.originalUrl}`);
      return res.status(400).json({
        message: "error not slug",
      });
    }
  } catch (err) {
    dashLogger.error(`Error : ${err}, Request : ${req.originalUrl}`);
    return res.status(400).json({
      message: err.message,
    });
  }
};

exports.read = (req, res) => {
  const slug = req.params.slug ? req.params.slug : null;
  if (slug) {
    Post.findOne({ post_slug: slug })
      .populate("post_userid")
      .populate("post_taxid")
      .populate("post_schemaid")
      .select(
        "id post_type post_title post_views post_status post_userid post_image post_content post_slug post_description post_schemaid post_taxid post_keyfocus"
      )
      .exec((err, data) => {
        if (err) {
          dashLogger.error(`Error : ${err}, Request : ${req.originalUrl}`);
          return res.status(400).json({
            message: err.message,
          });
        }
        if (data) {
          res.json(data);
        } else {
          data = [];
          return res.json(data);
        }
      });
  } else {
    dashLogger.error(`Error : Not found Slug, Request : ${req.originalUrl}`);
    return res.status(400).json({
      message: "error not slug",
    });
  }
};

exports.listRelated = (req, res) => {
  let limit = req.body.limit ? parseInt(req.body.limit) : 4;
  const { id, post_taxid } = req.body;
  if (id && post_taxid) {
    Post.find({ id: { $ne: id }, post_taxid: { $in: post_taxid } })
      .limit(limit)
      .populate("post_userid")
      .populate("post_taxid")
      .populate("post_schemaid")
      .sort({ updatedAt: -1 })
      .select(
        "id post_type post_title post_views post_status post_userid post_image post_slug post_schemaid post_taxid"
      )
      .exec((err, data) => {
        if (err) {
          dashLogger.error(`Error : ${err}, Request : ${req.originalUrl}`);
          return res.status(400).json({
            message: err.message,
          });
        }
        res.json(data);
      });
  } else {
    dashLogger.error(
      `Error : Id and post id not found, Request : ${req.originalUrl}`
    );
    return res.status(400).json({
      message: "error not id and post id",
    });
  }
};

exports.filterByStatus = (req, res) => {
  const status = req.params.status ? req.params.status : null;
  if (status) {
    Post.findOne({ post_status: status })
      .populate("post_userid")
      .populate("post_taxid")
      .populate("post_schemaid")
      .sort({ updatedAt: -1 })
      .select(
        "id post_type post_title post_views post_status post_userid post_image post_content post_slug post_description post_schemaid post_taxid"
      )
      .exec((err, data) => {
        if (err) {
          dashLogger.error(`Error : ${err}, Request : ${req.originalUrl}`);
          return res.status(400).json({
            message: err.message,
          });
        }
        if (data) {
          res.json(data);
        } else {
          data = [];
          return res.json(data);
        }
      });
  } else {
    dashLogger.error(`Error : Status not found, Request : ${req.originalUrl}`);
    return res.status(400).json({
      message: "status not found",
    });
  }
};

exports.filterByStatusAndSlug = (req, res) => {
  const status = req.query.status ? req.query.status : null;
  const slug = req.query.slug ? req.query.slug : null;
  let query = {};
  if (status && slug) {
    query = { post_status: status, post_slug: slug };
  } else {
    if (slug) {
      query = { post_slug: slug };
    } else {
      dashLogger.error(
        `Error : Status and slug not found, Request : ${req.originalUrl}`
      );
      return res.status(400).json({
        message: "status and slug not found",
      });
    }
  }
  Post.findOne(query)
    .populate("post_userid")
    .populate("post_taxid")
    .populate("post_schemaid")
    .sort({ updatedAt: -1 })
    .select(
      "id post_type post_title post_views post_status post_userid post_image post_content post_slug post_description post_schemaid post_taxid createdAt updatedAt post_keyfocus"
    )
    .exec((err, data) => {
      if (err) {
        dashLogger.error(`Error : ${err}, Request : ${req.originalUrl}`);
        return res.status(400).json({
          message: err.message,
        });
      }
      if (data) {
        res.json(data);
      } else {
        data = [];
        return res.json(data);
      }
    });
};

exports.getPostByTax = (req, res) => {
  const taxSlug = req.query.slug ? req.query.slug : null;
  const postStatus = req.query.status ? req.query.status : null;
  const limit = req.query.limit ? req.query.limit : 10;
  const skip = req.query.skip ? req.query.skip : 0;
  if (taxSlug && postStatus) {
    Taxonomy.findOne({ tax_slug: taxSlug }).exec((err, tax) => {
      if (err) {
        dashLogger.error(
          `Error : Taxonomy not found, Request : ${req.originalUrl}`
        );
        return res.status(400).json({
          error: "Taxonomy not found",
        });
      }
      if (tax) {
        Post.find({ post_taxid: tax.id, post_status: postStatus })
          .populate("post_userid")
          .populate("post_taxid")
          .populate("post_schemaid")
          .sort({ updatedAt: -1 })
          .skip(skip * limit)
          .limit(limit)
          .select(
            "id post_type post_title post_views post_status post_userid post_image post_slug post_description post_schemaid post_taxid post_keyfocus"
          )
          .exec((err, data) => {
            if (err) {
              dashLogger.error(
                `Error : Post not found, Request : ${req.originalUrl}`
              );
              return res.status(400).json({
                error: "Post not found",
              });
            }
            res.status(200).json(data);
          });
      } else {
        dashLogger.error(`Error : Tax not found, Request : ${req.originalUrl}`);
        return res.status(400).json({
          message: "error tax",
        });
      }
    });
  }
};

exports.getAllByLimit = (req, res) => {
  let limit = req.body.limit ? parseInt(req.body.limit) : 5;
  let skip = req.body.skip ? parseInt(req.body.skip) : 0;
  Post.find({})
    .limit(limit)
    .skip(skip)
    .populate("post_userid")
    .populate("post_taxid")
    .populate("post_schemaid")
    .sort({ updatedAt: -1 })
    .select(
      "id post_type post_title post_views post_status post_userid post_image post_content post_slug post_schemaid post_taxid post_keyfocus"
    )
    .exec((err, data) => {
      if (err) {
        dashLogger.error(`Error : ${err}, Request : ${req.originalUrl}`);
        return res.status(400).json({
          message: err.message,
        });
      }
      res.json(data);
    });
};

exports.getAllByTax = (req, res) => {
  const tax_id = req.query.tax ? req.query.tax : null;
  const limit = req.query.limit ? parseInt(req.query.limit) : 10;
  const skip = req.query.skip ? parseInt(req.query.skip) : 0;
  if (tax_id) {
    var query = { post_taxid: tax_id, post_status: "public" };
    Post.find(query)
      // .populate('post_userid')
      // .populate('post_taxid')
      // .populate('post_schemaid')
      .sort({ updatedAt: -1 })
      .skip(skip * limit)
      .limit(limit)
      .select(
        "id post_type post_title post_image post_slug post_description post_status post_keyfocus"
      )
      .exec((err, data) => {
        if (err) {
          dashLogger.error(`Error : ${err}, Request : ${req.originalUrl}`);
          return res.status(400).json({
            message: err.message,
          });
        }
        Post.countDocuments(query).exec((count_error, count) => {
          if (err) {
            dashLogger.error(`Error : ${err}, Request : ${req.originalUrl}`);
            return res.json(count_error);
          }
          return res.json({
            total: count,
            skip: skip,
            pageSize: data.length,
            datas: data,
          });
        });
      });
  } else {
    dashLogger.error(`Error : ${err}, Request : ${req.originalUrl}`);
    return res.status(400).json({
      message: err.message,
    });
  }
};

exports.getPostByTaxNew = (req, res) => {
  const taxSlug = req.query?.slug;
  const postStatus = req.query?.status;
  const limit = req.query.limit ? req.query.limit : 10;
  const skip = req.query.skip ? req.query.skip : 0;

  if (taxSlug && postStatus) {
    Taxonomy.findOne({ tax_slug: taxSlug }).exec((err, tax) => {
      if (err) {
        dashLogger.error(
          `Error : Taxonomy not found, Request : ${req.originalUrl}`
        );
        return res.status(400).json({
          error: "Taxonomy not found",
        });
      }
      if (tax) {
        Post.find({ post_taxid: tax.id, post_status: postStatus })
          .sort({ updatedAt: -1 })
          .skip(skip * limit)
          .limit(limit)
          .select(
            "id post_title post_image post_slug post_description post_keyfocus"
          )
          .exec((err, data) => {
            if (err) {
              dashLogger.error(
                `Error : Post not found, Request : ${req.originalUrl}`
              );
              return res.status(400).json({
                error: "Post not found",
              });
            }

            var query = { post_taxid: tax.id, post_status: postStatus };
            Post.countDocuments(query).exec((count_error, count) => {
              if (err) {
                dashLogger.error(
                  `Error : ${err}, Request : ${req.originalUrl}`
                );
                return res.json(count_error);
              }
              return res.json({
                total: Math.ceil(count / limit),
                skip: skip * limit + 1,
                pageSize: data.length,
                datas: data,
              });
            });
            // var totalPage = 1
            // console.log(data.length);
            // if(data.length == 0 || data.length < limit)
            // {
            //     totalPage = 1;
            // }
            // else if(data.length % limit == 0 && data.pa)
            // {
            //     totalPage = data.length / limit;
            // }else{
            //     totalPage = Math.ceil(data.length / limit) + 1;
            // }

            // return res.json({
            //     total : totalPage,
            //     skip : skip,
            //     pageSize: data.length,
            //     datas : data
            // })
          });
      } else {
        dashLogger.error(`Error : Tax, Request : ${req.originalUrl}`);
        return res.status(400).json({
          message: "error tax",
        });
      }
    });
  }
};

exports.updateView = (req, res) => {
  let id = req.params.id ? req.params.id : null;
  try {
    if (id) {
      Post.findByIdAndUpdate(id, { $inc: { post_views: 1 } }).exec(
        (err, data) => {
          if (err) {
            dashLogger.error(`Error : ${err}, Request : ${req.originalUrl}`);
            return res.status(400).json({
              error: err.message,
            });
          }
          if (data) {
            return res.json({ message: "+1 view" });
          }
        }
      );
    }
  } catch (error) {
    dashLogger.error(`Error : ${error}, Request : ${req.originalUrl}`);
    return res.status(400).json({ message: error.message });
  }
};
exports.getPostXML = (req, res) => {
  try {
    Post.find({ post_status: "public" })
      .sort({ updatedAt: -1 })
      .select("id post_title post_slug createdAt updatedAt")
      .allowDiskUse(true)
      .exec((err, data) => {
        if (err) {
          dashLogger.error(`Error : ${err}, Request : ${req.originalUrl}`);
          return res.status(400).json({
            message: err.message,
          });
        }
        return res.json(data);
      });
  } catch (error) {
    dashLogger.error(`Error : ${error}, Request : ${req.originalUrl}`);
    return res.status(400).json({ message: error.message });
  }
};
exports.getListView = (req, res) => {
  try {
    var taxId = req.query.taxId ? req.query.taxId : null;
    var limit =
      req.query.limit && req.query.limit !== "undefined"
        ? parseInt(req.query.limit)
        : 10;
    var skip =
      req.query.skip && req.query.limit !== "undefined"
        ? parseInt(req.query.skip)
        : 0;
    if (taxId) {
      Post.find({ post_taxid: mongoose.Types.ObjectId(taxId) })
        .populate("post_userid")
        .populate("post_taxid")
        .populate("post_schemaid")
        .sort({ post_views: -1 })
        .skip(skip * limit)
        .limit(limit)
        .select(
          "id post_type post_title post_views post_status post_userid post_image post_slug post_description post_schemaid post_taxid post_keyfocus"
        )
        .exec((err, data) => {
          if (err) {
            dashLogger.error(`Error : ${err}, Request : ${req.originalUrl}`);
            return res.status(400).json({
              message: err.message,
            });
          }
          return res.json(data);
        });
    } else {
      dashLogger.error(`Error : TaxId not found, Request : ${req.originalUrl}`);
      return res.status(400).json({
        message: "TaxId not found",
      });
    }
  } catch (error) {
    dashLogger.error(`Error : ${err}, Request : ${req.originalUrl}`);
    return res.status(400).json({
      message: error.message,
    });
  }
};
exports.getAllByTaxDate = (req, res) => {
  var tax_id = req.query.tax ? req.query.tax : null;
  var start = req.query.start ? new Date(req.query.start) : new Date();
  var end = req.query.end ? new Date(req.query.end) : new Date();
  end.setDate(end.getDate() + 1);

  var query = {
    post_taxid: tax_id,
    createdAt: {
      $gte: start,
      $lt: end,
    },
  };
  if (tax_id) {
    Post.find({
      post_taxid: tax_id,
      createdAt: {
        $gte: start,
        $lt: end,
      },
    })
      .sort({ updatedAt: -1 })
      .select(
        "id post_type post_title post_image post_slug post_description post_status post_keyfocus"
      )
      .exec((err, data) => {
        if (err) {
          dashLogger.error(`Error : ${err}, Request : ${req.originalUrl}`);
          return res.status(400).json({
            message: err.message,
          });
        }
        Post.countDocuments(query).exec((count_error, count) => {
          if (err) {
            dashLogger.error(`Error : ${err}, Request : ${req.originalUrl}`);
            return res.json(count_error);
          }
          return res.json({
            total: count,
            skip: skip,
            pageSize: data.length,
            datas: data,
          });
        });
      });
  } else {
    dashLogger.error(`Error : ${err}, Request : ${req.originalUrl}`);
    return res.status(400).json({
      message: err.message,
    });
  }
};

exports.getAllByDate = (req, res) => {
  var start = req.query.start ? new Date(req.query.start) : new Date();
  var end = req.query.end ? new Date(req.query.end) : new Date();
  end.setDate(end.getDate() + 1);
  var limit = req.query.limit ? parseInt(req.query.limit) : 10;
  var skip = req.query.skip ? parseInt(req.query.skip) : 0;
  var query = {
    createdAt: {
      $gte: start,
      $lt: end,
    },
  };
  Post.find({
    createdAt: {
      $gte: start,
      $lt: end,
    },
  })
    .sort({ updatedAt: -1 })
    .skip(skip * limit)
    .limit(limit)
    .select(
      "id post_type post_title post_image post_slug post_description post_status post_keyword post_keyfocus"
    )
    .exec((err, data) => {
      if (err) {
        dashLogger.error(`Error : ${err}, Request : ${req.originalUrl}`);
        return res.status(400).json({
          message: err.message,
        });
      }
      Post.countDocuments(query).exec((count_error, count) => {
        if (err) {
          dashLogger.error(`Error : ${err}, Request : ${req.originalUrl}`);
          return res.json(count_error);
        }
        return res.json({
          total: count,
          pageSize: data.length,
          datas: data,
        });
      });
    });
};

exports.getMax = (req, res) => {
  Post.aggregate([
    {
      $project: {
        createdAt: {
          $dateToString: { format: "%Y-%m-%d", date: "$createdAt" },
        },
      },
    },
    { $group: { _id: { createdAt: "$createdAt" }, count: { $sum: 1 } } },
    { $sort: { count: -1 } },
    { $project: { _id: 0, createdAt: "$_id.createdAt", count: 1 } },
  ]).exec((err, data) => {
    if (err) {
      dashLogger.error(`Error : ${err}, Request : ${req.originalUrl}`);
      return res.status(400).json({
        message: err.message,
      });
    }
    return res.json({
      max: data[0].count,
      date: data[0].createdAt,
    });
  });
};

exports.getMin = (req, res) => {
  Post.aggregate([
    {
      $project: {
        createdAt: {
          $dateToString: { format: "%Y-%m-%d", date: "$createdAt" },
        },
      },
    },
    { $group: { _id: { createdAt: "$createdAt" }, count: { $sum: 1 } } },
    { $sort: { count: 1 } },
    { $project: { _id: 0, createdAt: "$_id.createdAt", count: 1 } },
  ]).exec((err, data) => {
    if (err) {
      dashLogger.error(`Error : ${err}, Request : ${req.originalUrl}`);
      return res.status(400).json({
        message: err.message,
      });
    }
    return res.json({
      min: data[0].count,
      date: data[0].createdAt,
    });
  });
};

exports.getMinUser = async (req, res) => {
  await Post.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "post_userid",
        foreignField: "_id",
        as: "user",
      },
    },
    {
      $group: {
        _id: {
          createdAt: {
            $dateToString: { format: "%Y-%m-%d", date: "$createdAt" },
          },
          post_userid: "$post_userid",
        },
        createdAt: {
          $first: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
        },
        count: { $sum: 1 },
        username: { $first: "$user.username" },
      },
    },
    {
      $sort: { count: 1 },
    },
    {
      $project: {
        _id: 1,
        count: 1,
        createdAt: 1,
        username: 1,
      },
    },
  ]).exec((err, data) => {
    if (err) {
      dashLogger.error(`Error : ${err}, Request : ${req.originalUrl}`);
      return res.status(400).json({
        message: err.message,
      });
    }
    return res.json({
      min: data[0].count,
      date: data[0].createdAt,
      username: data[0].username,
    });
  });
};

exports.getMaxUser = async (req, res) => {
  await Post.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "post_userid",
        foreignField: "_id",
        as: "user",
      },
    },
    {
      $group: {
        _id: {
          createdAt: {
            $dateToString: { format: "%Y-%m-%d", date: "$createdAt" },
          },
          post_userid: "$post_userid",
        },
        createdAt: {
          $first: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
        },
        count: { $sum: 1 },
        username: { $first: "$user.username" },
      },
    },
    {
      $sort: { count: -1 },
    },
    {
      $project: {
        _id: 1,
        count: 1,
        createdAt: 1,
        username: 1,
      },
    },
  ]).exec((err, data) => {
    if (err) {
      dashLogger.error(`Error : ${err}, Request : ${req.originalUrl}`);
      return res.status(400).json({
        message: err.message,
      });
    }
    return res.json({
      max: data[0].count,
      date: data[0].createdAt,
      username: data[0].username,
    });
  });
};

exports.statisticsStaff = async (req, res) => {
  var start = req.query.start ? new Date(req.query.start) : new Date();
  var end = req.query.end ? new Date(req.query.end) : new Date();
  end.setDate(end.getDate() + 1);
  var limit = req.query.limit ? parseInt(req.query.limit) : 10;
  var skip = req.query.skip ? parseInt(req.query.skip) : 1;
  var userName = req.query.q && req.query.q != "undefined" ? req.query.q : null;
  await Post.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "post_userid",
        foreignField: "_id",
        as: "user",
      },
    },
    {
      $group: {
        _id: {
          createdAt: {
            $dateToString: { format: "%Y-%m-%d", date: "$createdAt" },
          },
          post_userid: "$post_userid",
        },
        createdAt: {
          $first: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
        },
        count: { $sum: 1 },
        username: { $first: "$user.username" },
      },
    },
    {
      $sort: { createdAt: -1 },
    },
    {
      $project: {
        _id: 1,
        count: 1,
        createdAt: 1,
        username: 1,
      },
    },
  ]).exec((err, data) => {
    if (err) {
      dashLogger.error(`Error : ${err}, Request : ${req.originalUrl}`);
      return res.status(400).json({
        message: err.message,
      });
    }
    var listResult = [];
    data.filter((x) => {
      var date = new Date(x.createdAt);
      if (start <= date && date <= end) {
        listResult.push(x);
      }
    });
    if (listResult && listResult.length > 0) {
      let result = listResult.slice(skip * limit).slice(0, limit);
      if (userName && userName.length > 0) {
        result = result.filter((x) => x.username == userName);
        return res.json({
          total: result.length,
          skip: skip,
          pageSize: limit,
          datas: result,
        });
      }
      return res.json({
        total: listResult.length,
        skip: skip,
        pageSize: limit,
        datas: result,
      });
    } else {
      return res.json({
        total: listResult.length,
        skip: skip,
        pageSize: limit,
        datas: listResult,
      });
    }
  });
};

exports.updateUser = (req, res) => {
  var id = mongoose.Types.ObjectId("62c2a7c3b0e9386a7f640125");
  var limit = req.query.limit ? parseInt(req.query.limit) : 10;
  var skip = req.query.skip ? parseInt(req.query.skip) : 1;
  Post.updateMany(
    { post_userid: { $exists: false } },
    {
      $set: {
        post_userid: id,
      },
    },
    { multi: true }
  ).exec((err, data) => {
    return res.json(data);
  });
};

exports.getAllSlug = async (req, res) => {
  try {
    const result = await Post.find().select("id post_slug").allowDiskUse(true);
    if (!result) {
      return res.status(200).json({ message: "There is not any posts" });
    }
    let duplicateItem = [];
    let uniqueItem = [];

    for (let i = 0; i < result.length - 1; i++) {
      let flag = false;
      for (let j = i + 1; j < result.length; j++) {
        if (result[i].post_slug == result[j].post_slug) {
          duplicateItem.push(result[i]);
          flag = true;
        }
      }
      if (!flag) {
        uniqueItem.push({ post_slug: result[i]?.post_slug });
      }
    }

    if (duplicateItem.length == 0) {
      let dataResult = [];
      const returnData = result.map((item) =>
        dataResult.push({ post_slug: item.post_slug })
      );
      return res.status(200).json(dataResult);
    }

    let returnDuplicateItem = [];

    await Promise.all(
      duplicateItem.map(async (item) => {
        let newSlug = item.post_slug + "-" + item._id;

        await Post.findByIdAndUpdate(item._id, {
          post_slug: item.post_slug + "-" + item.id,
        });

        returnDuplicateItem.push(newSlug);
      })
    );

    return res.status(200).json(returnDuplicateItem.concat(uniqueItem));
    // return res.status(200).json({message: 'Checked', slug: slug})
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
};

exports.filterAndUpdateSlug = async (req, res) => {
  try {
    const result = await Post.find()
      .select("id post_slug status")
      .allowDiskUse(true);
    let wrongItem = [];
    let arrayNeedToUpdate = [];
    result.map((item) => {
      if (item.post_slug.includes(item._id)) {
        const slug = item.post_slug.replace(`${item._id}`, "");
        console.log(slug);
        wrongItem.push(slug);
        arrayNeedToUpdate.push({
          post_slug: slug,
          _id: item._id,
        });
      }
    });
    console.log(arrayNeedToUpdate);
    await Post.deleteMany({ status: "draft", post_slug: wrongItem });
    await Promise.all(
      arrayNeedToUpdate.map(async (item) => {
        await Post.findByIdAndUpdate(item._id, {
          post_slug: item.post_slug,
        });
      })
    );
    return res.status(200).json({ message: "Success" });
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
};
