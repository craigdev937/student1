import express from "express";
import { CreateStudent, DeleteStudent, GetAllStudents, 
    GetOneStudent, UpdateStudent } from "../controllers/studentCon";

export const studentRt: express.Router = express.Router();
    studentRt.post("/", CreateStudent);
    studentRt.get("/", GetAllStudents);
    studentRt.get("/:id", GetOneStudent);
    studentRt.put("/:id", UpdateStudent);
    studentRt.delete("/:id", DeleteStudent);





    