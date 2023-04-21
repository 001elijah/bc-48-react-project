import { TextDataInput } from "components/TextDataInput/TextDataInput";
// import { Alert, TextField } from "@mui/material";
import { useFormik } from "formik";
// import { useDispatch } from "react-redux";

import * as Yup from 'yup';

import s from './FinanceForm.module.scss';
import { FinanceDataBoard } from "components/FinanceDataBoard/FinanceDataBoard";
// import shortid from "shortid";

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
 
export const FinanceForm = () => {
    const formik = useFormik({
        initialValues: {
            salary: '',
            passiveIncome: '',
            savings: '',
            cost: '',
            footage: '',
            procent: '',
        },
        onSubmit: values => {
            console.log(values);
            },
        validationSchema: OwnPlanSchema,
    });
    return (
        <div className={s.Container}>
            <form
                className={s.PlanFormWrapper}
                onSubmit={formik.handleSubmit}
            >
                <TextDataInput
                    label={'1. RFP of both spouses, ₴'}
                    htmlFor={'salary'}
                    placeholder={'75 000'}
                    hint={null}
                    id={'salary'}
                    name={'salary'}
                    onChange={formik.handleChange}
                    value={formik.values.salary}
                />
                <TextDataInput
                    label={'2. Passive income, months, ₴'}
                    htmlFor={'passiveIncome'}
                    placeholder={'Enter text'}
                    hint={null}
                    id={'passiveIncome'}
                    name={'passiveIncome'}
                    onChange={formik.handleChange}
                    value={formik.values.passiveIncome}
                />
                <TextDataInput
                    label={'3. Savings, ₴'}
                    htmlFor={'savings'}
                    placeholder={'Enter text'}
                    hint={null}
                    id={'savings'}
                    name={'savings'}
                    onChange={formik.handleChange}
                    value={formik.values.savings}
                />
                <TextDataInput
                    label={'4. Specify the cost of your future apartment, ₴'}
                    htmlFor={'cost'}
                    placeholder={'90 000'}
                    hint={null}
                    id={'cost'}
                    name={'cost'}
                    onChange={formik.handleChange}
                    value={formik.values.cost}
                />
                <TextDataInput
                    label={'5. Specify the number of sq.m. of your future apartment'}
                    htmlFor={'footage'}
                    placeholder={'Enter text'}
                    hint={null}
                    id={'footage'}
                    name={'footage'}
                    onChange={formik.handleChange}
                    value={formik.values.footage}
                />
                <TextDataInput
                    label={'6. Accumulation, %'}
                    htmlFor={'procent'}
                    placeholder={'Enter text'}
                    hint={'Specify the percentage that you would like to accumulate per month from the total amount of income and you will see when you reach the goal'}
                    id={'procent'}
                    name={'procent'}
                    onChange={formik.handleChange}
                    value={formik.values.procent}
                />
                
                <FinanceDataBoard BoardTitle={"You will have apartment in:"} />
                {/* <FinanceDataBoard /> */}
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
                {/* <button disabled={!(formik.isValid && formik.dirty)}
                    // className={s.Button}
                    type="submit">Submit</button> */}
            </form>
        </div>
    );
};