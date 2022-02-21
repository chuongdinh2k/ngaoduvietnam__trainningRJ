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
