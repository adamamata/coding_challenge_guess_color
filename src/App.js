import './App.css';
import { useEffect, useState } from 'react';

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

function App() {
  //States
  const [color, setColor] = useState("");
  const [options, setOptions] = useState([]);
  const [isIncorrect, setIsIncorrect] = useState(false);
  const [score, setScore] = useState(0);

  //Function to set new color and options
  const newColor = () => {
    const correctOption = getRandomColor();
    setColor(correctOption);
    const answers = [correctOption, getRandomColor(), getRandomColor()].sort(() => 0.5 - Math.random());
    setOptions(answers);
  }

  //Onload 
  useEffect(() => {
    newColor();
  }, [])

  //Function to check if the answer is correct
  function handleButton(option){
    if (option === color) {
      setIsIncorrect(false);
      setScore(score + 1);
      newColor();
    }
    else {
      setIsIncorrect(true);
    }
  }

  return (
    <div className="App">
      {isIncorrect && <div>Nope.</div>}
      <p>Score: {score}</p>
      <div className="color-box" style={{backgroundColor: color}}></div>
      <div className='options'>
        {options.map(option => {
          return (
            <button key={option} onClick={(() => handleButton(option))}>{option}</button>
          )
        })}
      </div>
    </div>
  );
}

export default App;
