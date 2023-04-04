const db = require("../config/db");

class OwnerModel {

    static async getOwners() {
        return new Promise(resolve => {
            db.query("SELECT owners.owner_id, owner_types.description, owners.lastname, owners.name, owners.midname, owners.passport, owners.phone FROM owners LEFT JOIN owner_types ON owners.type_id = owner_types.owner_type_id WHERE owners.active = 1",
            [], (error, result) => {
                if (error) console.log(error);
                else {
                    resolve(result);
                }
            });
        });
    }

    static async addOwner(owner) {
        const date = new Date().toISOString().slice(0, 19).replace('T', ' ');
        const {type_id, lastname, name, midname, passport, phone} = owner;

        function getPassword() {
            function rand() {
                return Math.trunc(Math.random() * (10000 - 1000) + 1000);
            }
            return `${rand()}-${rand()}-${rand()}`;
        }

        return new Promise((resolve, reject) => {
            const result = db.query("SHOW TABLE STATUS FROM `evote` LIKE 'owners';", [],
            (error, result) => {
                if (error) {
                    console.log(error);
                    resolve(error);
                }
                else {
                    resolve(result);
                };
            });
        }).then((value) => {
            new Promise((resolve, reject) => {
                db.query("INSERT INTO owners (type_id, lastname, name, midname, password, passport, phone, active, created, updated) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",
                [type_id, lastname, name, midname, `${value[0].Auto_increment}--${getPassword()}`, passport, phone, 1, date, date],
                (error, result) => {
                    if (error) {
                        console.log(error);
                        reject(error);
                    }
                    else {
                        console.log(result);
                        resolve("owner added successfully")
                    };
                });
            });
        });
        
    }

    static async getOwner(owner_id) {
        return new Promise(resolve => {
            db.query("SELECT * FROM owners WHERE owners.owner_id = ?", [owner_id],
            (error, result) => {
                if (error) {
                    console.log(error);
                    resolve(error);
                }
                else {
                    resolve(result);
                }
            });
        });
    }

    static async updateOwner(owner) {
        const {owner_id, number, type_id, area, building, entrance, floor} = owner;
        const updated = new Date().toISOString().slice(0, 19).replace('T', ' ');
        return new Promise(resolve => {
            db.query("UPDATE owners SET number = ?, type_id = ?, area = ?, building = ?, entrance = ?, floor = ?, updated = ? WHERE owners.owner_id = ?", 
            [number, type_id, area, building, entrance, floor, updated, owner_id],
            (error, result) => {
                if (error) {
                    console.log(error);
                    resolve(error);
                }
                else {
                    console.log("res->", result);
                    resolve(result);
                }
            });
        });
    }

    static async disableOwner(owner_id) {
        return new Promise(resolve => {
            db.query("UPDATE owners SET active = 0 WHERE owners.owner_id = ?", [owner_id],
            (error, result) => {
                if (error) resolve(false);
                else resolve("owner disabled");
            });
        });
    }

    static async getTrashOwners() {
        return new Promise(resolve => {
            db.query("SELECT owners.owner_id, owners.number, owners.type_id, owner_types.description, owners.area, owners.building, owners.entrance, owners.floor FROM owners LEFT JOIN owner_types ON owners.type_id = owner_types.owner_type_id WHERE owners.active = 0",
            [], (error, result) => {
                if (error) console.log(error);
                else resolve(result);
            });
        });
    }

    static async restoreOwner(owner_id) {
        return new Promise(resolve => {
            db.query("UPDATE owners SET active = 1 WHERE owners.owner_id = ?", [owner_id],
            (error, result) => {
                if (error) resolve(false);
                else resolve("owner restored");
            });
        });
    }
}

module.exports = OwnerModel;