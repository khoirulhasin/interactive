import { errorMessageEng } from '@constants/index';
import { decodeJWT } from '@helpers/jwtHelper';
import UserSchema from '@models/user.model';
import { body, param } from 'express-validator';

export const userInsertValidationRules = () => {
    return [
        body('name').notEmpty().withMessage({
            message: errorMessageEng.NOT_EMPTY
        }),
        body('name').isString().withMessage({
            message: errorMessageEng.IS_STRING
        }),
        body('email').notEmpty().withMessage({
            message: errorMessageEng.NOT_EMPTY
        }),
        body('email').isEmail().withMessage({
            message: errorMessageEng.IS_EMAIL
        }),
        body('email').custom( async (value) => {
            const user = await UserSchema.findOne({ email: value }).exec()
            if(user){
                throw new Error('Email have already taken');
            }
         }).withMessage({
            message: errorMessageEng.IS_UNIQUE
         }),
        body('password').notEmpty().withMessage({
            message: errorMessageEng.NOT_EMPTY
        })
    ]
}

export const userGetByIdValidationRules = () => {
    return [
        param('id').notEmpty().withMessage({
            message: errorMessageEng.NOT_EMPTY
        }),
        param('id').custom( async (value) => {
            const user = await UserSchema.findOne({ _id: value })
            if(!user){
                throw new Error('User does not exist');
            }
         }).withMessage({
            message: errorMessageEng.IS_EXIST
        })
    ]
}

export const userRegisterValidationRules = () => {
    return [
        body('email').notEmpty().withMessage({
            message: errorMessageEng.NOT_EMPTY
        }),
        body('email').isEmail().withMessage({
            message: errorMessageEng.IS_EMAIL
        }),
        body('email').custom( async (value) => {
            const user = await UserSchema.findOne({ email: value })
            if(user){
                throw new Error('Email have already taken');
            }
         }).withMessage({
            message: errorMessageEng.IS_UNIQUE
         }),
        body('password').notEmpty().withMessage({
            message: errorMessageEng.NOT_EMPTY
        })
    ]
}

export const userLoginValidationRules = () => {
    return [
        body('email').notEmpty().withMessage({
            message: errorMessageEng.NOT_EMPTY
        }),
        body('email').isEmail().withMessage({
            message: errorMessageEng.IS_EMAIL
        }),
        body('email').custom( async (value) => {
            const user = await UserSchema.findOne({ email: value })
            if(!user){
                throw new Error('Email does not exist');
            }
         }).withMessage({
            message: errorMessageEng.IS_EXIST
        }),
        body('password').notEmpty().withMessage({
            message: errorMessageEng.NOT_EMPTY
        })
    ]
}

export const userDeleteValidationRules = () => {
    return [
        param('id').notEmpty().withMessage({
            message: errorMessageEng.NOT_EMPTY
        }),
        param('id').custom( async (value) => {
            const user = await UserSchema.findOne({ _id: value })
            if(!user){
                throw new Error('Id does not exist');
            }
         }).withMessage({
            message: errorMessageEng.IS_EXIST
        }),
    ]
}

export const userUpdateValidationRules = () => {
    return [
        param('id').notEmpty().withMessage({
            message: errorMessageEng.NOT_EMPTY
        }),
        param('id').custom( async (value) => {
            const user = await UserSchema.findOne({ _id: value })
            if(!user){
                throw new Error('Id does not exist');
            }
         }).withMessage({
            message: errorMessageEng.IS_EXIST
        }),
        param('id').custom( async (value, {req}) => {
            const user = await UserSchema.findOne({ _id: value })
            const decoded = await decodeJWT(req);
            if(user._id != decoded._id){
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
        body('email').notEmpty().withMessage({
            message: errorMessageEng.NOT_EMPTY
        }),
        body('email').isEmail().withMessage({
            message: errorMessageEng.IS_EMAIL
        }),
        body('email').custom( async (value, {req}) => {
            const user = await UserSchema.findOne({ email: value })
            const { email } = await UserSchema.findOne({ _id: req.params.id })
            if( !(email == value)){
                if(user){
                    throw new Error('Email have already taken');
                }
            }
         }).withMessage({
            message: errorMessageEng.IS_UNIQUE
         }),
    ]
}