import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles(() =>
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

interface IProps {
    title?: string;
    checkedValues?: Array<string | number>;
    handleSelect(value?: string | number): void;
    data?: Array<string | number>;
}
export const AppCheckboxGroup = (props: IProps) => {
    const { handleSelect, data, checkedValues, title } = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
                <p className={classes.title}>{title}</p>
                <FormGroup>
                    {data &&
                        data.map((value, i) => (
                            <FormControlLabel
                                key={i}
                                control={
                                    <Checkbox
                                        color="primary"
                                        checked={checkedValues && checkedValues.includes(value)}
                                        onChange={() => handleSelect(value)}
                                        name="date"
                                    />
                                }
                                label={value}
                            />
                        ))}
                </FormGroup>
            </FormControl>
        </div>
    );
};
