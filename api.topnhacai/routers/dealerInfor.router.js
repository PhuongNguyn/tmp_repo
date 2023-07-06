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
} = require("../controllers/dealerInfor.controller");
const permissionFieldName = require("../helpers/permissionFieldName");
const permissionFunction = require("../helpers/permissionFunction");
/**
 * @swagger
 *  components:
 *   schemas:
 *     DealerInfor:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example : "5eb12e197e06a76ccdefc121"
 *           description: The Auto-generated id of a dealerInfor
 *         di_name:
 *           type: string
 *           description: tên nhà cái
 *         di_slug:
 *           type: string
 *           description: slug
 *         di_score1:
 *           type: string
 *           description: score1
 *         di_score2:
 *           type: string
 *           description: score2
 *         di_score3:
 *           type: string
 *           description: score3
 *         di_score4:
 *           type: string
 *           description: score4
 *         di_score5:
 *           type: string
 *           description: score5
 *         di_reason:
 *           type: string
 *           description: reason
 *         di_advantages:
 *           type: array
 *           description: array advantages
 *         di_weakness:
 *           type: array
 *           description: array weakness
 *         di_eveluate:
 *           type: string
 *           description: eveluate
 *         di_website:
 *           type: string
 *           description: website
 *         di_host:
 *           type: string
 *           description: host
 *         di_headquarters:
 *           type: string
 *           description: headquarters
 *         di_license:
 *           type: string
 *           description: license
 *         di_founded_year:
 *           type: string
 *           description: founded_year
 *         di_partner:
 *           type: array
 *           description: array partner
 *         di_languages:
 *           type: array
 *           description: array languages
 *         di_mobile_applications:
 *           type: string
 *           description: mobile applications
 *         di_web_applications:
 *           type: string
 *           description: web applications
 *         di_live_soccer:
 *           type: string
 *           description: live soccer
 *         di_game_system:
 *           type: array
 *           description: array game system
 *         di_odds:
 *           type: string
 *           description: odds
 *         di_bets:
 *           type: string
 *           description: bets
 *         di_currency:
 *           type: array
 *           description: array currency
 *         di_lowest_bet:
 *           type: string
 *           description: lowest bet
 *         di_highest_bet:
 *           type: string
 *           description: highest bet
 *         dealer_id:
 *           type: string
 *           description: array dealer id
 *         createdAt:
 *           type: date
 *           description: thời gian tạo
 *         updatedAt:
 *           type: date
 *           description: thời gian update
 *       example:
 *           {
 *              "_id": "62c2d69aaefd4d2090387a32",
 *               di_name: "Nhà cái w88",
 *               di_slug: "nha_cai_w88",
 *               di_score1: "9.4",
 *               di_score2: "9.6",
 *               di_score3: "9.6",
 *               di_score4: "9.5",
 *               di_score5: "9.5",
 *               di_reason: "W88 hiện đang là trang cá cược uy tín hàng đầu châu Á hiện nay. Luôn n…",
 *               di_advantages: '["Thương hiệu hoạt động lâu năm", "Trải nghiệm website tuyệt vời", "Đa…"]',
 *               di_weakness: '["Chưa có hoàn trả áp dụng cho trò chơi Poker","Người chơi có thể nhậ…"]',
 *               di_eveluate: "Marquee Holdings Ltd.",
 *               di_host: "Marquee Holdings Ltd.",
 *               di_headquarters: "Philipines",
 *               di_license: "PAGCOR, FCLRC, CEZA",
 *               di_founded_year: "2010",
 *               di_partner: '["Đại sứ thương hiệu: Emile Heskey","Đối tác CLB Leicester City","Tà…"]',
 *               di_languages: '["VN","EN","TL","KR","FR"]',
 *               di_mobile_applications: '["iOS", "iPadOS", "Android"]',
 *               di_web_applications: "không",
 *               di_live_soccer: "không",
 *               di_odds: "US (Mỹ), CN (China), DEC (Decimal), MY (Myanmar), IND (Indonesia)",
 *               di_bets: "Châu Á (Handicap), Châu Âu (1x2), Tài xỉu (Over/Under), Xiên (BTTS), …",
 *               di_currency: "RMB, INR, IDR, KRW, MYR, THB, USD, VNĐ",
 *               di_lowest_bet: "100.000",
 *               di_highest_bet: "200.000.000",
 *               dealer_id : 62c01f3808cb637173b2c5be
 *           }
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
 *    name: DealerInfor
 *    description: DealerInfor
 */

