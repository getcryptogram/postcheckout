import React, { useState } from "react";
import ImageUploader from "react-images-upload";
import Form from "./Form";
const App = (props) => {
  const [pictures, setPictures] = useState([]);
  const [drawingNotes, setNotes] = useState("");

  const onDrop = (picture) => {
    setPictures([...pictures, picture]);
  };
  return (
    <div style={{ width: "30%", height: "50%", margin: "auto" }}>
      <Form {...props} setNotes={setNotes} />
      <ImageUploader
        {...props}
        withIcon={true}
        onChange={onDrop}
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
      />
      <input type="submit" value="Submit" />
    </div>
  );
};

export default App;
