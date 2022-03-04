import { validate_phone } from "@configs";
import * as Yup from "yup";

export const formSchemaHomeFilter = Yup.object().shape({
    departure: Yup.string().required("This field is required!"),
    location: Yup.string().required("This field is required!"),
});

export const formSchemaEmail = Yup.object().shape({
    email: Yup.string()
        .trim()
        .required("This field is required!")
        .email("Email is not value")
        .max(255, "This field is cannot be longer than 255 characters!"),
});

export const formSchemaComment = Yup.object().shape({
    comment: Yup.string().trim().required("This field is required!"),
});

export const formSchemaCheckOut = Yup.object().shape({
    email: Yup.string()
        .trim()
        .required("This field is required!")
        .email("Email is not value")
        .max(255, "This field is cannot be longer than 255 characters!"),
    firstName: Yup.string()
        .trim()
        .required()
        .max(25, "This field is cannot be longer than 25 characters!"),
    lastName: Yup.string()
        .trim()
        .required()
        .max(25, "This field is cannot be longer than 25 characters!"),
    phoneNumber: Yup.number().required(),
    // payment: Yup.array().min(1, "This field is required"),
});

export const formSchemaLogin = Yup.object().shape({
    email: Yup.string()
        .trim()
        .required("This field is required!")
        .email("Email is not value")
        .max(255, "This field is cannot be longer than 255 characters!"),
    password: Yup.string().trim().required("This field is required!"),
});

export const formSchemaContact = Yup.object().shape({
    name: Yup.string().trim().required("This field is required!"),
    email: Yup.string()
        .trim()
        .required("This field is required!")
        .email("Email is not value")
        .max(255, "This field is cannot be longer than 255 characters!"),
    phone: Yup.string()
        .trim()
        .required("This field is required!")
        .matches(validate_phone, "Phone number is not valid"),
    message: Yup.string().trim().required("This field is required!"),
});
