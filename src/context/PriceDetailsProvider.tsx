import { createContext, FC, ReactNode, useCallback, useContext, useState } from "react";
import { StockData } from "../pages/Chart";

interface PriceDetailsContextType {
  closeValue: {
    first: number,
    last: number
  };
  closeValueHandler: (type: string, val: number) => void;
  chartData: StockData[];
  chartDataHandler: (data: StockData[]) => void;
}

const PriceDetailsContext = createContext<PriceDetailsContextType>({
  closeValue: {
    first: 0,
    last: 0
  },
  closeValueHandler: () => {},
  chartData: [],
  chartDataHandler: () => {},
});

const usePriceDetailsContext = () => useContext(PriceDetailsContext);

interface DetailsProps {
    children: ReactNode
}
export const PriceDetailsProvider: FC<DetailsProps> = ({ children }) => {
  const [closeValue, setCloseValue] = useState({
    first: 0,
    last: 0
  });

  const [chartData, setChartData] = useState<StockData[]>([]);
  
  const handleCloseValue = useCallback((type: string, val: number) => {
    setCloseValue((prevCloseValue) => ({
      ...prevCloseValue,
      [type]: val
    }))
  }, [])

  const handleChartData = useCallback((data: StockData[]) => {
    setChartData(data);
  }, [])

  const contextValue = {
    closeValue,
    closeValueHandler: handleCloseValue,
    chartData,
    chartDataHandler: handleChartData
  }
  return (
    <PriceDetailsContext.Provider value={contextValue}>
      {children}
    </PriceDetailsContext.Provider>
  );
};

export default usePriceDetailsContext;
