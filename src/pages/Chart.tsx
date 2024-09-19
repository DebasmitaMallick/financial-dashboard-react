import axios from "axios";
import { useQuery } from "react-query";
import Chart from "../components/Chart/index";

// defining the structure of each time series entry
interface TimeSeriesEntry {
  "1. open": string;
  "2. high": string;
  "3. low": string;
  "4. close": string;
  "5. volume": string;
}

// defining the structure of the financial data with dates as keys
interface FinancialData {
  [date: string]: TimeSeriesEntry; // The time series data indexed by date/time strings
}

// defining the stock data format after processing
export interface StockData {
  date: string;
  "1. open": string;
  "2. high": string;
  "3. low": string;
  "4. close": string;
  "5. volume": string;
}

const api = "https://financial-data-api.onrender.com/data";

const ChartPage = () => {
  const { isLoading, error, data } = useQuery<StockData[]>({
    queryKey: ["financialData"], // Unique key for the query
    queryFn: async () => {
      const resp = await axios.get<{ "Time Series (60min)": FinancialData }>(api);
      const timeSeriesData = resp.data["Time Series (60min)"];

      // converting the object into an array of entries [date, data], then sort it
      const sortedData = Object.entries(timeSeriesData).sort(
        (a, b) => new Date(b[0]).getTime() - new Date(a[0]).getTime()
      );

      // mapping sorted entries back to an array of objects
      return sortedData.map(([date, entry]) => ({
        date,
        ...entry,
      }));
    },
    // default empty array if data is undefined
    onError: (error) => {
      console.error("Error fetching data:", error);
    },
  });

  // handling the data loading state
  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  // handling error while loading data
  if (error) {
    return (
      <span className="text-center font-bold text-red-500">
        {error instanceof Error ? error.message : "An error occurred"}
      </span>
    );
  }

  // providing an empty array as a fallback
  const chartData: StockData[] = data || [];

  return (
    <Chart data={chartData} />
  );
};

export default ChartPage;
