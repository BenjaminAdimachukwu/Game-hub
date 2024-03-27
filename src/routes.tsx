import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import GameDetailPage from "./pages/GameDetailPage";
import ErrorPage from "./pages/Errorpage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
     errorElement : <ErrorPage/>,
    children: [
        {index: true, element: <Home/>},
        {path : 'games/:slug', element: <GameDetailPage/>}
      
    ],
  },
]);

export default router