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
} = require("../controllers/dealerService.controller");
const permissionFunction = require("../helpers/permissionFunction");
const permissionFieldName = require("../helpers/permissionFieldName");

/**
 * @swagger
 *  components:
 *   schemas:
 *     DealerService:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example : "5eb12e197e06a76cc2222defc121"
 *           description: The Auto-generated id of a dealer service
 *         ds_zalo:
 *           type: string
 *           description: zalo
 *         ds_skype:
 *           type: string
 *           description: skype
 *         ds_viber:
 *           type: string
 *           description: viber
 *         ds_email:
 *           type: string
 *           description: email
 *         ds_hotline:
 *           type: string
 *           description: hotline
 *         ds_telegram:
 *           type: string
 *           description: telegram
 *         ds_time:
 *           type: string
 *           description: time
 *         dealer_id:
 *           type: array
 *           description: dealer id
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
 *    name: DealerService
 *    description: Dealer Service
 */

/**
 * @swagger
 * /api/dealerService:
 *   get:
 *     summary: Returns all dealer service
 *     tags: [DealerService]
 *     responses:
 *      200:
 *         description: the list of the dealer service
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/DealerService'
 *
 *      404:
 *        $ref: '#/components/responses/NotFoundError'
 *
 */

router.get("/dealerService/", list);

/**
 * @swagger
 * /api/dealerService/{id}:
 *   parameters:
 *    - in: path
 *      name: id
 *      description: dealer service id
 *      required: true
 *      example: "5eb12e197e06a76c222213cdefc121"
 *      schema:
 *        type: string
 *   get:
 *     summary: Returns a dealer service
 *     tags: [DealerService]
 *     responses:
 *       200:
 *         description: get by id of the dealer service
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/DealerService'
 *       404:
 *        $ref: '#/components/responses/NotFoundError'
 */
router.get("/dealerService/:id", read);

/**
 * @swagger
 * /api/dealerService/dealer/search?q={name}:
 *   parameters:
 *    - in: path
 *      description: query
 *      required: true
 *      example: "798bet"
 *      schema:
 *        type: string
 *   get:
 *     summary: Returns a Dealer Service
 *     tags: [DealerService]
 *     responses:
 *       200:
 *         description: get by id of the Dealer Service
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/DealerService'
 *       404:
 *        $ref: '#/components/responses/NotFoundError'
 */
router.get("/dealerService/dealer/search", listSearch);

/**
 * @swagger
 * /api/dealerService:
 *   post:
 *     summary: Returns a new dealer service
 *     tags: [DealerService]
 *     security:
 *        - bearerAuth: []
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                ds_zalo:
 *                  type: string
 *                  example: "jason"
 *                ds_skype:
 *                  type: string
 *                  example: "áassas"
 *                ds_viber:
 *                  type: string
 *                  example: "áassas"
 *                ds_email:
 *                  type: string
 *                  example: "áassas"
 *                ds_hotline:
 *                  type: string
 *                  example: "áassas"
 *                ds_telegram:
 *                  type: string
 *                  example: "áassas"
 *                ds_time:
 *                  type: string
 *                  example: "áassas"
 *                dealer_id:
 *                  type: string
 *                  example: "aab1221,212128sjsjs"
 *                  required: true
 *              required:
 *                - dealer_id
 *     responses:
 *       200:
 *         description: success new dealer service
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/DealerService'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       404:
 *        $ref: '#/components/responses/NotFoundError'
 */
router.post(
  "/dealerService/",
  authorize(permissionFunction.DEALERSERVICE, permissionFieldName.ADD),
  create
);

/**
 * @swagger
 * /api/dealerService:
 *   parameters:
 *    - in: path
 *      name: id
 *      description: dealer service id
 *      required: true
 *      example: "22213sss1212"
 *      schema:
 *        type: string
 *   put:
 *     summary: Returns a new dealer service
 *     tags: [DealerService]
 *     security:
 *        - bearerAuth: []
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                ds_zalo:
 *                  type: string
 *                  example: "jason"
 *                ds_skype:
 *                  type: string
 *                  example: "áassas"
 *                ds_viber:
 *                  type: string
 *                  example: "áassas"
 *                ds_email:
 *                  type: string
 *                  example: "áassas"
 *                ds_hotline:
 *                  type: string
 *                  example: "áassas"
 *                ds_telegram:
 *                  type: string
 *                  example: "áassas"
 *                ds_time:
 *                  type: string
 *                  example: "áassas"
 *                dealer_id:
 *                  type: string
 *                  example: "aab1221,212128sjsjs"
 *                  required: true
 *              required:
 *                - dealer_id
 *     responses:
 *       200:
 *         description: success new dealer service
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/DealerService'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       404:
 *        $ref: '#/components/responses/NotFoundError'
 */
router.put(
  "/dealerService/:id",
  authorize(permissionFunction.DEALERSERVICE, permissionFieldName.EDIT),
  update
);

/**
 * @swagger
 * /api/dealerService/remove/{id}:
 *   parameters:
 *    - in: path
 *      name: id
 *      description: dealer service id
 *      required: true
 *      example: "21121ssscc"
 *      schema:
 *        type: string
 *   delete:
 *     summary:
 *     tags: [DealerService]
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
 *                 $ref: '#/components/schemas/DealerService'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       404:
 *         $ref: '#/components/responses/NotFoundError'
 */
router.delete(
  "/dealerService/remove/:id",
  authorize(permissionFunction.DEALERSERVICE, permissionFieldName.DELETE),
  remove
);
router.get("/dealerService/getByDealerId/:id", getByDealerId);
module.exports = router;
