import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import { Home, AboutMe, Proyects, Experience, Error404 } from './pages/Index'; 
import Menu from './Components/Menu';


function App() {
  return (
    <div className='App'>
  <BrowserRouter>
    <Menu/>
    <div className='content'>
    <Routes>
      <Route>
        <Route path='/' element={<Home />} />
        <Route path='/AboutMe' element={<AboutMe />} />
        <Route path='/Proyects' element={<Proyects />} />
        <Route path='/Experience' element={<Experience />} />
        <Route path='/*' element={<Error404 />} />
      </Route>
    </Routes>
  </div>
  </BrowserRouter>
    </div>
  )
}

export default App
