import Keyboard from "./keyboard";
import NumberPad from "./components/num-pad/num-pad";
import './App.css';

function App() {

  const keys = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
    "."
  ];

  const numbers = [
    '7',
    '8',
    '9',
    '/',
    '4',
    '5',
    '6',
    '*',
    '1',
    '2',
    '3',
    '-',
    '.',
    '0',
    '=',
    '+'
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
  <div className='flex-pad'>
    <Keyboard items={keys} heading="React Keyboard" onSelectItem={handleSelectItem}/>
    <NumberPad items={numbers} heading="Number Pad" onSelectItem={handleSelectItem}/>
  </div>
  );
}

export default App;