/**
 * @swagger
 * /api/dealerInfor:
 *   get:
 *     summary: Returns all dealerInfor
 *     tags: [DealerInfor]
 *     responses:
 *      200:
 *         description: the list of the dealerInfor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/DealerInfor'
 *
 *      404:
 *        $ref: '#/components/responses/NotFoundError'
 *
 */

router.get("/dealerInfor/", list);

/**
 * @swagger
 * /api/dealerInfor/{id}:
 *   parameters:
 *    - in: path
 *      name: id
 *      description: query
 *      required: true
 *      example: "5eb12e197e06a76ccdefc121"
 *      schema:
 *        type: string
 *   get:
 *     summary: Returns a dealerInfor
 *     tags: [DealerInfor]
 *     responses:
 *      200:
 *         description: get by id a dealerInfor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/DealerInfor'
 *
 *      404:
 *        $ref: '#/components/responses/NotFoundError'
 *
 */

router.get("/dealerInfor/:id", read);

/**
 * @swagger
 * /api/dealerInfor:
 *   post:
 *     summary: Returns a edit dealer
 *     tags: [DealerInfor]
 *     security:
 *        - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *          multipart/form-data:
 *            schema:
 *              type: object
 *              properties:
 *                di_name:
 *                  description: name
 *                  required: true
 *                  type: string
 *                di_slug:
 *                  description: slug , không điền tự động phát sinh
 *                  type: string
 *                di_score1:
 *                  description: score1
 *                  required: true
 *                  type: string
 *                di_score2:
 *                  description: score2
 *                  type: string
 *                di_score3:
 *                  description: score3
 *                  type: string
 *                di_score4:
 *                  description: score4
 *                  type: string
 *                di_score5:
 *                  description: score5
 *                  type: string
 *                di_reason:
 *                  description: reason
 *                  type: string
 *                di_advantages:
 *                  description: aaaaan,shshghg
 *                  type: string
 *                di_weakness:
 *                  description: aaaaan,shshghg
 *                  type: string
 *                di_eveluate:
 *                  description: eveluate
 *                  type: string
 *                di_website:
 *                  description: website
 *                  type: string
 *                di_host:
 *                  description: host
 *                  type: string
 *                di_headquarters:
 *                  description: headquarters
 *                  type: string
 *                di_license:
 *                  description: license
 *                  type: string
 *                di_founded_year:
 *                  description: founded year
 *                  type: string
 *                di_partner:
 *                  description: abbbss121,313313hh
 *                  required: true
 *                  type: string
 *                di_languages:
 *                  description: abbbss121,313313hh
 *                  required: true
 *                  type: string
 *                di_mobile_applications:
 *                  description: mobile applications
 *                  type: string
 *                di_web_applications:
 *                  description: web applications
 *                  type: string
 *                di_live_soccer:
 *                  description: live soccer
 *                  type: string
 *                di_game_system:
 *                  description: assasa,ssajaj12
 *                  type: string
 *                di_odds:
 *                  description: odds
 *                  type: string
 *                di_bets:
 *                  description: bets
 *                  type: string
 *                di_currency:
 *                  description: sáasassa,sâjjj212
 *                  type: string
 *                di_lowest_bet:
 *                  description: owest bet
 *                  type: string
 *                di_highest_bet:
 *                  description: highest bet
 *                  type: string
 *                dealer_id:
 *                  description: jjjjs2121,sáhshassa12
 *                  type: string
 *     responses:
 *       200:
 *         description: success new dealerInfor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/DealerInfor'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       404:
 *        $ref: '#/components/responses/NotFoundError'
 */

router.post(
  "/dealerInfor/",
  authorize(permissionFunction.DEALER, permissionFieldName.ADD),
  create
);

