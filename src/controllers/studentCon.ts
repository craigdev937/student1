import { RequestHandler } from "express";
import { Student } from "../models/Student";

export const CreateStudent: RequestHandler =
async (req, res, next) => {
    try {
        const student: Student = new Student();
        student.firstName = req.body.firstName;
        student.lastName = req.body.lastName;
        student.age = req.body.age;
        student.info = req.body.info;
        await student.save();
        return res.status(200).json(student);
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};

export const GetAllStudents: RequestHandler =
async (req, res, next) => {
    try {
        await Student.find()
            .then((student) => res.json(student));
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};

export const GetOneStudent: RequestHandler =
async (req, res, next) => {
    try {
        const student: Student = 
            await Student.findOneOrFail(req.params.id);
        return res.status(201).json(student);
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};

export const UpdateStudent: RequestHandler =
async (req, res, next) => {
    try {
        const student: Student =
            await Student.findOneOrFail(req.params.id);
        student.firstName = req.body.firstName;
        student.lastName = req.body.lastName;
        student.age = req.body.age;
        student.info = req.body.info;
        await student.save();
        return res.status(200).json(student);
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};

export const DeleteStudent: RequestHandler =
async (req, res, next) => {
    try {
        const student: Student =
            await Student.findOneOrFail(req.params.id);
        await student.remove();
        return res.status(200)
        .json("The Student was Deleted!");
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};





