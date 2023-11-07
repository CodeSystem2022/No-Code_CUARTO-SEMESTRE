import { pool } from "../db";
import bcrypt from "bcrypt";
import { createAccessToken } from "../libs/jwt,js";

export const singin = (req,res) => res.send("ingresando");

export const singup = (req,res) => {
    const {name, email, password} = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await pool.query("INSERT INTO usuarios (name, email, password) VALUES ($1, $2, $3) RETURNING *", [name, email, hashedPassword])
    
        const token = await createAccessToken({id: result.rows[0].id});
        console.log(result);
        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "none",
            maxAge: 60 * 60 * 24 * 1000,})
        return res.json(result.rows[0]);
    } catch (error) {
        if(error.code === "23505"){
            return res.status(400).json({message: "El correo ya esta registrado"});
        }
    }
};
export const singout = (req,res) => res.send("cerrando sesion");

export const profile = (req,res) => res.send("perfil de usuario");