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

    static async deleteUnit(request, response) {
            const result = await UnitsModel.deleteUnit(request.body.unit_id);
            if (result) {
                response.send("delete done");
            }
            else response.send("delete fail");
    }

    static async updateUnit(request, response) {
        const result = await UnitsModel.updateUnit(request.body);
        if (result) {
            response.send(result);
        }
        else response.send("update fail");
    }

}

module.exports = UnitsController;