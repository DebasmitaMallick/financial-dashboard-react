import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import RootLayout from './pages/RootLayout';
import ChartPage from './pages/Chart';
import SummaryPage from './pages/Summary';
import StatisticsPage from './pages/Statistics';
import AnalysisPage from './pages/Analysis';
import SettingsPage from './pages/Settings';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <ChartPage />
        },
        {
          path: 'summary',
          element: <SummaryPage />
        },
        {
          path: 'statistics',
          element: <StatisticsPage />
        },
        {
          path: 'analysis',
          element: <AnalysisPage />
        },
        {
          path: 'settings',
          element: <SettingsPage />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
