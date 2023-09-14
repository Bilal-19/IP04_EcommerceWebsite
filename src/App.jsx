import Homepage from "./Pages/Homepage";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetail from "./Pages/Productdetail";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/product/detail' element={<Homepage />}></Route>
          <Route path='/product/listing' element={<ProductDetail />}></Route>
          <Route path='/addtocart/account' element={<Homepage />}></Route>
          <Route path='/checkout' element={<Homepage />}></Route>
          <Route path='/smartphone/all' element={<p>view smartphone</p>}></Route>
          <Route path='/laptop/all' element={<p>view laptop</p>}></Route>
          <Route path='/tablet/all' element={<p>view tablet</p>}></Route>
        </Routes>
      </BrowserRouter>


    </>
  )
}