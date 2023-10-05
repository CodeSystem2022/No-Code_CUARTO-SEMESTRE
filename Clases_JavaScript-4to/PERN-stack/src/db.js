import pg from "pg";

export const pool = new pg.Pool({
    port: 5432,
    host: "localhost",
    user: "postgres",
    password: "admin",
    databes: "PERN",
});

pool.on("connect", ()=>{
    console.log("Connected to the db");
});