import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import CompanyHeader from "./pages/CompanyHeader";
import Enterprisevoice from "./components/enterprise/enterprisevoice";
import Productctlg from "./components/enterprise/productctlg";
import "bootstrap/dist/css/bootstrap.min.css";
import MidEnterprise from "./pages/MidEnterprise";
import Navbar from "./components/navbar";
import WholeSale from "./components/wholesale/wholesale";
import Voice from "./components/enterprise/voice";
import Login from "./components/login/login";


export default function App(props) {
  const pathname = window.location.pathname;
  return (
    <>
      <BrowserRouter>
        {pathname !== "/login" && <Navbar />}
        <Routes>
          {pathname !== "/login" && (
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="contact" element={<Contact />} />
              <Route path="companyheader" element={<CompanyHeader />} />
              <Route path="ew/enterprise" element={<Enterprisevoice />} />
              <Route path="ew/enterprise/voice" element={<Voice />} />
              <Route path="ew/wholesale/voice" element={<WholeSale />} />
              <Route path="mid-enterprise" element={<MidEnterprise />} />
              <Route path="products" element={<Productctlg />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          )}
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
