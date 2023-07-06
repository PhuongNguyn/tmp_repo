const authorize = require("../middleware/authorize");
const Role = require("../helpers/role");
const express = require("express");
const router = express.Router();
const {
  getAll,
  create,
  edit,
  search,
  remove,
  getById,
} = require("../controllers/faq.controller");
const permissionFieldName = require("../helpers/permissionFieldName");
const permissionFunction = require("../helpers/permissionFunction");
/**
 * @swagger
 *  components:
 *   schemas:
 *     FAQ:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example : "5eb12e197e06a76ccdefc121"
 *           description: The Auto-generated id of a faq
 *         faq_name:
 *           type: string
 *           description: name
 *         faq_question:
 *           type: string
 *           description: question
 *         faq_answer:
 *           type: string
 *           description: answer
 *         createdAt:
 *           type: date
 *           description: thời gian tạo
 *         updatedAt:
 *           type: date
 *           description: thời gian update
 *       example:
 *
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
 *    name: FAQ
 *    description: FAQ
 */

/**
 * @swagger
 * /api/faqs:
 *   get:
 *     summary: Returns all faq
 *     tags: [FAQ]
 *     responses:
 *      200:
 *         description: the list of the faq
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/FAQ'
 *
 *      404:
 *        $ref: '#/components/responses/NotFoundError'
 *
 */
router.get("/faqs/", getAll);

/**
 * @swagger
 * /api/faqs/{id}:
 *   parameters:
 *    - in: path
 *      name: id
 *      description: FAQ id
 *      required: true
 *      example: "5eb12e197e06a76ccdefc121"
 *      schema:
 *        type: string
 *   get:
 *     summary: Returns a FAQ
 *     tags: [FAQ]
 *     responses:
 *       200:
 *         description: get by id of the FAQ
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/FAQ'
 *       404:
 *        $ref: '#/components/responses/NotFoundError'
 */
router.get("/faqs/:id", getById);

/**
 * @swagger
 * /api/faqs/faq/search?q={name}:
 *   parameters:
 *    - in: path
 *      description: query
 *      required: true
 *      example: "798bet"
 *      schema:
 *        type: string
 *   get:
 *     summary: Returns a FAQ
 *     tags: [FAQ]
 *     responses:
 *       200:
 *         description: get by id of the FAQ
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/FAQ'
 *       404:
 *        $ref: '#/components/responses/NotFoundError'
 */
router.get("/faqs/faq/search", search);

/**
 * @swagger
 * /api/faqs:
 *   post:
 *     summary: Returns a new faq
 *     tags: [FAQ]
 *     security:
 *        - bearerAuth: []
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                faq_name:
 *                  type: string
 *                  example: "jason"
 *                faq_question:
 *                  type: string
 *                  example: "áassas"
 *                faq_answer:
 *                  type: string
 *                  example: "áassas"
 *     responses:
 *       200:
 *         description: success new faq
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/FAQ'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       404:
 *        $ref: '#/components/responses/NotFoundError'
 */
router.post(
  "/faqs/",
  authorize(permissionFunction.FAQ, permissionFieldName.ADD),
  create
);

/**
 * @swagger
 * /api/faqs/{id}:
 *   parameters:
 *    - in: path
 *      name: id
 *      description: faq id
 *      required: true
 *      example: "5eb12e197e06a76ccdefc121"
 *      schema:
 *        type: string
 *   put:
 *     summary: Returns a faq
 *     tags: [FAQ]
 *     security:
 *        - bearerAuth: []
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                faq_name:
 *                  type: string
 *                  example: "jason"
 *                faq_question:
 *                  type: string
 *                  example: "áassas"
 *                faq_answer:
 *                  type: string
 *                  example: "áassas"
 *     responses:
 *       200:
 *         description: success edit faq
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/FAQ'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       404:
 *        $ref: '#/components/responses/NotFoundError'
 */
router.put(
  "/faqs/:id",
  authorize(permissionFunction.FAQ, permissionFieldName.EDIT),
  edit
);

/**
 * @swagger
 * /api/faqs/remove/{id}:
 *   parameters:
 *    - in: path
 *      name: id
 *      description: faq id
 *      required: true
 *      example: "5eb12e197e06a76ccdefc121"
 *      schema:
 *        type: string
 *   delete:
 *     summary:
 *     tags: [FAQ]
 *     security:
 *        - bearerAuth: [Admin, Editor]
 *     responses:
 *       200:
 *         description: successfuly
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/FAQ'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       404:
 *         $ref: '#/components/responses/NotFoundError'
 */
router.delete(
  "/faqs/remove/:id",
  authorize(permissionFunction.FAQ, permissionFieldName.DELETE),
  remove
);

module.exports = router;
