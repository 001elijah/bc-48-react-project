import { TextDataInput } from "components/TextDataInput/TextDataInput";
// import { Alert, TextField } from "@mui/material";
import { useFormik } from "formik";
// import { useDispatch } from "react-redux";

import * as Yup from 'yup';

// export const OwnPlanPage = () => {
//     return (
//         <>
//             <p>OwnPlanPage</p>
//             <TextDataInput/>
//         </>
//     );
// };

const OwnPlanSchema = Yup.object().shape({
//    name: Yup.string()
//         .required('Required')
//         .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, { message: "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan", excludeEmptyString: true }),
//    number: Yup.string()
//         .required('Required')
//         .matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, { message: "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +", excludeEmptyString: true }),
});
 
export const OwnPlanPage = () => {
const formik = useFormik({
     initialValues: {
        salary: null,
        passiveIncome: null,
        savings: true,
        cost: null,
        footage: null,
        procent: null,
     },
     onSubmit: values => {
         console.log(values);
        },
     validationSchema: OwnPlanSchema,
   });
    // const dispatch = useDispatch();

    return (
        <>
            <form
                // className={s.Form}
                onSubmit={formik.handleSubmit}
            >

                    {/* <TextField
                        size="small"
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Type contact name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        sx={{
                            width: '100%',
                          }}
                    /> */}
                    {/* { formik.errors.name && formik.touched.name && <Alert variant="filled" severity="warning">{formik.errors.name}</Alert> } */}
                    {/* <TextField
                        size="small"
                        id="number"
                        name="number"
                        type="text"
                        placeholder="Type contact number"
                        onChange={formik.handleChange}
                        value={formik.values.number}
                        sx={{
                            width: '100%',
                          }}
                    /> */}
                {/* {formik.errors.number && formik.touched.number && <Alert variant="filled" severity="warning">{formik.errors.number}</Alert>} */}
                <TextDataInput />
                {/* <button disabled={!(formik.isValid && formik.dirty)}
                    // className={s.Button}
                    type="submit">Submit</button> */}
            </form>
        </>
    );
};