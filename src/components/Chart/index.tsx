import React, { FC, useEffect, useMemo, useState } from "react";
import { StockData } from "../../pages/Chart";
import { getDataForDays } from "../../utils/helper";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import ChartActions from "./Actions";
import AreaChart from "./AreaChart";
import usePriceDetailsContext from "../../context/PriceDetailsProvider";

interface ChartProps {
  data: StockData[];
}

export interface ChartData {
  "1d": StockData[];
  "3d": StockData[];
  "1w": StockData[];
  "1m": StockData[];
}

const Chart: FC<ChartProps> = ({ data }) => {
  const {closeValueHandler, chartDataHandler} = usePriceDetailsContext();

  const chartData = useMemo<ChartData>(
    () => ({
      "1d": getDataForDays(data, 1),
      "3d": getDataForDays(data, 3),
      "1w": getDataForDays(data, 7),
      "1m": getDataForDays(data, 30),
    }),
    [data]
  );
  const [timeRange, setTimeRange] = useState<keyof typeof chartData>("1d");

  const timeRangehandler = (selectedRange: keyof typeof chartData) => {
    setTimeRange(selectedRange);
  };

  useEffect(() => {
    const seriesData = chartData[timeRange]
    closeValueHandler("last", parseFloat(seriesData[0]["4. close"]))
    closeValueHandler("first", parseFloat(seriesData[seriesData.length-1]["4. close"]))
    chartDataHandler(seriesData)
  }, [chartData, timeRange, closeValueHandler, chartDataHandler])

  const handle = useFullScreenHandle();
  return (
    <div className="m-auto">
      <ChartActions
        screenHandler={handle.enter}
        onTimeRangeSelect={timeRangehandler}
        timeRange={timeRange}
      />
      <FullScreen handle={handle} className="bg-white">
        <AreaChart seriesData={chartData[timeRange]} />
      </FullScreen>
    </div>
  );
};

export default Chart;