"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersTable = void 0;
const ltdl_1 = require("@lambda-team/ltdl");
class UsersTable extends ltdl_1.AbstractTable {
    constructor() {
        super(...arguments);
        this.name = this.varchar("name", 256);
        this.city = this.varchar("city", 256);
        this.country = this.varchar("country", 256);
    }
    tableName() {
        return "userss";
    }
}
exports.UsersTable = UsersTable;
