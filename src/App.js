
import './App.css';
// import Layout from './components/Layout/Layout';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Hotels from './pages/Hotels';
import Chats from './pages/Chats';
import Lodges from './pages/Lodges';
import Places from './pages/Places';
import Login from './pages/Login'
import Register from './pages/Register';
//hello this is commit
function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/Hotels" element={<Hotels/>}/>
      <Route path="/Chats" element={<Chats/>}/>
      <Route path="/Lodges" element={<Lodges/>}/>
      <Route path="/Places" element={<Places/>}/>
      <Route path ="/Login" element={<Login/>}/>
      <Route path ="/Register" element={<Register/>}/>
      
      
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
