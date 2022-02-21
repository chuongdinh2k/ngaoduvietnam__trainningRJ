import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import React from "react";

interface IOption {
    label?: string;
    value?: string | number;
}
interface IProps {
    name?: string;
    values?: Array<IOption>;
    options?: Array<IOption>;
    title?: string;
    handleChange: (value: any) => void;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            "& .MuiTypography-body1": {
                fontSize: "16px",
            },
        },
        formControl: {
            fontSize: "16px",
        },
        title: {
            fontSize: "16px",
            fontWeight: "bold",
            padding: "2rem 0",
        },
    })
);
export const AppCheckBox = (props: IProps) => {
    const handleOnChange = React.useCallback(
        (event) => {
            props.handleChange(event);
        },
        [props]
    );
    const classes = useStyles();
    const { name, options, title } = props;
    return (
        <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
                <p className={classes.title}>{title}</p>
                <FormGroup>
                    {options &&
                        options.map((opt, i) => (
                            <FormControlLabel
                                key={i}
                                control={
                                    <Checkbox
                                        onChange={handleOnChange}
                                        color="primary"
                                        // checked={values && values.includes(opt.value)}
                                        name={name}
                                        value={opt.value}
                                    />
                                }
                                label={opt.label}
                            />
                        ))}
                </FormGroup>
            </FormControl>
        </div>
    );
};
