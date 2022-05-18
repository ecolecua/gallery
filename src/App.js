import UploadForm from './components/UploadForm';

import './App.css';
import { useEffect, useState } from 'react';
import { storage } from './firebase/config';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

const dataRef = ref(storage, 'images/');

function App() {
  const [data, setData] = useState([]);

  const removeDuplicates = (arr) => {
    return [...new Set(arr)];
  };

  useEffect(() => {
    listAll(dataRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setData((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className="App">
      <br />
      <br />
      <h1> Semana Ambiental </h1>
      <hr />
      <p>Publica tu foto y participa en el concurso!</p>
      <br />
      <br />
      <UploadForm />

      <br />
      <br />
      <section class="gallery-container">
        <div class="gallary">
          {removeDuplicates(data).map((url) => {
            return <img src={url} alt="" />;
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
