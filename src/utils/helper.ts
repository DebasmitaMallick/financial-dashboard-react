import { StockData } from "../pages/Chart";

export const getDataForDays = (data: StockData[], days: number): StockData[] => {
    const now = new Date();
    const pastDate = new Date(now);
    const latestDate = new Date("2024-09-17");
    pastDate.setDate(latestDate.getDate() - days);

    const reqData =  data.filter(item => {
        const itemDate = new Date(item.date);
        return itemDate >= pastDate;
    });
    console.log('reqData', reqData)
    return reqData
};