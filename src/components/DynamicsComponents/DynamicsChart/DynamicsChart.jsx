import s from './DynamicsChart.module.scss';
import MonthlyStats from '../Statistic/Statistic';
import { useMediaQuery } from 'react-responsive';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const optionsMobile = {
  chartArea: {
    bottom: 5,
  },
  maintainAspectRatio: false,
  categoryPersentage: 0.5,
  barPersentage: 0.5,
  responsive: true,
  indexAxis: 'y',
  borderRadius: 6,
  elements: {
    bar: {
      borderWidth: 0,
    },
  },

  plugins: {
    legend: {
      display: false,
      labels: {
        font: {
          size: 16,
        },
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: false,
        borderColor: 'white',
        borderWidth: 2,
      },
      border: {
        display: false,
        ticks: {
          color: '#fff',
        },
      },
    },
    x: {
      grid: {
        color: 'rgba(243, 243, 243, 0.2)',
        borderColor: 'white',
        borderWidth: 2,
        tickLength: 2,
      },
      border: {
        display: false,
        dash: [6, 10],
      },
      ticks: {
        color: '#fff',
      },
      position: 'top',
    },
  },
};
export const optionsTablet = {
  maintainAspectRatio: false,
  categoryPersentage: 0.5,
  barPersentage: 0.5,
  borderRadius: 6,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  maintainAspectRation: false,

  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      beginAtZero: true,
      grid: {
        display: false,
        borderColor: 'white',
        borderWidth: 2,
      },
      border: {
        display: false,
        ticks: {
          color: '#fff',
        },
      },
    },
    y: {
      grid: {
        color: 'rgba(243, 243, 243, 0.2)',
        borderColor: 'white',
        borderWidth: 2,
        tickLength: 2,
      },
      border: {
        display: false,
        dash: [6, 10],
      },
      ticks: {
        color: '#fff',
      },
      position: 'top',
    },
  },
};

const labels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
      backgroundColor: '#6359e9',
    },
    {
      data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
      backgroundColor: '#3a6af5',
    },
    {
      data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
      backgroundColor: '#f3f3f3',
    },
  ],
};

ChartJS.defaults.color = '#fff';
ChartJS.defaults.font.size = 12;
ChartJS.defaults.font.lineHeight = 1.16;

const DynamicsChart = () => {
  const isMobileSize = useMediaQuery({ query: '(max-width: 767px)' });
  return (
    <div>
      <h2 className={s.title}>Dynamics of expenses and savings</h2>
      <ul className={s.list}>
        <li className={s.item}>
          <span className={s.accumulatedDot}></span>Accumulated
        </li>
        <li className={s.item}>
          <span className={s.expensesDot}></span>Expenses
        </li>
        <li className={s.item}>
          <span className={s.incomeDot}></span>Income
        </li>
      </ul>
      {isMobileSize ? (
        <div
          style={{
            width: 222,
            height: 434,
          }}
        >
          <Bar data={data} options={optionsMobile} />
        </div>
      ) : (
        <div
          style={{
            width: 422,
            height: 219,
          }}
        >
          <Bar data={data} options={optionsTablet} />
        </div>
      )}
    </div>
  );
};

export default DynamicsChart;
