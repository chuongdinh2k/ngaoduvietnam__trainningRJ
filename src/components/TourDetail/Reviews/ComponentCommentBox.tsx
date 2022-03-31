import { Avatar, TextField, Button } from "@material-ui/core";
import styled from "styled-components";
import { ErrorMessage, Formik } from "formik";

import { formSchemaComment, getFirstLetter } from "@utils";
import { useAppSelector, selectAuth } from "@redux";
import { Error } from "@components";
import { ICommentValue } from "@api";

interface IProps {
    handleSubmit?: (values: ICommentValue) => void;
    loadingButton?: boolean;
}
export const ComponentCommentBox = (props: IProps) => {
    const { handleSubmit, loadingButton } = props;
    // redux state
    const auth = useAppSelector(selectAuth);
    // Component variable
    const initialValuesPackage = {
        comment: "",
    };
    return (
        <StyledComponentCommentBox>
            {auth.userInfo && auth.tokenInfoAuth && (
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
                                        {errors.comment && (
                                            <ErrorMessage name="comment" component={Error} />
                                        )}
                                        <div className="comment__wrapBtn">
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                className="comment__btn"
                                                type="submit"
                                                onClick={() => handleSubmit()}
                                                disabled={loadingButton}
                                            >
                                                {loadingButton ? `is Loading...` : `Comment`}
                                            </Button>
                                        </div>
                                    </div>
                                );
                            }}
                        </Formik>
                    </div>
                </div>
            )}
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
                line-height: 1.5;
            }
        }
        &__wrapBtn {
            display: flex;
            justify-content: flex-end;
            padding-top: 2.4rem;
        }
        &__btn {
            color: ${(p) => p.theme.colors.pureWhite};
            border: none;
            padding: 1.4rem 4rem;
            font-size: 1.6rem;
            text-transform: capitalize;
            box-shadow: none;
            border-radius: 0;
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
