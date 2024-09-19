import { createContext, FC, ReactNode, useCallback, useContext, useState } from "react";

interface PriceDetailsContextType {
  closeValue: {
    first: number,
    last: number
  };
  closeValueHandler: (type: string, val: number) => void;
}

const PriceDetailsContext = createContext<PriceDetailsContextType>({
  closeValue: {
    first: 0,
    last: 0
  },
  closeValueHandler: () => {}
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
  
  const handleCloseValue = useCallback((type: string, val: number) => {
    setCloseValue((prevCloseValue) => ({
      ...prevCloseValue,
      [type]: val
    }))
  }, [])

  const contextValue = {
    closeValue,
    closeValueHandler: handleCloseValue
  }
  return (
    <PriceDetailsContext.Provider value={contextValue}>
      {children}
    </PriceDetailsContext.Provider>
  );
};

export default usePriceDetailsContext;
