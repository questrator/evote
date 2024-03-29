const UnitsModel = require("../models/UnitsModel");
const nav = require("../config/nav");
const section = "units";

class UnitsController {

    static async getUnits(request, response) {
        const data = await UnitsModel.getUnits();
        if (response) {
            response.render("units.ejs", { data, nav, section });
        }
    }

    static async createUnit(request, response) {
        const result = await UnitsModel.addUnit(request.body);
        if (!result.errno) {
            response.status(200).render("unit-add.ejs", { message: "помещение добавлено", type: "info" });
        }
        else {
            response.render("unit-add.ejs", { message: `${result.sqlMessage}<br />${result.sql}`, type: "error" });
        }
    }

    static async formUnit(request, response) {
        response.render("unit-add.ejs", { message: null });
    }

    static async getUnit(request, response) {
        const units = await UnitsModel.getUnit(request.params.unit_id);
        if (units) {
            response.render("unit-edit.ejs", { unit: units[0] });
        }
        else response.send("edit fail");
    }

    static async updateUnit(request, response) {
        const result = await UnitsModel.updateUnit(request.body);
        console.log("UC, updateUnit, result ->", request.body);
        if (result) {
            console.log(result);
            response.redirect("/units");
        }
        else response.send(`update fail ${result}`);
    }

    static async disableUnit(request, response) {
        const result = await UnitsModel.disableUnit(request.params.unit_id);
        if (result) {
            response.redirect("/units");
        }
        else response.send(`disable fail ${result}`);
    }

    static async getTrashUnits(request, response) {
        const data = await UnitsModel.getTrashUnits();
        if (data) {
            response.render("units-trash.ejs", { data, nav, section });
        }
        else response.send("error");
    }

    static async restoreUnit(request, response) {
        const result = await UnitsModel.restoreUnit(request.params.unit_id);
        if (result) {
            response.redirect("/units/trash/");
        }
        else response.send("restore fail");
    }
}

module.exports = UnitsController;