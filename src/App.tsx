import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar';

import About from './pages/About';
import Home from './pages/Home';
import Store from './pages/Store';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Outlet />
      </Container>
    </>
  );
}

export default App;
