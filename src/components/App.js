// create your App component here
import React, { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        setImageUrl(data.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? <p>Loading...</p> : <img src={imageUrl} alt="A Random Dog" />}
    </div>
  );
}

export default App;
