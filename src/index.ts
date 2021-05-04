import { Db, DbConnector } from "@lambda-team/ltdl";
// import { Db, DbConnector } from "@lambda-team/ltdl";
// import { Db } from "@lambda-team/ltdl/dist/db/db";
// import { DbConnector } from "@lambda-team/ltdl/dist/db/dbConnector";
import { UsersTable } from "./UsersTable";

const main = async function () {
  const usersTable = new UsersTable();

  const db: Db = new DbConnector()
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
