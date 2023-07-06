import React, { useEffect, useState, useRef } from "react";
import {
  Container,
  InputGroup,
  Row,
  Col,
  Input,
  InputGroupText,
  Form,
  FormGroup,
  Label,
} from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import {
  Select,
  notification,
  Input as InputAntd,
  Button,
  Spin,
  Modal,
} from "antd";
import { useHistory, useParams, useLocation } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  getAllSchemas,
  getAllTaxonomies,
  createPost,
  getPostById,
  editPost,
  addSchema,
  getAllPosts,
  deleteSchema,
  searchPost,
  getPostXML,
} from "../../helpers/helper";
import { uploadFileToBunny } from "../../helpers/api_bunny";
import { Editor } from "@tinymce/tinymce-react";
import { error, success } from "../../Components/Common/message";
import { URL_IMAGE_BUNNY } from "../../helpers/url_helper";
import { use } from "echarts";
import TagComp from "./tag/TagComp";
import ModalCheck from "./ModalCheck/ModalCheck";
import CaculateSeoPost from "../../Components/Common/CaculateSeoPost";
const { Option } = Select;
const initialData = {
  id: "",
  post_title: "",
  post_taxid: "",
  post_views: 0,
  post_status: "",
  post_userid: "",
  post_image: "",
  post_content: "",
  post_slug: "",
  post_description: "",
  post_schemaid: [],
  post_keyfocus: [],
};

