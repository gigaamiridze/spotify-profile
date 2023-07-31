import {
  Chart as ChartJS,
  ChartOptions,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';
import { Bar,  } from 'react-chartjs-2';
import { Direction } from '../constants';
import { IChartProps } from '../interfaces';
import { HorizontalChartContainer, VerticalChartContainer } from '../components';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title
);

const properties = [
  'acousticness',
  'danceability',
  'energy',
  'instrumentalness',
  'liveness',
  'speechiness',
  'valence',
];

function FeatureChart({ features, direction }: IChartProps) {
  const avg = (arr: number[]) => {
    return arr.reduce((a, b) => a + b, 0) / arr.length;
  };

  const createDataset = (features: any) => {
    const dataset: Record<string, number> = {};

    properties.forEach(prop => {
      dataset[prop] = features.length
        ? avg(features.map((feat: Record<string, number>) => feat && feat[prop]))
        : features[prop];
    });

    return dataset;
  };

  const labels = Object.keys(createDataset(features));
  const data = Object.values(createDataset(features));

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

  const chartOptions: ChartOptions<'bar'> = {
    indexAxis: direction === Direction.HORIZONTAL ? 'y' : 'x',
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
  };

  return (
    <>
      {direction === Direction.HORIZONTAL ? (
        <HorizontalChartContainer>
          <Bar
            id='chart'
            data={chartData}
            options={chartOptions}
          />
        </HorizontalChartContainer>
      ) : (
        <VerticalChartContainer>
          <Bar
            id='chart'
            data={chartData}
            options={chartOptions}
          />
        </VerticalChartContainer>
      )}
    </>
  )
}

export default FeatureChart;
