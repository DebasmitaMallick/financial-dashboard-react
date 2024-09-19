import React from "react";
import ApexCharts from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import usePriceDetailsContext from "../context/PriceDetailsProvider";

const AnalysisPage: React.FC = () => {
  const { chartData } = usePriceDetailsContext();

  const closingPriceSeries = [
    {
      name: "Closing Price",
      data: chartData.map((point) => ({
        x: new Date(point.date).getTime(),
        y: point["4. close"],
      })),
    },
  ];

  // Simple chart options
  const chartOptions: ApexOptions = {
    chart: {
      height: 350,
    },
    xaxis: {
      type: "datetime",
      labels: {
        format: "dd MMM",
      },
    },
    yaxis: {
      title: {
        text: "Value",
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    grid: {
      show: true,
    },
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Stock Market Analysis</h1>
      <p className="text-gray-700 mb-6">
        Analyze trends in closing prices.
      </p>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Closing Price</h2>
        <ApexCharts
          options={chartOptions}
          series={closingPriceSeries}
          type="line"
          height={350}
        />
      </div>
    </div>
  );
};

export default AnalysisPage;
