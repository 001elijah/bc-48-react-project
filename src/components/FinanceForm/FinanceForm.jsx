import { TextDataInput } from "components/TextDataInput/TextDataInput";

import { useFormik } from "formik";
import {
    useDispatch,
    useSelector
} from "react-redux";

import * as Yup from 'yup';

import s from './FinanceForm.module.scss';
import { FinanceDataBoard } from "components/FinanceDataBoard/FinanceDataBoard";
import { selectCost, selectFootage, selectMonth, selectPassiveIncome, selectProcent, selectSalary, selectSavings, selectYear } from "redux/selectors/personalPlanSelectors";
import { prePostPlan } from '../../redux/operations/personalPlanOperations';
import { selectAuthorized } from "redux/selectors/authSelectors";
import _ from "lodash";

const OwnPlanSchema = Yup.object().shape({
   salary: Yup.string().required('Required').matches(/^[1-9][0-9]*$/, {message: 'Must be greater than 0 and start from 1'}),
   passiveIncome: Yup.string().required('Required').matches(/^[1-9][0-9]*$/, {message: 'Must be greater than 0 and start from 1'}),
    savings: Yup.string().required('Required').matches(/^[1-9][0-9]*$/, {message: 'Must be greater than 0 and start from 1'}),
    cost: Yup.string().required('Required').matches(/^[1-9][0-9]*$/, {message: 'Must be greater than 0 and start from 1'}),
    footage: Yup.string().required('Required').matches(/^[1-9][0-9]*$/, {message: 'Must be greater than 0 and start from 1'}),
    procent: Yup.string().required('Required').matches(/\b(0*(?:[1-9][0-9]?|100))\b/, {message: 'Must be greater than 0 and less or equal to 100'}),
});

export const FinanceForm = () => {
    const dispatch = useDispatch();
    const authorized = useSelector(selectAuthorized);
    const salary = useSelector(selectSalary);
    const passiveIncome = useSelector(selectPassiveIncome);
    const savings = useSelector(selectSavings);
    const cost = useSelector(selectCost);
    const footage = useSelector(selectFootage);
    const procent = useSelector(selectProcent);
    const year = useSelector(selectYear);
    const month = useSelector(selectMonth);

    const formik = useFormik({
        initialValues: {
            salary,
            passiveIncome,
            savings,
            cost,
            footage,
            procent,
        },
        onSubmit: values => {
            console.log(values);
        },
        // onBlur: values => {
            // console.log(values);
        //     dispatch(prePostPlan(values));
        // },
        validationSchema: OwnPlanSchema,
    });
    const getPrePlan = _.debounce(() => {
        const {
            salary,
            passiveIncome,
            savings,
            cost,
            footage,
            procent
        } = formik.values;
        authorized && salary && passiveIncome && savings &&
            cost && footage && procent &&
            dispatch(prePostPlan({
                salary: +salary,
                passiveIncome: +passiveIncome,
                savings: +savings,
                cost: +cost,
                footage: +footage,
                procent: +procent
            }));
    }, 1000);
    getPrePlan();
    // console.log(formik.values);
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
                    id={'salary'}
                    name={'salary'}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.salary}
                    fieldError={formik.errors.salary}
                    isFieldTouched={formik.touched.salary}
                />
                <TextDataInput
                    label={'2. Passive income, months, ₴'}
                    htmlFor={'passiveIncome'}
                    placeholder={'Enter text'}
                    id={'passiveIncome'}
                    name={'passiveIncome'}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.passiveIncome}
                    fieldError={formik.errors.passiveIncome}
                    isFieldTouched={formik.touched.passiveIncome}
                />

                <TextDataInput
                    label={'3. Savings, ₴'}
                    htmlFor={'savings'}
                    placeholder={'Enter text'}
                    id={'savings'}
                    name={'savings'}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.savings}
                    fieldError={formik.errors.savings}
                    isFieldTouched={formik.touched.savings}
                />

                <TextDataInput
                    label={'4. Specify the cost of your future apartment, ₴'}
                    htmlFor={'cost'}
                    placeholder={'90 000'}
                    id={'cost'}
                    name={'cost'}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.cost}
                    fieldError={formik.errors.cost}
                    isFieldTouched={formik.touched.cost}
                />
                
                <TextDataInput
                    label={'5. Specify the number of sq.m. of your future apartment'}
                    htmlFor={'footage'}
                    placeholder={'Enter text'}
                    id={'footage'}
                    name={'footage'}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.footage}
                    fieldError={formik.errors.footage}
                    isFieldTouched={formik.touched.footage}
                />
                
                <TextDataInput
                    label={'6. Accumulation, %'}
                    htmlFor={'procent'}
                    placeholder={'Enter text'}
                    hint={'Specify the percentage that you would like to accumulate per month from the total amount of income and you will see when you reach the goal'}
                    id={'procent'}
                    name={'procent'}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.procent}
                    fieldError={formik.errors.procent}
                    isFieldTouched={formik.touched.procent}
                />
                
                <FinanceDataBoard BoardTitle={"You will have apartment in:"} yearValue={year} monthValue={month}/>
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