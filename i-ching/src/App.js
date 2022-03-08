import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Container } from 'react-bootstrap'
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import GetHex from './components/GetHex';
import About from './screens/About';

function App() {
  return (
    <div className="App">

      {/* <Header /> */}

      <Container>

          <main className="py-3">

          <Routes>

            <Route path="/" element={<HomeScreen />} />

            <Route path="/gethex" element={<GetHex />} />

            <Route path="/about" element={<About />} />

          </Routes>

        </main>

      </Container>

    </div>
  );
}

export default App;