/**
 * @swagger
 * /api/dealerInfor/{id}:
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
 *     tags: [DealerInfor]
 *     security:
 *        - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *          multipart/form-data:
 *            schema:
 *              type: object
 *              properties:
 *                di_name:
 *                  description: name
 *                  required: true
 *                  type: string
 *                di_slug:
 *                  description: slug , không điền tự động phát sinh
 *                  type: string
 *                di_score1:
 *                  description: score1
 *                  required: true
 *                  type: string
 *                di_score2:
 *                  description: score2
 *                  type: string
 *                di_score3:
 *                  description: score3
 *                  type: string
 *                di_score4:
 *                  description: score4
 *                  type: string
 *                di_score5:
 *                  description: score5
 *                  type: string
 *                di_reason:
 *                  description: reason
 *                  type: string
 *                di_advantages:
 *                  description: aaaaan,shshghg
 *                  type: string
 *                di_weakness:
 *                  description: aaaaan,shshghg
 *                  type: string
 *                di_eveluate:
 *                  description: eveluate
 *                  type: string
 *                di_website:
 *                  description: website
 *                  type: string
 *                di_host:
 *                  description: host
 *                  type: string
 *                di_headquarters:
 *                  description: headquarters
 *                  type: string
 *                di_license:
 *                  description: license
 *                  type: string
 *                di_founded_year:
 *                  description: founded year
 *                  type: string
 *                di_partner:
 *                  description: abbbss121,313313hh
 *                  required: true
 *                  type: string
 *                di_languages:
 *                  description: abbbss121,313313hh
 *                  required: true
 *                  type: string
 *                di_mobile_applications:
 *                  description: mobile applications
 *                  type: string
 *                di_web_applications:
 *                  description: web applications
 *                  type: string
 *                di_live_soccer:
 *                  description: live soccer
 *                  type: string
 *                di_game_system:
 *                  description: assasa,ssajaj12
 *                  type: string
 *                di_odds:
 *                  description: odds
 *                  type: string
 *                di_bets:
 *                  description: bets
 *                  type: string
 *                di_currency:
 *                  description: sáasassa,sâjjj212
 *                  type: string
 *                di_lowest_bet:
 *                  description: owest bet
 *                  type: string
 *                di_highest_bet:
 *                  description: highest bet
 *                  type: string
 *                dealer_id:
 *                  description: jjjjs2121,sáhshassa12
 *                  type: string
 *     responses:
 *       200:
 *         description: success new dealerInfor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/DealerInfor'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       404:
 *        $ref: '#/components/responses/NotFoundError'
 */
router.put(
  "/dealerInfor/:id",
  authorize(permissionFunction.DEALER, permissionFieldName.EDIT),
  update
);

/**
 * @swagger
 * /api/dealerInfor/dealer/search?q={name}:
 *   parameters:
 *    - in: query
 *      name: q
 *      description: query
 *      required: true
 *      example: "798bet"
 *      schema:
 *        type: string
 *   get:
 *     summary: Returns a dealerInfor
 *     tags: [DealerInfor]
 *     responses:
 *       200:
 *         description: get by id of the dealerInfor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/dealerInfor'
 *       404:
 *        $ref: '#/components/responses/NotFoundError'
 */

router.get("/dealerInfor/dealer/search", listSearch);

/**
 * @swagger
 * /api/dealerInfor/remove/{id}:
 *   parameters:
 *    - in: path
 *      name: id
 *      description: dealerInfor id
 *      required: true
 *      example: "5eb12e197e06a76ccdefc121"
 *      schema:
 *        type: string
 *   delete:
 *     summary:
 *     tags: [DealerInfor]
 *     security:
 *        - bearerAuth: [Admin,Editor]
 *     responses:
 *       200:
 *         description: successfuly
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/DealerInfor'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       404:
 *         $ref: '#/components/responses/NotFoundError'
 */
router.delete(
  "/dealerInfor/remove/:id",
  authorize(permissionFunction.DEALER, permissionFieldName.DELETE),
  remove
);

router.get("/dealerInfor/getByDealerId/:id", getByDealerId);
module.exports = router;
