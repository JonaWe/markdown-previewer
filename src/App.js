import "./App.css";
import { useState } from "react";
import Textarea from "./components/Textarea";
import Preview from "./components/Preview";

const App = () => {
  const [inputText, setInputText] = useState("");
  return (
    <>
      <Textarea updateText={setInputText} />
      <Preview text={inputText} />
    </>
  );
};

export default App;
