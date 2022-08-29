import Navbar from './page/Navbar';
import Home  from './component/Home';
import Account from './component/Account';
import Signin from './component/Signin';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import { AuthContextProvider } from './server/Auth';
import Protected from './component/Protected';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/account" element={<Protected><Account/></Protected>}/>
      <Route path="/signin" element={<Signin/>}/>
     </Routes>
     </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
