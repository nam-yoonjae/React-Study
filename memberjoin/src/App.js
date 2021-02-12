import React, {useState} from 'react';
import Input from "@material-ui/core/Input";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormLabel from "@material-ui/core/FormLabel";

const App = () => {
  const [name, setName] = useState();
  const [jumin, setJumin] = usetState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [marry, setMarry] = usetState(false);
  const [hobby, setHobby] = useState("선택");
  const [date, setDate] = useState();
}

const setNameText = e => {
  setName(e.target.value);
};
const setJuminText = e => {
  setJumin(e.target.value);
};



function App2() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
