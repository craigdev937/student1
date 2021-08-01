import express from "express";
import { CreateStudent, 
    GetAllStudents } from "../controllers/studentCon";

export const studentRt: express.Router = express.Router();
    studentRt.post("/", CreateStudent);
    studentRt.get("/", GetAllStudents);





    