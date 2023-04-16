const db = require("../config/db");

class DocumentModel {

    static async getDocuments() {
        return new Promise(resolve => {
            db.query("SELECT documents.document_id, documents.title, documents.date, owners.lastname, owners.name, owners.midname, units.number, documents.fraction, unit_types.description AS type FROM documents LEFT JOIN owners ON documents.owner_id = owners.owner_id LEFT JOIN units ON documents.unit_id = units.unit_id LEFT JOIN unit_types ON units.type_id = unit_types.unit_type_id WHERE documents.active = 1",
            [], (error, result) => {
                if (error) console.log(error);
                else {
                    console.log(result)
                    resolve(result);
                }
            });
        });
    }

    static async addDocument(owner) {
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

    static async getDocument(owner_id) {
        return new Promise(resolve => {
            db.query("SELECT * FROM owners WHERE documents.owner_id = ?", [owner_id],
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

    static async updateDocument(owner) {
        const {owner_id, number, type_id, area, building, entrance, floor} = owner;
        const updated = new Date().toISOString().slice(0, 19).replace('T', ' ');
        return new Promise(resolve => {
            db.query("UPDATE owners SET number = ?, type_id = ?, area = ?, building = ?, entrance = ?, floor = ?, updated = ? WHERE documents.owner_id = ?", 
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

    static async disableDocument(owner_id) {
        return new Promise(resolve => {
            db.query("UPDATE owners SET active = 0 WHERE documents.owner_id = ?", [owner_id],
            (error, result) => {
                if (error) resolve(false);
                else resolve("owner disabled");
            });
        });
    }

    static async getTrashDocuments() {
        return new Promise(resolve => {
            db.query("SELECT documents.owner_id, documents.number, documents.type_id, owner_types.description, documents.area, documents.building, documents.entrance, documents.floor FROM owners LEFT JOIN owner_types ON documents.type_id = owner_types.owner_type_id WHERE documents.active = 0",
            [], (error, result) => {
                if (error) console.log(error);
                else resolve(result);
            });
        });
    }

    static async restoreDocument(owner_id) {
        return new Promise(resolve => {
            db.query("UPDATE owners SET active = 1 WHERE documents.owner_id = ?", [owner_id],
            (error, result) => {
                if (error) resolve(false);
                else resolve("owner restored");
            });
        });
    }
}

module.exports = DocumentModel;