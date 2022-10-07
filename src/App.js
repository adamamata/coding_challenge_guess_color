import './App.css';
import { useEffect, useState } from 'react';

function App() {
  //States
  const [color, setColor] = useState("");
  const [options, setOptions] = useState([]);

  //Function to generate a new color 
  function getRandomColor(){
    const characters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    const newColorArr = [];
    for (let i = 0; i < 6; i++){
      const randomIndex = Math.floor(Math.random() * characters.length);
      newColorArr.push(characters[randomIndex]); 
    }
    return `#${newColorArr.join("")}`;
  }

  //Onload 
  useEffect(() => {
    const correctOption = getRandomColor();
    setColor(correctOption);
    setOptions([correctOption, getRandomColor(), getRandomColor()]);
  }, [])

  return (
    <div className="App">
      <div className="color-box" style={{backgroundColor: color}}></div>
      <div className='options'>
        {options.map(option => {
          return (
            <button>{option}</button>
          )
        })}
      </div>
    </div>
  );
}

export default App;
