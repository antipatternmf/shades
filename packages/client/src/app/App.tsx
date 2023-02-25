import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import PublicLayout from '../components/PublicLayout';

const Profile = lazy(() => import('../pages/profile'));

function App() {
  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:${SERVER_PORT}`;
      const response = await fetch(url);
      const data = await response.json();

      // eslint-disable-next-line no-console
      console.log(data);
    };

    fetchServerData();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<p>sign-in</p>} />
        <Route path="sign-up" element={<p>sign-up</p>} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="profile" element={<Profile />} />
        <Route path="forum" element={<p>forum</p>} />
        <Route path="game" element={<p>game</p>} />
      </Route>
      <Route path={'/*'} element={<p>not found</p>} />
    </Routes>
  );
}

export default App;
