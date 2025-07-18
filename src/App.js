
import './App.css';
import {Greeting} from "./Greeting/Greeting"
import {Message} from "./Message/Message"
import {Button} from "./Button/Button"

function App() {
  return (
    <div className="App">
      <Greeting name="Ruslan" />
      <Message text="В лісі вовк страшний живе. Поїдає все живе" />
      <Button onClick={() => console.log('Зачинено')}/>
    </div>
  );
}

export default App;
