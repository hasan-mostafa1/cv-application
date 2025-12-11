import { useState } from "react";
import "./css/style.css";
import Inputs from "./components/Inputs";
import CV from "./components/CV";

function App() {
  const [fields, setFields] = useState({});

  return (
    <main>
      <Inputs fields={fields} setFields={setFields} />
      <CV fields={fields} />
    </main>
  );
}

export default App;
