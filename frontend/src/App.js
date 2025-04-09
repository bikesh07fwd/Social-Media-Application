import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';

import { BrowserRouter,Routes,Route} from 'react-router-dom';
import SignIN from './components/SignIN';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import Createpost from './components/Createpost';
import Home from './components/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Preview from './components/preview';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element = {<Home/>}></Route>
          <Route path="/signup" element = {<SignUp/>}></Route>
          <Route path="/signin" element = {<SignIN/>}></Route>
          <Route path="/profile" element = {<Profile/>}></Route>
          <Route path="/createPost" element = {<Createpost/>}></Route>
          <Route path="/preview" element = {<Preview/>}></Route>
        </Routes>
        <ToastContainer theme="dark"/>
      </div>
    </BrowserRouter>
  );
}

export default App;
