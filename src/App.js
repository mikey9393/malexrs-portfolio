import "./styles/index.css";
import { Route, Routes, Link } from "react-router-dom";
// Routing
import AcademicsPg from "./routes/AcademicsPg";
import AboutMePg from "./routes/AboutMePg";
import HomePg from "./routes/HomePg";
import MyWorkPg from "./routes/MyWorkPg";
import ContactMePg from "./routes/ContactMePg";
// Components : import componets in router components

const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/HomePg">Home</Link>
          </li>
          <li>
            <Link to="/MyWorkPg">My Work</Link>
          </li>
          <li>
            <Link to="/AboutMePg">About Me</Link>
          </li>
          <li>
            <Link to="/ContactMePg">Contact Me</Link>
          </li>
          <li>
            <Link to="/AcademicsPg">Academics</Link>
          </li>
        </ul>
      </nav>
      {/* Routers and Router links */}
      <Routes>
        <Route path="/HomePg" element={<HomePg />} />
        <Route path="/MyWorkPg" element={<MyWorkPg />} />
        <Route path="/AboutMePg" element={<AboutMePg />} />
        <Route path="/ContactMePg" element={<ContactMePg />} />
        <Route path="/AcademicsPg" element={<AcademicsPg />} />
      </Routes>
    </>
  );
};
export default App;
