import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Buro365 from "../@modules/Buro365main/Buro365";
import ContactUs from "../@modules/Contactus/ContactUs";


const MainRoutes = () => {
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Buro365 />} />
            <Route path="contactus" element={<ContactUs />} />
          </Route>

        </Routes>
      </BrowserRouter>

  );
};

export default MainRoutes;
