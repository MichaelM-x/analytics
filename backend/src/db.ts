import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "huncho",
  password: "C11h28no3",
  database: "analytics",
});

export default pool;
