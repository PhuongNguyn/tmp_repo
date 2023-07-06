const express = require("express");
const router = express.Router();
const authorize = require("../middleware/authorize");
const {
  create,
  list,
  read,
  remove,
  update,
  listSearch,
} = require("../controllers/dealer.controller");
const Role = require("../helpers/role");
const permissionFieldName = require("../helpers/permissionFieldName");
const permissionFunction = require("../helpers/permissionFunction");
/**
 * @swagger
 *  components:
 *   schemas:
 *     Dealers:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example : "5eb12e197e06a76ccdefc121"
 *           description: The Auto-generated id of a dealer
 *         dealer_name:
 *           type: string
 *           description: tên nhà cái
 *         dealer_promotion:
 *           type: array
 *           description: khuyến mãi
 *         dealer_tag_rate:
 *           type: array
 *           description: tag rate
 *         dealer_star_rate:
 *           type: array
 *           description: star rate
 *         dealer_rating:
 *           type: array
 *           description: rating
 *         dealer_link:
 *           type: array
 *           description: link
 *         dealer_image:
 *           type: string
 *           description: hình ảnh
 *         dealer_description:
 *           type: string
 *           description: mô tả
 *         dealer_video:
 *           type: string
 *           description: video
 *         dealer_interview:
 *           type: string
 *           description: interview
 *         dealer_slug:
 *           type: string
 *           description: slug
 *         createdAt:
 *           type: date
 *           description: thời gian tạo
 *         updatedAt:
 *           type: date
 *           description: thời gian update
 *   responses:
 *     UnauthorizedError:
 *       description: Access token is missing or invalid, or the user does not have access to perform the action
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: "Unauthorized"
 *     NotFoundError:
 *       description: Not Found
 *       content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                 message:
 *                   type: string
 *                   example: "Not Found"
 */

/**
 * @swagger
 *  tags:
 *    name: Dealers
 *    description: Dealers
 */

/**
 * @swagger
 * /api/dealers:
 *   get:
 *     summary: Returns all dealers
 *     tags: [Dealers]
 *     responses:
 *      200:
 *         description: the list of the dealers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Dealers'
 *
 *      404:
 *        $ref: '#/components/responses/NotFoundError'
 */
router.get("/dealers", list);

/**
 * @swagger
 * /api/dealers/{id}:
 *   parameters:
 *    - in: path
 *      name: id
 *      description: query
 *      required: true
 *      example: "5eb12e197e06a76ccdefc121"
 *      schema:
 *        type: string
 *   get:
 *     summary: Returns all dealers
 *     tags: [Dealers]
 *     responses:
 *      200:
 *         description: the list of the dealers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Dealers'
 *
 *      404:
 *        $ref: '#/components/responses/NotFoundError'
 */
router.get("/dealers/:id", read);

/**
 * @swagger
 * /api/dealers/dealer/search:
 *   parameters:
 *    - in: query
 *      name: q
 *      description: query
 *      required: true
 *      example: "789bet"
 *      schema:
 *        type: string
 *   get:
 *     summary: Returns all dealers
 *     tags: [Dealers]
 *     responses:
 *      200:
 *         description: the list of the dealers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Dealers'
 *
 *      404:
 *        $ref: '#/components/responses/NotFoundError'
 */
router.get("/dealers/dealer/search", listSearch);

/**
 * @swagger
 * /api/dealers:
 *   post:
 *     summary: Returns a edit dealer
 *     tags: [Dealers]
 *     security:
 *        - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *          multipart/form-data:
 *            schema:
 *              type: object
 *              properties:
 *                dealer_name:
 *                  description: name
 *                  required: true
 *                  type: string
 *                dealer_promotion:
 *                  description: ababbss,dddhh
 *                  type: string
 *                dealer_tag_rate:
 *                  description: ababbss,dddhh
 *                  required: true
 *                  type: string
 *                dealer_star_rate:
 *                  description: ababbss,dddhh
 *                  type: string
 *                dealer_rating:
 *                  description: ababbss,dddhh
 *                  type: string
 *                dealer_link:
 *                  description: link
 *                  type: string
 *                dealer_image:
 *                  description: image
 *                  type: string
 *                dealer_description:
 *                  description: description
 *                  required: true
 *                  type: string
 *                dealer_video:
 *                  description: video
 *                  type: string
 *                dealer_interview:
 *                  description: interview
 *                  type: string
 *                dealer_slug:
 *                  description: để trống tự phát sinh
 *                  required: true
 *                  type: string
 *                faq_id:
 *                  description: abccc,1221212
 *                  required: true
 *                  type: string
 *     responses:
 *       200:
 *         description: success new dealer
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Dealers'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       404:
 *        $ref: '#/components/responses/NotFoundError'
 */
router.post(
  "/dealers/",
  authorize(permissionFunction.DEALER, permissionFieldName.ADD),
  create
);

/**
 * @swagger
 * /api/dealers/{id}:
 *   parameters:
 *    - in: path
 *      name: id
 *      description: dealer id
 *      required: true
 *      example: "5eb12e197e06a76ccdefc121"
 *      schema:
 *        type: string
 *   put:
 *     summary: Returns a edit dealer
 *     tags: [Dealers]
 *     security:
 *        - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *          multipart/form-data:
 *            schema:
 *              type: object
 *              properties:
 *                dealer_name:
 *                  description: name
 *                  required: true
 *                  type: string
 *                dealer_promotion:
 *                  description: ababbss,dddhh
 *                  type: string
 *                dealer_tag_rate:
 *                  description: ababbss,dddhh
 *                  required: true
 *                  type: string
 *                dealer_star_rate:
 *                  description: ababbss,dddhh
 *                  type: string
 *                dealer_rating:
 *                  description: ababbss,dddhh
 *                  type: string
 *                dealer_link:
 *                  description: link
 *                  type: string
 *                dealer_image:
 *                  description: image
 *                  type: string
 *                dealer_description:
 *                  description: description
 *                  required: true
 *                  type: string
 *                dealer_video:
 *                  description: video
 *                  type: string
 *                dealer_interview:
 *                  description: interview
 *                  type: string
 *                dealer_slug:
 *                  description: để trống tự phát sinh
 *                  required: true
 *                  type: string
 *                faq_id:
 *                  description: abccc,1221212
 *                  required: true
 *                  type: string
 *     responses:
 *       200:
 *         description: success new dealer
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Dealers'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       404:
 *        $ref: '#/components/responses/NotFoundError'
 */
router.put(
  "/dealers/:id",
  authorize(permissionFunction.DEALER, permissionFieldName.EDIT),
  update
);

/**
 * @swagger
 * /api/dealers/remove/{id}:
 *   parameters:
 *    - in: path
 *      name: id
 *      description: id
 *      required: true
 *      example: "5eb12e197e06a76ccdefc121"
 *      schema:
 *        type: string
 *   delete:
 *     summary: Returns all dealers
 *     tags: [Dealers]
 *     responses:
 *      200:
 *         description: the list of the dealers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Dealers'
 *
 *      404:
 *        $ref: '#/components/responses/NotFoundError'
 */
router.delete(
  "/dealers/remove/:id",
  authorize(permissionFunction.DEALER, permissionFieldName.DELETE),
  remove
);

module.exports = router;
