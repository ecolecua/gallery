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
      <UploadForm />

      {removeDuplicates(data).map((url) => {
        return <img src={url} alt="" />;
      })}
    </div>
  );
}

export default App;
