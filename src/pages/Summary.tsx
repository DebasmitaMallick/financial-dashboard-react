import React from 'react';

const SummaryPage: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Stock Market Data Visualization</h1>
      <p className="text-gray-700">
        This project is a stock market data visualization tool built with <strong>React</strong> and <strong>TypeScript</strong> using <strong>ApexCharts</strong>. 
        The app showcases historical stock price data, offering a seamless user experience through interactive tooltips, annotations, and chart options.
        It effectively presents closing prices and volume with customized styles, while maintaining high responsiveness across devices.
      </p>
    </div>
  );
};

export default SummaryPage;
