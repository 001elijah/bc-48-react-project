// import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import s from './Popup.module.scss';
// import iconSvg from '../Svg';
// import clsx from 'clsx';
// import { putOneTransaction } from '../../../redux/operations/cashflowOperations';
// import {putOneTransactionApi} from '../../../services/backendAPI'

// export const Popup = ({ isActive, setActive, id }) => {
//   const [form, setForm] = useState();
//   const [incomeData, setIncomeData] = useState();
//   const dispatch = useDispatch();
//   const getBackdropClass = () => clsx(s.backdrop, isActive && s.active);



//   const data = (idTrans) => {
//     console.log(idTrans);
//     setIncomeData(putOneTransaction(idTrans))
//   };

//   useEffect(() => {
//     if (!id) return;
//     data(id);
//   }, [id]);

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setForm(prevForm => {
//       return {
//         ...prevForm,
//         [name]: value,
//       };
//     });
//   };
//   const handleSubmit = e => {
//     e.preventDefault();
//     //   dispatch(func);
//   };
//   return (
//     <>
//       <div
//         className={getBackdropClass()}
//         onClick={() => {
//           setActive(false);
//         }}
//       >
//         <div className={s.popup_block} onClick={e => e.stopPropagation()}>
//           <button className={s.svg_icon}>
//             {iconSvg('close', '#3A6AF5', '20', () => {
//               setActive(false);
//             })}
//           </button>
//           <form className={s.form} onSubmit={handleSubmit}>
//             <label className={s.labelField}>
//               <input
//                 className={s.inputField}
//                 type="text"
//                 name="category"
//                 title=""
//                 placeholder="Per category"
//                 //   value={form.category}
//                 onChange={handleChange}
//                 required
//               />
//             </label>
//             <label className={s.labelField}>
//               <input
//                 className={s.inputField}
//                 type="text"
//                 name="comment"
//                 title=""
//                 placeholder="Expense comment"
//                 //   value={comment}
//                 onChange={handleChange}
//                 required
//               />
//             </label>
//             <label className={s.labelField}>
//               <input
//                 className={s.inputField}
//                 type="text"
//                 name="Sum"
//                 title=""
//                 placeholder="Sum"
//                 //   value={sum}
//                 onChange={handleChange}
//                 required
//               />
//             </label>
//             <button type="submit" className={s.button}>
//               Edit
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };
