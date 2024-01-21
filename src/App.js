import UploadForm from './components/UploadForm';

import './App.css';
import { useEffect, useState } from 'react';
import { storage } from './firebase/config';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

// import Logo from './assets/img/logo/logotipo.png';
// import LogoLetter from './assets/img/logo/logo-letter.png';

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
      <h1>Photo-contest</h1>
      <div className="grid gallery tm-gallery">
        {removeDuplicates(data).map((url, idx) => {
          return (
            <figure
              key={`key-${idx}`}
              className="effect-goliath tm-gallery-item"
            >
              <img
                width={200}
                height={100}
                src={url}
                alt={`Img-${idx}`}
                className=""
              />
              <figcaption>
                <h2>
                  {/* Thoughtful */}
                  {/* <span>Goliath</span> */}
                </h2>
                {/* <p>When Goliath comes out, you should run.</p> */}
                <a href={url}>Ver...</a>
              </figcaption>
            </figure>
          );
        })}
      </div>
      <UploadForm />
    </div>
  );
}

export default App;
