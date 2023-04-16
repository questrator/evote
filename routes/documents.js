const express = require("express");
const router = express.Router();
const DocumentsController = require("../controllers/DocumentsController");

router.get("/", DocumentsController.getDocuments);
router.get("/add", DocumentsController.formDocument);
router.post("/add", DocumentsController.createDocument);
router.get("/edit/:owner_id", DocumentsController.getDocument);
router.post("/edit/:owner_id", DocumentsController.updateDocument);
router.get("/disable/:owner_id", DocumentsController.disableDocument);
router.get("/trash", DocumentsController.getTrashDocuments);
router.get("/restore/:owner_id", DocumentsController.restoreDocument);

module.exports = router;