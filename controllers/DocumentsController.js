const DocumentsModel = require("../models/DocumentsModel");
const nav = require("../config/nav");
const section = "documents";

class DocumentsController {

    static async getDocuments(request, response) {
        const data = await DocumentsModel.getDocuments();
        if (response) {
            response.render("documents.ejs", { data, nav, section });
        }
    }

    static async createDocument(request, response) {
        const result = await DocumentsModel.addDocument(request.body);
        if (!result.errno) {
            response.status(200).render("owner-add.ejs", { message: "помещение добавлено", type: "info" });
        }
        else {
            response.render("owner-add.ejs", { message: `${result.sqlMessage}<br />${result.sql}`, type: "error" });
        }
    }

    static async formDocument(request, response) {
        response.render("owner-add.ejs", { message: null });
    }

    static async getDocument(request, response) {
        const owners = await DocumentsModel.getDocument(request.params.owner_id);
        if (owners) {
            response.render("owner-edit.ejs", { owner: owners[0] });
        }
        else response.send("edit fail");
    }

    static async updateDocument(request, response) {
        const result = await DocumentsModel.updateDocument(request.body);
        console.log("UC, updateDocument, result ->", request.body);
        if (result) {
            console.log(result);
            response.redirect("/owners");
        }
        else response.send(`update fail ${result}`);
    }

    static async disableDocument(request, response) {
        const result = await DocumentsModel.disableDocument(request.params.owner_id);
        if (result) {
            response.redirect("/owners");
        }
        else response.send(`disable fail ${result}`);
    }

    static async getTrashDocuments(request, response) {
        const data = await DocumentsModel.getTrashDocuments();
        if (data) {
            response.render("owners-trash.ejs", { data, nav, section });
        }
        else response.send("error");
    }

    static async restoreDocument(request, response) {
        const result = await DocumentsModel.restoreDocument(request.params.owner_id);
        if (result) {
            response.redirect("/owners/trash/");
        }
        else response.send("restore fail");
    }
}

module.exports = DocumentsController;