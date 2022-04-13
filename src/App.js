import './App.css';
import Header from './Components/Header';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import RouterUser from './Pages/Users/RouterUser';
import RouterPosts from './Pages/Posts/RouterPosts';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container my-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Users/*" element={<RouterUser />} />
        <Route path="Posts/*" element={<RouterPosts />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