function CreateEditPost() {
  const [isLoading, setIsLoading] = useState(false);
  const [schemaList, setSchemaList] = useState([]);
  const [taxList, setTaxList] = useState([]);
  const [schemas, setSchemas] = useState([]);
  const [posts, setPosts] = useState([]);
  const [formTax, setFormTax] = useState([]);
  const [formAdd, setFormAdd] = useState(initialData);
  const editorDescriptionRef = useRef(null);
  const editorContentRef = useRef(null);
  const [isModalAddSchemaVisible, setIsModalVisible] = useState(false);
  const [isConfirmModalVisible, setConfirmModalVisible] = useState(false);
  const [keyfocus, setKeyfocus] = useState([]);
  // const { id } = useParams();
  const location = useLocation();
  const id = location?.state?.id || "";
  const authUser = sessionStorage.getItem("authUser")
    ? JSON.parse(sessionStorage.getItem("authUser"))
    : null;
  const { slug } = useParams();
  const history = useHistory();

  const [formSchema, setFormSchema] = useState({
    schema_type: "",
    schema_script: "",
    post_id: [],
    page_id: [],
  });

  const getSchemas = () => {
    getAllSchemas().then((res) => {
      setSchemas(res);
    });
  };
  const convertHtmlText = (htmlText) => {
    if (htmlText && htmlText.length > 0) {
      let strText =
        new DOMParser().parseFromString(htmlText, "text/html").documentElement
          .textContent || "";
      return strText;
    }
    return "";
  };
  useEffect(() => {
    setIsLoading(true);
    if (!authUser) {
      notification["error"]({
        message: "System error",
        description: "Vui lòng đăng nhập lại",
      });
      setIsLoading(false);
    }
    if (slug) {
      getPostById(slug)
        .then((res) => {
          let image = res.post_image.toString().split("\\");
          if (res.post_image && image[1] === "fakepath") {
            res.post_image = URL_IMAGE_BUNNY + res.post_image.substr(12);
          }
          // console.log('res:', res.post_image);
          setFormAdd({
            ...res,
            id: res?._id,
            post_image: res.post_image,
            post_taxid: res.post_taxid?.map((i) => i._id),
            post_schemaid: res.post_schemaid?.map((i) => i._id),
          });
          const KeyFocus = res?.post_keyfocus?.map((item, i) => ({
            id: new Date().getTime() + i,
            text: item,
          }));
          setKeyfocus(KeyFocus);
          setIsLoading(false);
        })
        .catch((error) => {
          notification["error"]({
            message: "System error",
            description: error,
          });
          setIsLoading(false);
        });
    }
    getPostXML().then((res) => {
      if (res && res.length > 0) {
        setPosts(res);
      }
    });
    getAllSchemas()
      .then((res) => {
        const formatRes = res.map((item) => {
          item.schema_script = convertHtmlText(item.schema_script);
          return item;
        });
        setSchemaList(formatRes);
        setIsLoading(false);
        //return getAllTaxonomies();
      })
      // .then((res) => {
      //   setTaxList(res);
      //   //setIsLoading(false);
      // })
      .catch((error) => {
        setIsLoading(false);
        notification["error"]({
          message: "System error",
          description: error,
        });
      });
    getAllTaxonomies()
      .then((res) => {
        if (res) {
          setTaxList(res);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        notification["error"]({
          message: "System error",
          description: error,
        });
      });
  }, []);
  const onSave = () => {
    setIsLoading(true);
    let des = "";
    let content = "";

    if (editorDescriptionRef.current) {
      des = editorDescriptionRef.current.getContent() || "";
    }
    if (editorContentRef.current) {
      content = editorContentRef.current.getContent() || "";
    }
    const payload = new FormData();
    payload.append("post_content", content);
    payload.append("id", formAdd._id || formAdd.id);
    payload.append("post_description", des);
    payload.append("post_image", formAdd.post_image);
    payload.append("post_schemaid", formAdd.post_schemaid);
    payload.append("post_slug", formAdd.post_slug);
    payload.append("post_status", formAdd.post_status);
    payload.append("post_taxid", formAdd.post_taxid);
    payload.append("post_title", formAdd.post_title);
    payload.append("post_views", formAdd.post_views);
    payload.append("post_userid", authUser.id);
    payload.append("post_keyfocus", formAdd.post_keyfocus);
    if (id) {
      editPost(payload)
        .then((res) => {
          notification["success"]({
            message: "Notification",
            description: "Edit Post successfully!",
          });
          setIsLoading(false);
          history.push("/posts");
        })
        .catch((error) => {
          setIsLoading(false);
          notification["error"]({
            message: "System error",
            description: error,
          });
        });
    } else {
      setIsLoading(true);

      createPost(payload)
        .then((res) => {
          if (res.error) {
            throw new Error(res.error);
          }
          setIsLoading(false);
          notification["success"]({
            message: "Notification",
            description: "Create post successfully!",
          });
          history.push("/posts");
        })
        .catch((error) => {
          setIsLoading(false);
          notification["error"]({
            message: "System error",
            description: error,
          });
        });
    }
  };
  const onBack = () => {
    history.goBack();
  };
  const onInputChange = (e) => {
    setFormAdd({
      ...formAdd,
      [e.target.name]: e.target.value,
    });

    let file = e.target.files ? e.target.files[0] : null;
    if (file) {
      uploadFileToBunny(file);
      setFormAdd({
        ...formAdd,
        [e.target.name]: "https://cdn.topnhacai.today/" + file.name,
      });
    }
  };

  const onSchemaInputChange = (e) => {
    setFormSchema({
      ...formSchema,
      [e.target.name]: e.target.value,
    });
  };
  const onChangeStatus = (e) => {
    setFormAdd({
      ...formAdd,
      post_status: e,
    });
  };

  const onDescriptionChange = (value) => {
    setFormAdd({
      ...formAdd,
      post_description: value,
    });
  };

  const onSchemaChange = (value) => {
    // console.log("schema value: ", value);
    setFormAdd({
      ...formAdd,
      post_schemaid: value,
    });
  };
  const onTaxChange = (value) => {
    // console.log("onTaxChange value: ", value);
    setFormAdd({
      ...formAdd,
      post_taxid: value,
    });
  };
  const onPostChange = (e) => {
    // console.log(e);
    setFormSchema({
      ...formSchema,
      post_id: e,
    });
  };
  const addNewSchema = () => {
    addSchema({ ...formSchema, post_id: formSchema.post_id.join(",") })
      .then((res) => {
        success();
        setIsModalVisible(false);
        getSchemas();
        setFormSchema({
          schema_type: "",
          schema_script: "",
          post_id: [],
        });
      })
      .catch((err) => {
        error();
      });
  };

  const removeSchema = () => {
    // console.log('formSchema.post_schemaid: ', formAdd.post_schemaid);
    if (formAdd.post_schemaid && formAdd.post_schemaid.length) {
      formAdd.post_schemaid.split(",").forEach((id) => {
        deleteSchema(id)
          .then((res) => {
            getSchemas();
            success();
          })
          .catch((er) => {
            error();
          });
      });
      setTimeout(() => {
        setFormAdd({
          ...formAdd,
          post_schemaid: "",
        });
      }, 1000);
      setConfirmModalVisible(false);
    }
  };

  const onPressKeyfocus = (e) => {
    if (e.key === "Enter" && e.target.value) {
      setKeyfocus([
        ...keyfocus,
        { id: new Date().getTime(), text: e.target.value },
      ]);
      const txtValues = keyfocus.map((item) => item.text);
      setFormAdd({
        ...formAdd,
        post_keyfocus: [...txtValues, e.target.value].toString(),
      });
      e.target.value = "";
    }
  };

  const onRemoveKeyfocus = (id) => {
    const rates = keyfocus.filter((item) => item.id !== id);
    setKeyfocus(rates);
    const txtValues = rates.map((item) => item.text);
    setFormAdd({
      ...formAdd,
      post_keyfocus: txtValues,
    });
  };

  const breadCrumbTitle = id ? "Sửa" : "Thêm mới";

  const countKeywordInContent = (value) => {
    let content = "";
    let description = "";
    if (editorContentRef.current) {
      content = convertHtmlText(editorContentRef.current.getContent());
    }
    if (editorDescriptionRef.current) {
      description = convertHtmlText(editorDescriptionRef.current.getContent());
    }
    let regex = new RegExp(value.text, "i");
    let countContent = content.split(regex).length - 1;
    let countTitle = formAdd.post_title.split(regex).length - 1;
    let countDescription = description.split(regex).length - 1;
    if (content.split(regex).length - 1 > 0) {
      return {
        countContent,
        countTitle,
        countDescription,
      };
    } else {
      return 0;
    }
  };
  return (
    <>
      <Spin spinning={isLoading}>
        <div className="page-content">
          <BreadCrumb
            title={breadCrumbTitle}
            pageTitle="Bài viết"
            slug="posts"
          />
          <div style={{ marginLeft: "10px" }}>
            <Form onSubmit={onSave}>
              <Row>
                <Col lg={12}>
                  <FormGroup>
                    <Label className="mb-1" for="post_title">
                      Tiêu đề
                    </Label>
                    <Input
                      id="post_title"
                      name="post_title"
                      placeholder="Title"
                      type="post_title"
                      defaultValue={formAdd.post_title || ""}
                      onChange={onInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col lg={12}>
                  <FormGroup>
                    <Label className="mb-1" for="post_slug">
                      Đường dẫn tĩnh
                    </Label>
                    <Input
                      id="post_slug"
                      name="post_slug"
                      placeholder="Slug"
                      type="dealer_name"
                      defaultValue={formAdd.post_slug || ""}
                      onChange={onInputChange}
                    />
                  </FormGroup>
                </Col>

                <Col lg={12}>
                  <FormGroup>
                    <Label className="mb-1">Schema:</Label>
                    <div className="flex items-center">
                      <Select
                        size="large"
                        mode="multiple"
                        style={{ width: "100%" }}
                        placeholder="Please select"
                        onChange={onSchemaChange}
                        value={formAdd.post_schemaid || []}
                        // defaultValue={formAdd.post_schemaid || []}
                      >
                        {schemaList?.map((item, index) => (
                          <Option key={index} value={item._id}>
                            {item?.schema_type}
                          </Option>
                        ))}
                      </Select>
                      <Button
                        onClick={() => setIsModalVisible(true)}
                        className="ml-3"
                        size="large"
                        type="primary"
                      >
                        Add Schema
                      </Button>
                      <Button
                        className="ml-3"
                        size="large"
                        danger
                        onClick={() => setConfirmModalVisible(true)}
                      >
                        Delete Schema{" "}
                      </Button>
                    </div>
                  </FormGroup>
                </Col>
                <Col lg={12}>
                  <FormGroup>
                    <Label className="mb-1" for="post_description">
                      Mô tả
                    </Label>
                    {/* <ReactQuill
                      defaultValue={formVal.post_description}
                      onChange={(onDescriptionChange)}
                    /> */}
                    <Editor
                      apiKey={
                        "w17lpon88s3owkb87t8wnmyrb7dnvziqf3mrghzfk7ft8cpl"
                      }
                      onInit={(evt, editor) =>
                        (editorDescriptionRef.current = editor)
                      }
                      initialValue={formAdd?.post_description || ""}
                      // value={formVal?.post_description}
                      init={{
                        height: 200,
                        menubar: false,
                        file_picker_callback: function (cb, value, meta) {
                          var input = document.createElement("input");
                          input.setAttribute("type", "file");
                          input.setAttribute("accept", "image/*");
                          input.onchange = function () {
                            var file = this.files[0];

                            var reader = new FileReader();
                            reader.onload = function () {
                              var id = "blobid1" + new Date().getTime();
                              var blobCache =
                                editorDescriptionRef.current.editorUpload
                                  .blobCache;
                              var base64 = reader.result.split(",")[1];
                              var blobInfo = blobCache.create(id, file, base64);
                              blobCache.add(blobInfo);

                              /* call the callback and populate the Title field with the file name */
                              cb(blobInfo.blobUri(), { title: file.name });
                            };
                            reader.readAsDataURL(file);
                          };
                          input.click();
                        },
                        paste_data_images: true,
                        image_title: true,
                        automatic_uploads: true,
                        file_picker_types: "image",
                        plugins: [
                          "advlist",
                          "autolink",
                          "lists",
                          "link",
                          "image",
                          "charmap",
                          "preview",
                          "anchor",
                          "searchreplace",
                          "visualblocks",
                          "code",
                          "fullscreen",
                          "insertdatetime",
                          "media",
                          "table",
                          "code",
                          "help",
                          "wordcount",
                          "image",
                        ],
                        toolbar:
                          "undo redo | blocks | " +
                          "bold italic forecolor | alignleft aligncenter " +
                          "alignright alignjustify | bullist numlist outdent indent | " +
                          "removeformat | link image | code",
                        content_style:
                          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                      }}
                    />
                  </FormGroup>
                </Col>
                <Col lg={12}>
                  <FormGroup>
                    <Label className="mb-1" for="post_content">
                      Nội dung
                    </Label>
                    <Editor
                      apiKey={
                        "w17lpon88s3owkb87t8wnmyrb7dnvziqf3mrghzfk7ft8cpl"
                      }
                      onInit={(evt, editor) =>
                        (editorContentRef.current = editor)
                      }
                      initialValue={formAdd?.post_content || ""}
                      // value={formVal?.post_description}
                      init={{
                        height: 200,
                        menubar: false,
                        file_picker_callback: function (cb, value, meta) {
                          var input = document.createElement("input");
                          input.setAttribute("type", "file");
                          input.setAttribute("accept", "image/*");
                          input.onchange = function () {
                            var file = this.files[0];

                            var reader = new FileReader();
                            reader.onload = function () {
                              var id = "blobid" + new Date().getTime();
                              var blobCache =
                                editorContentRef.current.editorUpload.blobCache;
                              var base64 = reader.result.split(",")[1];
                              var blobInfo = blobCache.create(id, file, base64);
                              blobCache.add(blobInfo);

                              /* call the callback and populate the Title field with the file name */
                              console.log(file, "name")
                              cb(blobInfo.blobUri(), { title: file.name });
                            };
                            reader.readAsDataURL(file);
                          };
                          input.click();
                        },
                        paste_data_images: true,
                        image_title: true,
                        automatic_uploads: true,
                        file_picker_types: "image",
                        plugins: [
                          "advlist",
                          "autolink",
                          "lists",
                          "link",
                          "image",
                          "charmap",
                          "preview",
                          "anchor",
                          "searchreplace",
                          "visualblocks",
                          "code",
                          "fullscreen",
                          "insertdatetime",
                          "media",
                          "table",
                          "code",
                          "help",
                          "wordcount",
                          "image",
                        ],
                        toolbar:
                          "undo redo | blocks | " +
                          "bold italic forecolor | alignleft aligncenter " +
                          "alignright alignjustify | bullist numlist outdent indent | " +
                          "removeformat | link image | code",
                        content_style:
                          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                      }}
                    />
                    {/* <Input
                      id="post_content"
                      name="post_content"
                      placeholder="Content"
                      type="textarea"
                      defaultValue={formAdd.post_content || ""}
                      onChange={onInputChange}
                    /> */}
                  </FormGroup>
                </Col>
                <Col lg={12}>
                  <FormGroup>
                    <Label className="mb-1" for="post_status">
                      Trạng thái
                    </Label>
                    <Select
                      value={formAdd.post_status}
                      style={{ width: "100%" }}
                      onChange={onChangeStatus}
                    >
                      <Option value="public">Đăng</Option>
                      <Option value="draft">Nháp</Option>
                      <Option value="pending">Chờ xét duyệt</Option>
                    </Select>
                    {/* <Input
                      id="post_status"
                      name="post_status"
                      placeholder="Status"
                      type="text"
                      defaultValue={formAdd.post_status || ""}
                      onChange={onInputChange}
                    /> */}
                  </FormGroup>
                </Col>
                <Col lg={12}>
                  <FormGroup>
                    <Label className="mb-1">Chuyên mục:</Label>
                    <Select
                      mode="multiple"
                      style={{ width: "100%" }}
                      placeholder="Please select"
                      onChange={onTaxChange}
                      value={formAdd.post_taxid || []}
                    >
                      {taxList &&
                        taxList?.map((item) => (
                          <Option key={item._id}>{item?.tax_name}</Option>
                        ))}
                    </Select>
                  </FormGroup>
                </Col>
                <Col lg={12}>
                  <FormGroup>
                    <Label className="mb-1" for="post_image">
                      Hình ảnh
                    </Label>
                    <div>
                      <label className="custom-file-upload">
                        <Input
                          id="post_image"
                          name="post_image"
                          placeholder="Image"
                          type="file"
                          defaultValue={formAdd.post_image || ""}
                          onChange={onInputChange}
                        />
                        Thêm hình ảnh
                      </label>
                    </div>
                    {formAdd.post_image && formAdd.post_image !== "" && (
                      <Col lg={2}>
                        <img
                          src={formAdd.post_image}
                          alt={formAdd.post_image}
                          style={{ width: "100%" }}
                        />
                      </Col>
                    )}
                  </FormGroup>
                </Col>
                <Col lg={12}>
                  <FormGroup>
                    <Label className="mb-1" for="dealer_link">
                      Focus keyword
                    </Label>
                    <Input
                      id="post_keyword"
                      name="post_keyword"
                      placeholder="Nhập xong nhấp enter"
                      type="dealer_link"
                      defaultValue={formAdd.post_keyfocus}
                      onKeyPress={onPressKeyfocus}
                    />
                  </FormGroup>
                  {keyfocus.map((item, i) => {
                    let count = countKeywordInContent(item);

                    return (
                      <>
                        <TagComp
                          key={i}
                          content={item}
                          onRemove={onRemoveKeyfocus}
                          id={item.id}
                        />
                        (Tiêu đề: {count.countTitle} từ, Miêu tả:{" "}
                        {count.countDescription} từ, Nội dung:{" "}
                        {count.countContent} từ)
                      </>
                    );
                  })}
                  <ModalCheck keyword={keyfocus} id={id} />
                </Col>
                <Col lg={12}>
                  <CaculateSeoPost formData={formAdd} editorDescriptionRef={editorDescriptionRef} editorContentRef={editorContentRef} />
                </Col>
              </Row>
            </Form>
          </div>
          <Row>
            <Col style={{ marginLeft: "10px", marginTop: "10px" }}>
              <Button style={{ marginRight: "10px" }} onClick={onBack}>
                {" "}
                Quay lại
              </Button>
              <Button type="primary" onClick={onSave}>
                Lưu
              </Button>
            </Col>
          </Row>
        </div>
      </Spin>

      <Modal
        title="Thêm mới schema"
        okText="Save"
        visible={isModalAddSchemaVisible}
        onOk={addNewSchema}
        onCancel={() => setIsModalVisible(false)}
        width="680px"
      >
        <div>
          <Form>
            <Row>
              <Col lg={6}>
                <FormGroup>
                  <Label className="mb-1" for="schema_type">
                    Loại
                  </Label>
                  <Input
                    id="schema_type"
                    name="schema_type"
                    placeholder="Schema type"
                    type="text"
                    value={formSchema.schema_type}
                    onChange={onSchemaInputChange}
                  />
                </FormGroup>
              </Col>
              <Col lg={6}>
                <FormGroup>
                  <Label className="mb-1" for="schema_script">
                    Đoạn mã
                  </Label>
                  <Input
                    id="schema_script"
                    name="schema_script"
                    placeholder="Schema script"
                    type="text"
                    value={formSchema.schema_script}
                    onChange={onSchemaInputChange}
                  />
                </FormGroup>
              </Col>
              <Col lg={12}>
                <FormGroup>
                  <Label className="mb-1" for="post_id">
                    Bài viết
                  </Label>
                  <Select
                    mode="multiple"
                    size="large"
                    name="post_id"
                    id="post_id"
                    value={formSchema.post_id}
                    onChange={onPostChange}
                    placeholder="Posts"
                    style={{ width: "100%" }}
                  >
                    {posts &&
                      posts.length > 0 &&
                      posts?.map((post) => {
                        return (
                          <Option key={post._id} value={post._id}>
                            {post.post_title}
                          </Option>
                        );
                      })}
                  </Select>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </div>
      </Modal>

      <Modal
        title="Confirm to delete"
        visible={isConfirmModalVisible}
        onOk={removeSchema}
        onCancel={() => setConfirmModalVisible(false)}
      >
        <p>Are you sure to delete this faq?</p>
      </Modal>
    </>
  );
}

export default CreateEditPost;
