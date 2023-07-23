import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ChartContainer } from '../../components';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title
);

function BarChart() {
  const labels = [
    'acousticness',
    'danceability',
    'energy',
    'instrumentalness',
    'liveness',
    'speechiness',
    'valence',
  ];

  const data = [0.05, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8];

  const chartData = {
    labels,
    datasets: [
      {
        label: '',
        data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.3)',
          'rgba(255, 159, 64, 0.3)',
          'rgba(255, 206, 86, 0.3)',
          'rgba(75, 192, 192, 0.3)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(104, 132, 245, 0.3)',
          'rgba(153, 102, 255, 0.3)',
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(104, 132, 245, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        padding: {
          bottom: 20,
        },
        text: 'Audio Features',
        color: '#ffffff',
        font: {
          size: 18,
          family: 'Circular Std',
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: true,
          color: 'rgba(255, 255, 255, 0.3)',
        },
        ticks: {
          font: {
            size: 12,
            family: 'Circular Std',
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          color: 'rgba(255, 255, 255, 0.3)',
        },
        ticks: {
          font: {
            size: 12,
            family: 'Circular Std',
          },
        },
      },
    },
    layout: {
      padding: 0,
    },
    legend: {
      display: false,
    },
  };

  return (
    <ChartContainer>
      <Bar
        id='chart'
        data={chartData}
        options={options}
      />
    </ChartContainer>
  )
}

export default BarChart;
