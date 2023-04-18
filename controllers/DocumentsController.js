const DocumentsModel = require("../models/DocumentsModel");
const nav = require("../config/nav");
const UnitsModel = require("../models/UnitsModel");
const OwnersModel = require("../models/OwnersModel");
const section = "documents";

class DocumentsController {

    static async getDocuments(request, response) {
        const data = await DocumentsModel.getDocuments();
        if (response) {
            response.render("documents.ejs", { data, nav, section });
        }
    }

    static async createDocument(request, response) {
        const units = await UnitsModel.getUnits();
        const owners = await OwnersModel.getOwners();
        const result = await DocumentsModel.addDocument(request.body);
        console.log(request.body);
        if (!units.errno && !owners.errno && !result.errno) {
            response.status(200).render("document-add.ejs", { units, owners, message: "добавлено createDocument", type: "info" });
        }
        else {
            response.render("document-add.ejs", { units, owners, message: `${result.sqlMessage}<br />${result.sql}`, type: "error" });
        }
    }

    static async formDocument(request, response) {
        const units = await UnitsModel.getUnits();
        const owners = await OwnersModel.getOwners();
        if (!units.errno && !owners.errno) {
            response.status(200).render("document-add.ejs", { units, owners, message: null, type: "info" });
        }
        response.render("document-add.ejs", { units, owners, message: "shit" });
    }

    static async getDocument(request, response) {
        const documents = await DocumentsModel.getDocument(request.params.document_id);
        if (documents) {
            response.render("document-edit.ejs", { document: documents[0] });
        }
        else response.send("edit fail");
    }

    static async updateDocument(request, response) {
        const result = await DocumentsModel.updateDocument(request.body);
        console.log("UC, updateDocument, result ->", request.body);
        if (result) {
            console.log(result);
            response.redirect("/documents");
        }
        else response.send(`update fail ${result}`);
    }

    static async disableDocument(request, response) {
        const result = await DocumentsModel.disableDocument(request.params.document_id);
        if (result) {
            response.redirect("/documents");
        }
        else response.send(`disable fail ${result}`);
    }

    static async getTrashDocuments(request, response) {
        const data = await DocumentsModel.getTrashDocuments();
        if (data) {
            response.render("documents-trash.ejs", { data, nav, section });
        }
        else response.send("error");
    }

    static async restoreDocument(request, response) {
        const result = await DocumentsModel.restoreDocument(request.params.document_id);
        if (result) {
            response.redirect("/documents/trash/");
        }
        else response.send("restore fail");
    }
}

module.exports = DocumentsController;