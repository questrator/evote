const db = require("../config/db");

class DocumentModel {

    static async getDocuments() {
        return new Promise(resolve => {
            db.query("SELECT documents.document_id, documents.title, documents.date, owners.lastname, owners.name, owners.midname, units.number, documents.fraction, unit_types.description AS type FROM documents LEFT JOIN owners ON documents.owner_id = owners.owner_id LEFT JOIN units ON documents.unit_id = units.unit_id LEFT JOIN unit_types ON units.type_id = unit_types.unit_type_id WHERE documents.active = 1",
            [], (error, result) => {
                if (error) console.log(error);
                else {
                    resolve(result);
                }
            });
        });
    }

    static async addDocument(document) {
        const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
        const {title, date, owner_id, unit_id, fraction_numerator, fraction_denumerator} = document;

        return new Promise((resolve, reject) => {
            const result = db.query("", [],
            (error, result) => {
                if (error) {
                    console.log(error);
                    resolve(error);
                }
                else {
                    resolve(result);
                };
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