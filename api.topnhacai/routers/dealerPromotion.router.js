const authorize = require("../middleware/authorize");
const Role = require("../helpers/role");
const express = require("express");
const router = express.Router();
const {
  list,
  create,
  update,
  listSearch,
  remove,
  read,
  getByDealerId,
} = require("../controllers/dealerPromotion.controller");
const permissionFunction = require("../helpers/permissionFunction");
const permissionFieldName = require("../helpers/permissionFieldName");

/**
 * @swagger
 *  components:
 *   schemas:
 *     DealerPromotion:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example : "5eb12e197e06a76ccdefc121"
 *           description: The Auto-generated id of a dealer
 *         dp_name:
 *           type: string
 *           description: tên nhà cái
 *         dp_detail:
 *           type: array
 *           description: chi tiết
 *         dp_link:
 *           type: string
 *           description: link
 *         dealer_id:
 *           type: array
 *           description: dealer id object
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
 *    name: DealerPromotion
 *    description: Dealer promotion
 */

/**
 * @swagger
 * /api/dealerPromotion/{id} :
 *   parameters:
 *    - in: path
 *      name: id
 *      description: dealer promotion id
 *      required: true
 *      example: "5eb12e197e06a76ccdefc121"
 *      schema:
 *        type: string
 *   get:
 *     summary: Returns a dealer promotion
 *     tags: [DealerPromotion]
 *     responses:
 *       200:
 *         description: get by id of the dealer payment
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/DealerPromotion'
 *       404:
 *        $ref: '#/components/responses/NotFoundError'
 */
router.get("/dealerPromotion/:id", read);

/**
 * @swagger
 * /api/dealerPromotion:
 *    get:
 *      summary: Returns all dealers
 *      operationId: abc
 *      tags: [DealerPromotion]
 *      responses:
 *       200:
 *         description: the list of the dealers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/DealerPromotion'
 *
 *       404:
 *        $ref: '#/components/responses/NotFoundError'
 */
router.get("/dealerPromotion/", list);

/**
 * @swagger
 * /api/dealerPromotion/dealer/search?q={name}:
 *   parameters:
 *    - in: query
 *      description: query
 *      required: true
 *      example: "798bet"
 *      schema:
 *        type: string
 *   get:
 *     summary: Returns a Dealer Promotion
 *     tags: [DealerPromotion]
 *     responses:
 *       200:
 *         description: get by id of the Dealer Promotion
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/DealerPromotion'
 *       404:
 *        $ref: '#/components/responses/NotFoundError'
 */
router.get("/dealerPromotion/dealer/search", listSearch);

/**
 * @swagger
 * /api/dealerPromotion:
 *   post:
 *     summary: Returns a new dealer promotion
 *     tags: [DealerPromotion]
 *     security:
 *        - bearerAuth: []
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                dp_name:
 *                  type: string
 *                  example: "jason"
 *                dp_detail:
 *                  type: string
 *                  example: "áassas,hhhh777"
 *                dp_link:
 *                  type: string
 *                  example: "áassas"
 *                dealer_id:
 *                  type: string
 *                  example: "áassas,177hjhjhh"
 *              required:
 *                - dealer_id
 *     responses:
 *       200:
 *         description: success new dealer
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/DealerPromotion'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       404:
 *        $ref: '#/components/responses/NotFoundError'
 */
router.post(
  "/dealerPromotion/",
  authorize(permissionFunction.DEALERPROMOTION, permissionFieldName.ADD),
  create
);

/**
 * @swagger
 * /api/dealerPromotion/{id}:
 *   parameters:
 *    - in: path
 *      name: id
 *      description: dealer promotion id
 *      required: true
 *      example: "5eb12e197e06a76ccdefc121"
 *      schema:
 *        type: string
 *   put:
 *     summary: Returns a new dealer promotion
 *     tags: [DealerPromotion]
 *     security:
 *        - bearerAuth: []
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                dp_name:
 *                  type: string
 *                  example: "jason"
 *                dp_detail:
 *                  type: string
 *                  example: "áassas,hhhh777"
 *                dp_link:
 *                  type: string
 *                  example: "áassas"
 *                dealer_id:
 *                  type: string
 *                  example: "áassas,177hjhjhh"
 *              required:
 *                - dealer_id
 *     responses:
 *       200:
 *         description: success new dealer
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/DealerPromotion'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       404:
 *        $ref: '#/components/responses/NotFoundError'
 */
router.put(
  "/dealerPromotion/:id",
  authorize(permissionFunction.DEALERPROMOTION, permissionFieldName.EDIT),
  update
);

/**
 * @swagger
 * /api/dealerPromotion/remove/{id}:
 *   parameters:
 *    - in: path
 *      name: id
 *      description: dealer promotion id
 *      required: true
 *      example: "5eb12e197e06a76ccdefc121"
 *      schema:
 *        type: string
 *   delete:
 *     summary:
 *     tags: [DealerPromotion]
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
 *                 $ref: '#/components/schemas/DealerPromotion'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       404:
 *         $ref: '#/components/responses/NotFoundError'
 */
router.delete(
  "/dealerPromotion/remove/:id",
  authorize(permissionFunction.DEALERPROMOTION, permissionFieldName.DELETE),
  remove
);
router.get("/dealerPromotion/getByDealerId/:id", getByDealerId);
module.exports = router;
