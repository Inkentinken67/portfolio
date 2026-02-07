import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home.tsx';
// import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'

function DefaultLayout() {
  return (
    <div className="h-screen overflow-y-auto scroll-smooth antialiased font-sans bg-slate-950 work-scroll">
      {/* <Header /> */}
      <Outlet />
      <Footer />
    </div>
  );
}

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
