const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");

// ユーザー一覧を取得する
router.get("/get/users", customerController.getUsers);

// 新しいユーザーを追加する
router.post("/insert/user", customerController.insertUser);

module.exports = router;
