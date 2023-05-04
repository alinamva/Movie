import React from 'react';
import Main from './Components/Main';
import Master from './layouts/Master';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wishlist from "./Components/Wishlist"

function App() {
  return (
    <BrowserRouter>
    <div className='bg-gradient-to-b from-black via-blue-900  to-purple-700 min-h-[700px]'>
    <Master>
    <Routes>
            <Route index element={<Main />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
    </Master>
</div> 
</BrowserRouter> 
);
}

export default App;
