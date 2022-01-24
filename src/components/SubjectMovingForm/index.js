import React, {useEffect, useState} from "react";
import {Form, FormikProvider, useFormik} from "formik";
import {useEditSubjectMutation} from "../../redux/matrixAPI";

export default function SubjectMovingForm(props) {
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const { data, character } = props;
    const { id } = data[0];
    const [ editSubject ] = useEditSubjectMutation();

    const resetForm = () => {
        formik.setFieldValue('worldId', data[0].worldId);
    }

    useEffect(() => {
        resetForm();
    }, [character.selectedSubject, data])

    const handleEditLocationNumber = async () => {
        setIsButtonDisabled(true);
        if (!formik || !formik.isValid) return null;
        try {
            console.log(`Moving Subject id=${id}`, formik.values);
            const { data } = await editSubject({ ...formik.values, id });
        } catch (e) {
            console.error('Cannot update subject location: ', e);
        }
    }

    const formik = useFormik({
        initialValues: {
            id: data[0].id,
            worldId: data[0].worldId
        },
        onSubmit: handleEditLocationNumber
    });
    const { getFieldProps, handleSubmit, setFieldValue, touched, errors } = formik;

    return (
        <FormikProvider value={formik}>
            <Form>
                {/*<InputLabel id="demo-simple-select-label">Age</InputLabel>*/}
                {/*<Select*/}
                {/*    labelId="demo-simple-select-label"*/}
                {/*    id="demo-simple-select"*/}
                {/*    value={age}*/}
                {/*    label="Age"*/}
                {/*    onChange={handleChange}*/}
                {/*>*/}
                {/*    {}*/}
                {/*</Select>*/}
            </Form>
        </FormikProvider>
    )
}
