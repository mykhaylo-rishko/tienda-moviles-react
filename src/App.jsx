import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="app-container">
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;