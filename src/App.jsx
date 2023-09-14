import Homepage from "./Pages/Homepage";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Smartphone from "./Pages/Smartphone";
import LaptopPage from "./Pages/LaptopPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/homepage' element={<Homepage />}></Route>
          <Route path='/smartphone/all' element={<Smartphone />}></Route>
          <Route path='/laptop/all' element={<LaptopPage />}></Route>
          <Route path='#' element={<p>view tablet</p>}></Route>
        </Routes>
      </BrowserRouter>


    </>
  )
}