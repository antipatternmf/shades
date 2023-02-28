import { useEffect } from 'react';
import appStyles from './App.module.pcss';

function App() {
  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:${SERVER_PORT}`;
      const response = await fetch(url);
      const data = await response.json();

      console.log(data);
    };

    fetchServerData();
  }, []);
  return (
    <div className="App">
      <div className={appStyles.temp__outer}>
        <div className={appStyles.temp__inner}>
          <p className={appStyles.temp__text}>
            Вот тут будет жить ваше приложение :)
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
