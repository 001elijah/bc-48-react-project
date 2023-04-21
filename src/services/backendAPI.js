import axios from 'axios';

axios.defaults.baseURL = 'https://flat-backend.p.goit.global';

//---------------------------------------------------------------Auth Services----------------------//

export const registerUserApi = ({ name, email, password }) => {
  return axios
    .post('/api/user/register', {
      name,
      email,
      password,
    })
    .then(({ data: { name, email } }) => ({
      name,
      email,
    }));
};

export const loginUserApi = ({ email, password }) => {
  return axios
    .post('/api/user/login', {
      email,
      password,
    })
    .then(({ data: { token } }) => ({
      token,
    }));
};

export const getUserDataApi = () => {
  return axios.get('/api/user/info').then(
    ({
      data: {
        user: { email, name, balance },
      },
    }) => ({
      name,
      email,
      balance,
    })
  );
};

export const currentUserLogoutApi = () => {
  return axios.get('/api/user/logout');
};

export const addBalanceApi = ({ balance }) => {
  return axios
    .put('/api/user/addBalance', { balance })
    .then(({ data: { balance } }) => ({ balance }));
};

//---------------------------------------------------------------Personal Plan Services----------------------//

export const prePostPlanAPI = ({
  salary,
  passiveIncome,
  savings,
  cost,
  footage,
  procent,
}) => {
  return axios
    .post('/api/personal-plan/pre', {
      salary,
      passiveIncome,
      savings,
      cost,
      footage,
      procent,
    })
    .then(
      ({
        data: {
          salary,
          passiveIncome,
          savings,
          cost,
          footage,
          procent,
          year,
          month,
        },
      }) => ({
        salary,
        passiveIncome,
        savings,
        cost,
        footage,
        procent,
        year,
        month,
      })
    );
};

export const postPlanAPI = ({
  salary,
  passiveIncome,
  savings,
  cost,
  footage,
  procent,
}) => {
  return axios
    .post('/api/personal-plan', {
      salary,
      passiveIncome,
      savings,
      cost,
      footage,
      procent,
    })
    .then(
      ({
        data: {
          salary,
          passiveIncome,
          savings,
          cost,
          footage,
          procent,
          year,
          month,
        },
      }) => ({
        salary,
        passiveIncome,
        savings,
        cost,
        footage,
        procent,
        year,
        month,
      })
    );
};

export const getPlanAPI = () => {
  return axios
    .get('/api/personal-plan')
    .then(
      ({
        data: {
          salary,
          passiveIncome,
          savings,
          cost,
          footage,
          procent,
          year,
          month,
        },
      }) => ({
        salary,
        passiveIncome,
        savings,
        cost,
        footage,
        procent,
        year,
        month,
      })
    );
};

export const putPlanAPI = ({
  salary,
  passiveIncome,
  savings,
  cost,
  footage,
  procent,
}) => {
  return axios
    .put('/api/personal-plan', {
      salary,
      passiveIncome,
      savings,
      cost,
      footage,
      procent,
    })
    .then(
      ({
        data: {
          salary,
          passiveIncome,
          savings,
          cost,
          footage,
          procent,
          year,
          month,
        },
      }) => ({
        salary,
        passiveIncome,
        savings,
        cost,
        footage,
        procent,
        year,
        month,
      })
    );
};

export const getDailyLimitAPI = () => {
  return axios
    .get('/api/personal-plan/daily-limit')
    .then(({ data: { monthLimit, dailyLimit } }) => ({
      monthLimit,
      dailyLimit,
    }));
};

//---------------------------------------------------------------Cashflow Services----------------------//

export const getListOfCategoryApi = () => {
  return axios.get('/api/cashflow/category').then(({ data }) => data);
};

export const getLimitsAndTotalsApi = () => {
  return axios
    .get('/api/cashflow/presaving')
    .then(
      ({ data: { monthLimit, dailyLimit, totalByMounth, totalByDay } }) => ({
        monthLimit,
        dailyLimit,
        totalByMounth,
        totalByDay,
      })
    );
};

export const postTransactionApi = ({ type, category, comment, sum, date }) => {
  return axios
    .post('/api/cashflow', { type, category, comment, sum, date })
    .then(({ data: { type, category, comment, sum, date } }) => ({
      type,
      category,
      comment,
      sum,
      date,
    }));
};

export const getListOfTransactionsApi = ({ month, year }) => {
  return axios.get('/api/cashflow', { month, year }).then(({ data }) => data);
};

export const deleteOneTransactionApi = transactionId => {
  return axios
    .delete(`/api/cashflow/${transactionId}`)
    .then(() => transactionId);
};

export const putOneTransactionApi = ({
  transactionId,
  type,
  category,
  comment,
  sum,
  date,
}) => {
  return axios
    .put(`/api/cashflow/${transactionId}`, {
      type,
      category,
      comment,
      sum,
      date,
    })
    .then(({ data: { type, category, comment, sum } }) => ({
      type,
      category,
      comment,
      sum,
    }));
};

export const getCashflowStatApi = ({ month, year }) => {
  return axios
    .get('/api/cashflow/stat', { month, year })
    .then(({ data }) => data);
};

//---------------------------------------------------------------Dynamics Services----------------------//

export const getCustomerSavingsForChartApi = () => {
  return axios
    .get('/api/dynamics', {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2VjNDU5MmE5MTlhMWIxYWVkNjk2NyIsImlhdCI6MTY4MjA4NTY3M30.-iQRilLD7vyW_4uebeqyaqtk_eYrSK3XnNfDMC1WtEM',
      },
    })
    .then(
      ({
        data: {
          statByYear,
          year,
          month,
          accumulatedProc,
          accumulatedUah,
          squareMeters,
          accumToOneMoreMeters,
        },
      }) => ({
        statByYear,
        year,
        month,
        accumulatedProc,
        accumulatedUah,
        squareMeters,
        accumToOneMoreMeters,
      })
    )
    .catch(error => error.message);
};

export const getCustomerSavingsForStatisticApi = ({ year, month }) => {
  return axios
    .get(`/api/dynamics/by-month?year=${year}&month=${month}`, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2VjNDU5MmE5MTlhMWIxYWVkNjk2NyIsImlhdCI6MTY4MjA4NTY3M30.-iQRilLD7vyW_4uebeqyaqtk_eYrSK3XnNfDMC1WtEM',
      },
    })
    .then(
      ({ data: { income, expense, accumulated, plan, planInProcent } }) => ({
        income,
        expense,
        accumulated,
        plan,
        planInProcent,
      })
    );
};

export const addOrChangeImageOfFlatApi = imageFile => {
  console.log('api works!');
  return axios
    .patch('/api/dynamics/flatImage', imageFile, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2VjNDU5MmE5MTlhMWIxYWVkNjk2NyIsImlhdCI6MTY4MjA4NTY3M30.-iQRilLD7vyW_4uebeqyaqtk_eYrSK3XnNfDMC1WtEM',
      },
    })
    .then(({ data: { imageURL } }) => {
      // Add instruction!!!
      console.log(imageURL);
    });
};
