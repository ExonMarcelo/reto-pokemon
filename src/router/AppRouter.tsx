
import {
   BrowserRouter as Router,
   Routes,
   Route,
//    Navigate
} from "react-router-dom";
import DashboardLayout from "./DashboardLayout";
import Main from "../components/Views/Main";
import Detail from "../components/Views/Detail";

export const AppRouter = () => {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<DashboardLayout />}>
                <Route index element={<Main/>} />
                <Route path="detail/:id" element={<Detail/>} />
            </Route>
         </Routes>
      </Router>
   )
}