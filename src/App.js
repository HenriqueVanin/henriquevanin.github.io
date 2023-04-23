import "./App.css";
import Oficinas2 from "./projects/Oficinas2";

import { exec } from "child_process";
export var yourscript = exec("sh hi.sh", (error, stdout, stderr) => {
  console.log(stdout);
  console.log(stderr);
  if (error !== null) {
    console.log(`exec error: ${error}`);
  }
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Oficinas2 />
        {yourscript}
      </header>
    </div>
  );
}

export default App;
