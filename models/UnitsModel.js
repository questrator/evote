const db = require("../config/db");

class UnitModel {

    static async getUnits() {
        return new Promise(resolve => {
            db.query("SELECT * FROM units", [], (error, result) => {
                if (error) console.log(error);
                else resolve(result);
            });
        });
    }

    static async addUnit(unit) {
        const {number, type_id, area, building, entrance, floor} = unit;
        return new Promise(resolve => {
            db.query("INSERT INTO units (number, type_id, area, building, entrance, floor) VALUES (?, ?, ?, ?, ?, ?)",
            [number, type_id, area, building, entrance, floor],
            (error, result) => {
                if (error) {
                    console.log(error);
                    resolve(error);
                    return error;
                }
                else resolve("unit added successfully");
            });
        });
    }

    static async deleteUnit(unit_id) {
        return new Promise(resolve => {
            db.query("DELETE FROM units WHERE unit_id = ?", [unit_id],
            (error, result) => {
                if (error) resolve(false);
                else resolve("unit deleted");
            }
            );
        });
    }

    static async updateUnit(unit) {
        const {unit_id, number, type_id, area, building, entrance, floor} = unit;
        return new Promise(resolve => {
            db.query("UPDATE units SET number = ?, type_id = ?, area = ?, building = ?, entrance = ?, floor = ? WHERE unit_id = ?", [number, type_id, area, building, entrance, floor, unit_id], 
            (error, result) => {
                if (error) resolve(false);
                else resolve(result);
            }
            );
        });
    }
}

module.exports = UnitModel;