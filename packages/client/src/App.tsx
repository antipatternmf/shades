import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    (async () => {
      const url = `http://localhost:${SERVER_PORT}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    })();
  }, []);

  return <div className="App">Вот тут будет жить ваше приложение :)</div>;
}

export default App;
