import React, { useState } from 'react';
// import ProgressBar from './ProgressBar';
import { storage } from '../firebase/config';
import { ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg', 'image/jpg'];

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null);

      const imageRef = ref(storage, `images/${selected.name + v4()}`);
      uploadBytes(imageRef, selected).then(() => {
        alert('Image Uploaded!');
      });
    } else {
      setFile(null);
      setError('Invalid format!~');
    }
  };

  return (
    <form>
      <label htmlFor="">
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <>
        {error && <div>{error}</div>}
        {file && <div>{file.name}</div>}
        {/* {file && <ProgressBar file={file} setFile={setFile} />} */}
      </>
    </form>
  );
};

export default UploadForm;
