import React, {useEffect, useState} from 'react';
import {Form, FormikProvider, useFormik} from "formik";
import {Button, IconButton, InputAdornment, Stack, TextField} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useEditSubjectMutation } from "../../redux/matrixAPI";

export default function SubjectAbilitiesForm(props) {
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const { data, character } = props;
    const [ editSubject ] = useEditSubjectMutation();
    const { id } = data[0];

    const resetForm = () => {
        formik.setFieldValue('health', data[0].health);
        formik.setFieldValue('agility', data[0].agility);
        formik.setFieldValue('speed', data[0].speed);
        formik.setFieldValue('impact_force', data[0].impact_force);
    }

    useEffect(() => {
        resetForm();
    }, [character.selectedSubject, data])

    const handleEditAbilities = async () => {
        setIsButtonDisabled(true);
        if (!formik || !formik.isValid) return null;
        try {
            console.log(`Edit Subject id=${id}`, formik.values);
            const { data } = await editSubject({ ...formik.values, id });
        } catch (e) {
            console.error('Cannot update subject abilities: ', e);
        }

    }
    const formik = useFormik({
        initialValues: {
            id: data[0].id,
            health: data[0].health,
            agility: data[0].agility,
            speed: data[0].speed,
            impact_force: data[0].impact_force
        },
        onSubmit: handleEditAbilities
    });
    const { getFieldProps, handleSubmit, setFieldValue, touched, errors } = formik;

    return (
        <FormikProvider value={formik}>
            <Form>
                <TextField
                    className="hiddenInput"
                    hidden
                    value={formik.values.id}
                />
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
                                <IconButton
                                    edge="start"
                                    color="primary"
                                    onClick={() => {
                                        setFieldValue('agility', formik.values.agility - 1);
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
                                        setFieldValue('agility', formik.values.agility + 1);
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
                    value={formik.values.speed}
                    label="Speed"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <IconButton
                                    edge="start"
                                    color="primary"
                                    onClick={() => {
                                        setFieldValue('speed', formik.values.speed - 1);
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
                                        setFieldValue('speed', formik.values.speed + 1);
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
                    value={formik.values.impact_force}
                    label="Impact Force"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <IconButton
                                    edge="start"
                                    color="primary"
                                    onClick={() => {
                                        setFieldValue('impact_force', formik.values.impact_force - 1);
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
                                        setFieldValue('impact_force', formik.values.impact_force + 1);
                                        setIsButtonDisabled(false);
                                    }}
                                >
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
                        onClick={() => {
                            resetForm();
                            setIsButtonDisabled(true);
                        }}
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