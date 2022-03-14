import { makeStyles, Slide, SlideProps, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import { resetSnackBar, selectApp } from "@redux";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

export const styles = makeStyles(() => ({
    root: {
        width: "100%",
    },
}));
export const SnackBar = () => {
    // component state
    type TransitionProps = Omit<SlideProps, "direction">;

    function TransitionLeft(props: TransitionProps) {
        return <Slide {...props} direction="left" />;
    }

    const classes = styles();
    const dispatch = useDispatch();
    const app = useSelector(selectApp);
    const { show, message, anchorOrigin, messageType } = app.snackBar;
    const handleClose = () => {
        dispatch(resetSnackBar());
    };

    React.useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(resetSnackBar());
        }, 2000);
        return () => clearTimeout(timer);
    }, []);
    if (show) {
        const keyOfMessage = new Date().getTime();
        return (
            <div className={classes.root}>
                <Snackbar
                    key={keyOfMessage}
                    anchorOrigin={anchorOrigin ?? { vertical: "top", horizontal: "right" }}
                    open={show}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    TransitionComponent={TransitionLeft}
                >
                    <Alert
                        elevation={6}
                        variant="filled"
                        onClose={handleClose}
                        severity={messageType ?? "warning"}
                        iconMapping={{ warning: <></> }}
                    >
                        {message}
                    </Alert>
                </Snackbar>
            </div>
        );
    }
    return null;
};
