const UnitsModel = require("../models/UnitsModel");

class UnitsController {

    static async getUnits(request, response) {
        const result = await UnitsModel.getUnits();
        if (response) {
            // response.send(result);
            console.log(result);
            response.render("units.ejs", {result});
        }
    }

    static async addUnit(request, response) {
        const result = await UnitsModel.addUnit(request.body);
        if (response) {
            response.status(200).send(result);
        }
        else response.send(result, "add fail");
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