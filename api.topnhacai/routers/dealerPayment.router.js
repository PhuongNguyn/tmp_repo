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
} = require("../controllers/dealerPayment.controller");
const permissionFunction = require("../helpers/permissionFunction");
const permissionFieldName = require("../helpers/permissionFieldName");

/**
 * @swagger
 *  components:
 *   schemas:
 *     DealerPayment:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example : "5eb12e197e06a76ccdefc121"
 *           description: The Auto-generated id of a dealer payment
 *         dp_deposit_min:
 *           type: string
 *           description: deposit min
 *         dp_deposit_max:
 *           type: string
 *           description: deposit max
 *         dp_deposit_max_day:
 *           type: string
 *           description: deposit max day
 *         dp_deposit_processing_time:
 *           type: string
 *           description: deposit processing time
 *         dp_deposit_payments:
 *           type: string
 *           description: deposit payments
 *         dp_deposit_banks:
 *           type: string
 *           description: deposit banks
 *         dp_withdrawal_min:
 *           type: string
 *           description: withdrawal min
 *         dp_withdrawal_max:
 *           type: string
 *           description: withdrawal max
 *         dp_withdrawal_max_day:
 *           type: string
 *           description: withdrawal max day
 *         dp_withdrawal_prc_time:
 *           type: string
 *           description: withdrawal prc time
 *         dp_withdrawal_payments:
 *           type: string
 *           description: withdrawal payments
 *         dp_withdrawal_banks:
 *           type: string
 *           description: withdrawal banks
 *         dealer_id:
 *           type: string
 *           description: dealer id
 *         createdAt:
 *           type: date
 *           description: thời gian tạo
 *         updatedAt:
 *           type: date
 *           description: thời gian update
 *       example:
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
 *    name: DealerPayment
 *    description: Dealer Payment
 */

/**
 * @swagger
 * /api/dealerPayment:
 *   get:
 *     summary: Returns all dealer payment
 *     tags: [DealerPayment]
 *     responses:
 *      200:
 *         description: the list of the dealer payment
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/DealerPayment'
 *
 *      404:
 *        $ref: '#/components/responses/NotFoundError'
 *
 */
router.get("/dealerPayment/", list);

/**
 * @swagger
 * /api/dealerPayment/{id}:
 *   parameters:
 *    - in: path
 *      name: id
 *      description: dealer payment id
 *      required: true
 *      example: "5eb12e197e06a76ccdefc121"
 *      schema:
 *        type: string
 *   get:
 *     summary: Returns a dealer payment
 *     tags: [DealerPayment]
 *     responses:
 *       200:
 *         description: get by id of the dealer payment
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/DealerPayment'
 *       404:
 *        $ref: '#/components/responses/NotFoundError'
 */
router.get("/dealerPayment/:id", read);

/**
 * @swagger
 * /api/dealerPayment/dealer/search?q={name}:
 *   parameters:
 *    - in: query
 *      name: name
 *      description: query
 *      required: true
 *      example: "798bet"
 *      schema:
 *        type: string
 *   get:
 *     summary: Returns a Dealer Payment
 *     tags: [DealerPayment]
 *     responses:
 *       200:
 *         description: get by id of the Dealer Payment
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/DealerPayment'
 *       404:
 *        $ref: '#/components/responses/NotFoundError'
 */
router.get("/dealerPayment/dealer/search", listSearch);

/**
 * @swagger
 * /api/dealerPayment:
 *   post:
 *     summary: Returns a new dealer payment
 *     tags: [DealerPayment]
 *     security:
 *        - bearerAuth: []
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                dp_deposit_min:
 *                  type: string
 *                  example: "jason"
 *                dp_deposit_max:
 *                  type: string
 *                  example: "áassas"
 *                dp_deposit_max_day:
 *                  type: string
 *                  example: "áassas"
 *                dp_deposit_processing_time:
 *                  type: string
 *                  example: "áassas"
 *                dp_deposit_payments:
 *                  type: string
 *                  example: "áassas"
 *                dp_deposit_banks:
 *                  type: string
 *                  example: "áassas"
 *                dp_withdrawal_min:
 *                  type: string
 *                  example: "áassas"
 *                dp_withdrawal_max:
 *                  type: string
 *                  example: "áassas"
 *                dp_withdrawal_max_day:
 *                  type: string
 *                  example: "áassas"
 *                dp_withdrawal_prc_time:
 *                  type: string
 *                  example: "áassas"
 *                dp_withdrawal_payments:
 *                  type: string
 *                  example: "áassas"
 *                dp_withdrawal_banks:
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
 *         description: success new dealer
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/DealerPayment'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       404:
 *        $ref: '#/components/responses/NotFoundError'
 */

router.post(
  "/dealerPayment/",
  authorize(permissionFunction.DEALERPAYMENT, permissionFieldName.ADD),
  create
);

/**
 * @swagger
 * /api/dealerPayment:
 *   parameters:
 *    - in: path
 *      name: id
 *      description: dealerInfor id
 *      required: true
 *      example: "5eb12e197e06a76ccdefc121"
 *      schema:
 *        type: string
 *   put:
 *     summary: Returns a new dealer payment
 *     tags: [DealerPayment]
 *     security:
 *        - bearerAuth: []
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                dp_deposit_min:
 *                  type: string
 *                  example: "jason"
 *                dp_deposit_max:
 *                  type: string
 *                  example: "áassas"
 *                dp_deposit_max_day:
 *                  type: string
 *                  example: "áassas"
 *                dp_deposit_processing_time:
 *                  type: string
 *                  example: "áassas"
 *                dp_deposit_payments:
 *                  type: string
 *                  example: "áassas"
 *                dp_deposit_banks:
 *                  type: string
 *                  example: "áassas"
 *                dp_withdrawal_min:
 *                  type: string
 *                  example: "áassas"
 *                dp_withdrawal_max:
 *                  type: string
 *                  example: "áassas"
 *                dp_withdrawal_max_day:
 *                  type: string
 *                  example: "áassas"
 *                dp_withdrawal_prc_time:
 *                  type: string
 *                  example: "áassas"
 *                dp_withdrawal_payments:
 *                  type: string
 *                  example: "áassas"
 *                dp_withdrawal_banks:
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
 *         description: success new dealer
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/DealerPayment'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       404:
 *        $ref: '#/components/responses/NotFoundError'
 */

router.put(
  "/dealerPayment/:id",
  authorize(permissionFunction.DEALERPAYMENT, permissionFieldName.EDIT),
  update
);

/**
 * @swagger
 * /api/dealerPayment/remove/{id}:
 *   parameters:
 *    - in: path
 *      name: id
 *      description: dealer id
 *      required: true
 *      example: "5eb12e197e06a76ccdefc121"
 *      schema:
 *        type: string
 *   delete:
 *     summary:
 *     tags: [DealerPayment]
 *     security:
 *        - bearerAuth: [Admin]
 *     responses:
 *       200:
 *         description: successfuly
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/DealerPayment'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       404:
 *         $ref: '#/components/responses/NotFoundError'
 */
router.delete(
  "/dealerPayment/remove/:id",
  authorize(permissionFunction.DEALERPAYMENT, permissionFieldName.DELETE),
  remove
);
router.get("/dealerPayment/getByDealerId/:id", getByDealerId);
module.exports = router;
