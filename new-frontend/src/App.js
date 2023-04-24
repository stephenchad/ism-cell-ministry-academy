import { Routes, Route } from "react-router-dom";
import {
  Home,
  PreRegister,
  MinisterRegister,
  UserRegister,
  UserDashBoard,
  Login,
  MinisterDashboard,
  CoursesPage,
  SingleCourse,
} from "./pages/index";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/pre-register" element={<PreRegister />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/minister-register" element={<MinisterRegister />} />
      <Route path="/stundent-register" element={<UserRegister />} />
      <Route path="/stundent-dashboard" element={<UserDashBoard />} />
      <Route path="/single-course" element={<SingleCourse />} />
      <Route path="/minister-dashboard" element={<MinisterDashboard />} />
    </Routes>
  );
}

export default App;
