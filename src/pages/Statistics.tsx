import React from 'react';
import ApexCharts from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import usePriceDetailsContext from '../context/PriceDetailsProvider';

const StatisticsPage: React.FC = () => {
  const {chartData} = usePriceDetailsContext();
  const transformedSeries = [
    {
      name: 'Closing Price',
      data: chartData.map(point => ({
        x: new Date(point.date.replace(' ', 'T')).getTime(),
        y: parseFloat(point['4. close']),
      })),
    },
  ];

  const chartOptions: ApexOptions = {
    chart: {
      type: 'line',
      height: 350,
      zoom: { enabled: false },
    },
    stroke: { curve: 'smooth' },
    xaxis: { type: 'datetime' },
    yaxis: { labels: { formatter: (val: number) => val.toFixed(2) } },
    grid: {
      show: true,
      borderColor: '#e7e9ec',
      strokeDashArray: 5,
      xaxis: { lines: { show: true } },
      yaxis: { lines: { show: false } },
    },
    tooltip: {
      enabled: true,
      shared: true,
      intersect: false,
      fixed: {
        enabled: true,
        position: 'topRight',
        offsetY: -10,
        offsetX: 0,
      },
    },
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Stock Market Statistics</h1>
      <div id="chart" className="h-[350px]">
        <ApexCharts options={chartOptions} series={transformedSeries} type="line" height={350} />
      </div>
    </div>
  );
};

export default StatisticsPage;