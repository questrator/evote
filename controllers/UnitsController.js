const UnitsModel = require("../models/UnitsModel");

class UnitsController {

    static async getUnits(request, response) {
        const units = await UnitsModel.getUnits();
        if (response) {
            response.render("units.ejs", {units});
        }
    }

    static async createUnit(request, response) {
        const result = await UnitsModel.addUnit(request.body);
        if (!result.errno) {
            response.status(200).render("unit-add.ejs", {message: "помещение добавлено", type: "info"});
        }
        else {
            response.render("unit-add.ejs", {message: `${result.sqlMessage}<br />${result.sql}`, type: "error"});
        }
    }

    static async formUnit(request, response) {
        response.render("unit-add.ejs", {message: null});
    }

    static async getUnit(request, response) {
        const units = await UnitsModel.getUnit(request.params.unit_id);
        if (units) {
            response.render("unit-edit.ejs", {unit: units[0]});
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

    static async deleteUnit(request, response) {
            const result = await UnitsModel.deleteUnit(request.params.unit_id);
            if (result) {
                response.redirect("/units");
            }
            else response.send(`delete fail ${result}`);
    }

}

module.exports = UnitsController;