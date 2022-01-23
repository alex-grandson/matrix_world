import React, {useState} from 'react';
import {Form, FormikProvider, useFormik} from "formik";
import {Button, IconButton, InputAdornment, Stack, TextField} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

export default function (props) {
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const { data } = props;

    const formik = useFormik({
        initialValues: {
            health: data[0].health,
            agility: data[0].agility,
            speed: data[0].speed,
            impact_force: data[0].impact_force
        },
        onSubmit: (values) => {
            // alert(JSON.stringify(values, null, 2));
            console.log(values);
            setIsButtonDisabled(true);
        },
    });
    const { getFieldProps, handleSubmit, setFieldValue, touched, errors } = formik;

    const handleAdd = (e) => {
        console.log(e);
        setIsButtonDisabled(false);
    }
    const handleSubstractButton = (e) => {
        setFieldValue('health', formik.values.health - 1)
        console.log(e);
    }
    return (
        <FormikProvider value={formik}>
            <Form>
                <TextField
                    sx={{margin: "10px 0 20px 0"}}
                    value={formik.values.health}
                    label="Health"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <IconButton
                                    edge="start"
                                    color="primary"
                                    onClick={() => {
                                        setFieldValue('health', formik.values.health - 1);
                                        setIsButtonDisabled(false);
                                    }}
                                >
                                    <RemoveIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    edge="end"
                                    color="primary"
                                    onClick={() => {
                                        setFieldValue('health', formik.values.health + 1);
                                        setIsButtonDisabled(false);
                                    }}
                                >
                                    <AddIcon />
                                </IconButton>
                            </InputAdornment>
                        )
                    }} />
                <TextField
                    sx={{marginBottom: "20px"}}
                    value={formik.values.agility}
                    label="Agility"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <IconButton edge="start" color="primary">
                                    <RemoveIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton edge="end" color="primary">
                                    <AddIcon />
                                </IconButton>
                            </InputAdornment>
                        )
                    }} />
                <TextField
                    sx={{marginBottom: "20px"}}
                    value={formik.values.speed}
                    label="Speed"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <IconButton edge="start" color="primary">
                                    <RemoveIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton edge="end" color="primary">
                                    <AddIcon />
                                </IconButton>
                            </InputAdornment>
                        )
                    }} />
                <TextField
                    sx={{marginBottom: "20px"}}
                    value={formik.values.impact_force}
                    label="Impact Force"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <IconButton edge="start" color="primary">
                                    <RemoveIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton edge="end" color="primary">
                                    <AddIcon />
                                </IconButton>
                            </InputAdornment>
                        )
                    }} />
                <Stack direction="row">
                    <Button
                        className="control"
                        variant="outlined"
                        color="error"
                        disabled={isButtonDisabled}
                        fullWidth
                        type="reset"
                    >
                        Cancel
                    </Button>
                    <Button
                        className="control"
                        variant="contained"
                        color="success"
                        disabled={isButtonDisabled}
                        fullWidth
                        type="submit"
                        onSubmit={handleSubmit}
                    >
                        Apply
                    </Button>
                </Stack>
            </Form>
        </FormikProvider>
    )
}