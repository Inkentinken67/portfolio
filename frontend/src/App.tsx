import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'

function DefaultLayout() {
  return (
    <div className="flex flex-col min-h-screen antialiased font-sans bg-slate-950 [&::-webkit-scrollbar-thumb]:bg-neutral-500">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

//vi fixar dark mode sen 


export default function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
  );
}
