import './App.css';
import Navbar from './components/navbar.jsx';

function App() {
  return (
    <div className="bg-darkgray min-h-screen">
      <Navbar />
      <div className="text-white text-center p-4 font-extrabold text-4xl"> PhillyGPT </div>
      <div className="text-white text-center mb-4"> This is a temporary description for PhillyGPT </div>
    </div>
  );
}

export default App;
