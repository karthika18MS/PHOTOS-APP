import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPhoto from './components/AddPhoto';
import SearchPhoto from './components/SearchPhoto';
import DeletePhoto from './components/DeletePhoto';
import ViewPhoto from './components/ViewPhoto';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddPhoto/>}/>
        <Route path="/search" element={<SearchPhoto/>}/>
          <Route path="/delete" element={<DeletePhoto/>}/>
            <Route path="/view" element={<ViewPhoto/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
