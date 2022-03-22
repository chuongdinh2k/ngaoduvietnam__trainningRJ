import { Avatar, TextField } from "@material-ui/core";
import styled from "styled-components";

import { Formik } from "formik";
import { formSchemaComment, getFirstLetter } from "@utils";
import { useAppSelector, selectAuth } from "@redux";

interface IProps {
    handleSubmit?: (values: any) => void;
}
export const ComponentCommentBox = (props: IProps) => {
    const { handleSubmit } = props;
    // redux state
    const auth = useAppSelector(selectAuth);
    // Component variable
    const initialValuesPackage = {
        comment: "",
    };
    return (
        <StyledComponentCommentBox>
            <div className="wrapperComment">
                <div className="comment">
                    <div className="comment__profile">
                        <Avatar src={auth.userInfo?.picture}>
                            {getFirstLetter(auth.userInfo?.lastName)}
                        </Avatar>
                    </div>
                    <Formik
                        initialValues={initialValuesPackage}
                        validationSchema={formSchemaComment}
                        onSubmit={(values, { resetForm }) => {
                            {
                                handleSubmit && handleSubmit(values);
                                resetForm();
                            }
                        }}
                    >
                        {({ handleSubmit, values, errors, handleChange }) => {
                            return (
                                <div className="comment__wrapInput">
                                    <TextField
                                        fullWidth
                                        id="outlined-multiline-static"
                                        multiline
                                        rows={4}
                                        variant="outlined"
                                        placeholder="Enter Your comment"
                                        name="comment"
                                        value={values.comment}
                                        onChange={handleChange("comment")}
                                    />
                                    {errors.comment && <p className="error">{errors.comment}</p>}
                                    <div className="comment__wrapBtn">
                                        <button
                                            className="comment__btn"
                                            type="submit"
                                            onClick={() => handleSubmit()}
                                        >
                                            Comment
                                        </button>
                                    </div>
                                </div>
                            );
                        }}
                    </Formik>
                </div>
            </div>
        </StyledComponentCommentBox>
    );
};
const StyledComponentCommentBox = styled.div`
    .error {
        font-size: 1.4rem;
        color: ${(p) => p.theme.colors.red};
    }
    .wrapperComment {
        width: 100%;
        border-top: 1px solid #d9dadc;
        padding: 3rem 0;
    }
    .comment {
        display: flex;
        justify-content: space-between;
        &__profile {
            /* .MuiAvatar-colorDefault {
                background-color: ${(p) => p.theme.colors.pureWhite};
            } */
            @media (max-width: ${(p) => p.theme.breakpoints.values.xs}px) {
                padding-right: 1rem;
            }
        }
        &__wrapInput {
            width: 90%;
            .MuiInput-root {
                height: 13rem !important;
                border: 1px solid #e5e5e5;
            }
            .MuiInputBase-input {
                font-size: 1.4rem;
            }
        }
        &__wrapBtn {
            display: flex;
            justify-content: flex-end;
            padding-top: 2.4rem;
        }
        &__btn {
            background-color: ${(p) => p.theme.colors.orange};
            color: ${(p) => p.theme.colors.pureWhite};
            border: none;
            padding: 1.4rem 4rem;
            font-size: 1.6rem;
            cursor: pointer;
            &:hover {
                background-color: ${(p) => p.theme.colors.darkOrange};
            }
        }
    }
    .commentInput {
        height: 13rem;
        .MuiInputBase-inputMultiline {
            height: 100% !important;
        }
    }
`;
