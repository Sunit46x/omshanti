// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './component/Navbar';
import Footer from './Footer';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MentorCard from './component/MentorCard';
import Home from './component/Home';

function App() {
  return (
    <>
      {/* <Navbar></Navbar>
      <MajorSection></MajorSection>
      <ConsultingTeam></ConsultingTeam>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      <Footer></Footer> */}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/mentors' element={<MentorCard />} />
          {/* Define other routes here */}
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
