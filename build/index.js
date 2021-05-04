"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ltdl_1 = require("@lambda-team/ltdl");
// import { Db, DbConnector } from "@lambda-team/ltdl";
// import { Db } from "@lambda-team/ltdl/dist/db/db";
// import { DbConnector } from "@lambda-team/ltdl/dist/db/dbConnector";
const UsersTable_1 = require("./UsersTable");
const main = async function () {
    const usersTable = new UsersTable_1.UsersTable();
    const db = new ltdl_1.DbConnector()
        .host("localhost")
        .user("postgres")
        .port(5432)
        .db("test2")
        .connect();
    db.use(usersTable);
    const rows = await usersTable.select();
    console.log(rows);
};
main();
