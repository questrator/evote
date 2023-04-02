const OwnersModel = require("../models/OwnersModel");
const nav = require("../config/nav");
const section = "owners";

class OwnersController {

    static async getOwners(request, response) {
        const data = await OwnersModel.getOwners();
        if (response) {
            response.render("owners.ejs", { data, nav, section });
        }
    }

    static async createOwner(request, response) {
        const result = await OwnersModel.addOwner(request.body);
        if (!result.errno) {
            response.status(200).render("owner-add.ejs", { message: "помещение добавлено", type: "info" });
        }
        else {
            response.render("owner-add.ejs", { message: `${result.sqlMessage}<br />${result.sql}`, type: "error" });
        }
    }

    static async formOwner(request, response) {
        response.render("owner-add.ejs", { message: null });
    }

    static async getOwner(request, response) {
        const owners = await OwnersModel.getOwner(request.params.owner_id);
        if (owners) {
            response.render("owner-edit.ejs", { owner: owners[0] });
        }
        else response.send("edit fail");
    }

    static async updateOwner(request, response) {
        const result = await OwnersModel.updateOwner(request.body);
        console.log("UC, updateOwner, result ->", request.body);
        if (result) {
            console.log(result);
            response.redirect("/owners");
        }
        else response.send(`update fail ${result}`);
    }

    static async disableOwner(request, response) {
        const result = await OwnersModel.disableOwner(request.params.owner_id);
        if (result) {
            response.redirect("/owners");
        }
        else response.send(`disable fail ${result}`);
    }

    static async getTrashOwners(request, response) {
        const data = await OwnersModel.getTrashOwners();
        if (data) {
            response.render("owners-trash.ejs", { data, nav, section });
        }
        else response.send("error");
    }

    static async restoreOwner(request, response) {
        const result = await OwnersModel.restoreOwner(request.params.owner_id);
        if (result) {
            response.redirect("/owners/trash/");
        }
        else response.send("restore fail");
    }
}

module.exports = OwnersController;