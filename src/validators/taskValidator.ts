import { errorMessageEng } from '@constants/index';
import { body, param } from 'express-validator';
import TaskSchema from '@models/task.model';
import ProjectSchema from '@models/project.model';
import { decodeJWT } from '@helpers/jwtHelper';

export const taskInsertValidationRules = () => {
    return [
        body('name').notEmpty().withMessage({
            message: errorMessageEng.NOT_EMPTY
        }),
        body('name').isString().withMessage({
            message: errorMessageEng.IS_STRING
        }),
        body('description').notEmpty().withMessage({
            message: errorMessageEng.NOT_EMPTY
        }),
        body('description').isString().withMessage({
            message: errorMessageEng.IS_STRING
        }),
        body('due_date').notEmpty().withMessage({
            message: errorMessageEng.NOT_EMPTY
        }),
        body('due_date').isDate().withMessage({
            message: errorMessageEng.IS_DATE
        }),
        body('project_id').notEmpty().withMessage({
            message: errorMessageEng.NOT_EMPTY
        }),
        body('project_id').custom( async (value) => {
            const project = await ProjectSchema.findOne({ _id: value })
            if(!project){
                throw new Error('Project does not exist');
            }
         }).withMessage({
            message: errorMessageEng.IS_EXIST
        }),
        body('project_id').custom( async (value, {req}) => {
            const project = await ProjectSchema.findOne({ _id: value });
            const decoded = await decodeJWT(req);
            if(project.user_id != decoded._id){
                throw new Error('Id is not allowed to edit');
            }
         }).withMessage({
            message: errorMessageEng.NOT_ALLOWED
        }),
    ]
}


export const taskDeleteValidationRules = () => {
    return [
        param('id').notEmpty().withMessage({
            message: errorMessageEng.NOT_EMPTY
        }),
        param('id').custom( async (value) => {
            const task = await TaskSchema.findOne({ _id: value })
            if(!task){
                throw new Error('Id does not exist');
            }
         }).withMessage({
            message: errorMessageEng.IS_EXIST
        }),
        param('id').custom( async (value, {req}) => {
            const task = await TaskSchema.findOne({ _id: value });
            const decoded = await decodeJWT(req);
            if(task.user_id != decoded._id){
                throw new Error('Id is not allowed to edit');
            }
         }).withMessage({
            message: errorMessageEng.NOT_ALLOWED
        }),
    ]
}

export const taskGetByIdValidationRules = () => {
    return [
        param('id').notEmpty().withMessage({
            message: errorMessageEng.NOT_EMPTY
        }),
        param('id').custom( async (value) => {
            const task = await TaskSchema.findOne({ _id: value })
            if(!task){
                throw new Error('Task does not exist');
            }
         }).withMessage({
            message: errorMessageEng.IS_EXIST
        }),
        param('id').custom( async (value, {req}) => {
            const task = await TaskSchema.findOne({ _id: value });
            const decoded = await decodeJWT(req);
            if(task.user_id != decoded._id){
                throw new Error('Id is not allowed to edit');
            }
         }).withMessage({
            message: errorMessageEng.NOT_ALLOWED
        }),
    ]
}

export const taskUpdateValidationRules = () => {
    return [
        param('id').notEmpty().withMessage({
            message: errorMessageEng.NOT_EMPTY
        }),
        param('id').custom( async (value) => {
            const task = await TaskSchema.findOne({ _id: value })
            if(!task){
                throw new Error('Task does not exist');
            }
         }).withMessage({
            message: errorMessageEng.IS_EXIST
        }),
        param('id').custom( async (value, {req}) => {
            const task = await TaskSchema.findOne({ _id: value });
            const decoded = await decodeJWT(req);
            if(task.user_id != decoded._id){
                throw new Error('Id is not allowed to edit');
            }
         }).withMessage({
            message: errorMessageEng.NOT_ALLOWED
        }),
        body('name').notEmpty().withMessage({
            message: errorMessageEng.NOT_EMPTY
        }),
        body('name').isString().withMessage({
            message: errorMessageEng.IS_STRING
        }),
        body('description').notEmpty().withMessage({
            message: errorMessageEng.NOT_EMPTY
        }),
        body('description').isString().withMessage({
            message: errorMessageEng.IS_STRING
        }),
        body('due_date').notEmpty().withMessage({
            message: errorMessageEng.NOT_EMPTY
        }),
        body('due_date').isDate().withMessage({
            message: errorMessageEng.IS_DATE
        }),
        body('project_id').notEmpty().withMessage({
            message: errorMessageEng.NOT_EMPTY
        }),
        body('project_id').custom( async (value) => {
            const project = await ProjectSchema.findOne({ _id: value })
            if(!project){
                throw new Error('Project does not exist');
            }
         }).withMessage({
            message: errorMessageEng.IS_EXIST
        }),
        body('project_id').custom( async (value, {req}) => {
            const project = await ProjectSchema.findOne({ _id: value });
            const decoded = await decodeJWT(req);
            if(project.user_id != decoded._id){
                throw new Error('Id is not allowed to edit');
            }
         }).withMessage({
            message: errorMessageEng.NOT_ALLOWED
        }),
    ]
}