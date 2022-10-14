import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './components/Home';
import Login from './components/Login/Login';
import { ProfileForm } from './components/Profile/Profile';
import SignUp from './components/Signup/Signup';
import MainHOC from './HOC';
import Profile from './pages/Profile/Profile';
// import Profile from './pages/Profile/Profile';

function Router() {
  return (
    <BrowserRouter>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<MainHOC />}>
          <Route path="" element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          {/* <Route path="/profile" element={<ProfileForm />} /> */}
          <Route path="/profile" element={<Profile />} />

          {/* <Route path="*" element={<NotFound404 />} /> */}
        </Route>
      </Routes>

      <ToastContainer />
    </BrowserRouter>
  );
}

export default Router;