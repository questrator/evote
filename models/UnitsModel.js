const db = require("../config/db");

class UnitModel {


    static async getUnits() {
        return new Promise(resolve => {
            db.query("SELECT * FROM units", [], (err, res) => {
                if (err) console.log(err);
                else resolve(res);
            });
        });
    }

    static async addUnit(data) {
        const number = data;
        return new Promise(resolve => {
            db.query("INSERT INTO units (number) VALUES (?)",
            [number],
            (err, res) => {
                if (err) {
                    console.log(err);
                    resolve(false);
                }
                else resolve(res);
            });
        });
    }
}

module.exports = UnitModel;