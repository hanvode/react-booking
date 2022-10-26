import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/home/Home';
import ListRice  from './pages/list/ListRice';
import Rice  from './pages/rice/Rice';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/list-rice' element={<ListRice/>}/>
        <Route path='/list-rice/:id' element={<Rice/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
