import { ApexOptions } from "apexcharts";
import React from "react";
import ApexCharts from "react-apexcharts";
import { StockData } from "../../pages/Chart";
import usePriceDetailsContext from "../context/PriceDetailsProvider";

interface ApexChartProps {
  seriesData: StockData[];
}

const AreaChart: React.FC<ApexChartProps> = ({ seriesData }) => {
  const {
    closeValue: { last },
  } = usePriceDetailsContext();

  const lastDate = new Date(seriesData[0].date.replace(" ", "T")).getTime();

  const options: ApexOptions = {
    chart: {
      type: "area",
      stacked: false,
      height: 350,
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 55, 100],
        type: "vertical",
      },
    },
    stroke: {
      curve: "straight",
    },
    yaxis: [
      {
        labels: {
          show: false,
        },
      },
      {
        opposite: true,
        labels: {
          show: false,
        },
      },
    ],
    xaxis: {
      crosshairs: {
        show: true, 
        width: 1, 
        position: "back", 
        stroke: {
          color: "#FF4560", 
          width: 1,
          dashArray: 5, 
        },
      },
      tooltip: {
        enabled: false,
      },
      type: "datetime",
      labels: {
        show: false, 
      },
      axisBorder: {
        show: false, 
      },
      axisTicks: {
        show: false, 
      },
    },
    tooltip: {
      enabled: true,
      followCursor: true, 

      shared: true,
      intersect: false,
      marker: {
        show: false, 
      },

      custom: ({ series, dataPointIndex, seriesIndex, w }) => {
        const currentValue = series[seriesIndex][dataPointIndex];

        return `
          <div style="
            padding: 8px;
            border-radius: 4px;
            background: black;
            color: #fff;
            font-size: 12px;
            text-align: center;
          ">
            ${currentValue.toFixed(2)}
      </div>
        `;
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "5px",
      },
    },
    annotations: {
      points: [
        {
          x: lastDate,
          y: parseFloat(seriesData[0]["4. close"]), 
          marker: {
            size: 0, 
          },
          label: {
            borderColor: "#4B40EE",
            offsetY: -10,
            style: {
              color: "#fff",
              background: "#4B40EE",
              padding: {
                left: 10,
                right: 10,
                top: 5,
                bottom: 5,
              },
              cssClass: "rounded-[5px]",
            },
            text: last?.toString(),
          },
        },
      ],
    },
    legend: {
      show: false,
    },
  };

  const transformedAreaSeries = {
    name: "Price",
    type: "area",
    data: seriesData.map((point) => ({
      x: point.date,
      y: point["4. close"],
    })),
    color: "#4B40EE",
    stroke: {
      colors: ["#4B40EE"], 
    },
  };

  const transformedBarSeries = {
    name: "Volume",
    type: "bar",
    data: seriesData.map((point) => ({
      x: point.date,
      y: point["5. volume"],
    })),
    color: "#e7e9ec",
  };

  return (
    <div id="chart" className="h-[343px] rounded-[5px]">
      <ApexCharts
        options={options}
        series={[transformedAreaSeries, transformedBarSeries]}
        type="line"
        height={350}
      />
    </div>
  );
};

export default AreaChart;
