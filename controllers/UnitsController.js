const UnitsModel = require("../models/UnitsModel");

class UnitsController {

    static async getUnits(request, response) {
        const result = await UnitsModel.getUnits();
        if (response) {
            response.send(result);
        }
    }

    static async addUnit(request, response) {
        console.log("BODY -> ", request.body);
        const result = await UnitsModel.addUnit(request.body.data.number);
        if (response) {
            response.status(200).send(result);
        }
        else response.send(result, "add fail");
    }

}

module.exports = UnitsController;