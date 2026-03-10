import Navigation from '@components/Navigation';
import { Outlet } from 'react-router-dom';
import './App.css';

function Root() {
  return (
    <div>
      <header>
        <Navigation />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
