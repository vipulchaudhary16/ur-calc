import { Route, Routes } from 'react-router-dom';
import './App.css';
import { LogIn } from './componets/LogIn';
import { Home } from './componets/Home';
import { SignUp } from './componets/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
