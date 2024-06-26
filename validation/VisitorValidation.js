import Joi from 'joi'

const visitorSchema = {
    name:Joi.string().required(),
    mobileNumber:Joi.string().required()
}

export const validateVisitor = (data) =>{
    const visitorSchema = Joi.object({
        name: Joi.string().required(),
        mobileNumber: Joi.string().required(),
    })

    const options = { abortEarly: false, allowUnknown: false };
    return visitorSchema.validate(data, options);
}
