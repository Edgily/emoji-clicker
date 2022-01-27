import "./App.css";
import { useState } from "react";
import { Navbar } from "./components/Navbar";

function App() {
  const [emojis, setEmojis] = useState("");

  const [level, setLevel] = useState("Level 1 - 1 Emoji!");

  const length = emojis.length;

  function addEmoji() {
    const emojiList = ["😎", "🤩", "😆", "🤐", "😴"];

    const lengthOfList = emojiList.length - 1;

    const randomizer = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const randomNum = randomizer(0, lengthOfList);

    const randomEmoji = emojiList[randomNum];

    if (length >= 460) {
      setLevel("Max Level - 10 Emojis!!!!!!!!!!");
      setEmojis((currEmojis) => {
        const currentEmojis = [...currEmojis];
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        return currentEmojis;
      });
    } else if (length >= 370) {
      setLevel("Level 9 - 9 Emojis!!!!!!!!!");
      setEmojis((currEmojis) => {
        const currentEmojis = [...currEmojis];
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        return currentEmojis;
      });
    } else if (length >= 280) {
      setLevel("Level 8 - 8 Emojis!!!!!!!!");
      setEmojis((currEmojis) => {
        const currentEmojis = [...currEmojis];
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        return currentEmojis;
      });
    } else if (length >= 210) {
      setLevel("Level 7 - 7 Emojis!!!!!!!");
      setEmojis((currEmojis) => {
        const currentEmojis = [...currEmojis];
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        return currentEmojis;
      });
    } else if (length >= 150) {
      setLevel("Level 6 - 6 Emojis!!!!!!");
      setEmojis((currEmojis) => {
        const currentEmojis = [...currEmojis];
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        return currentEmojis;
      });
    } else if (length >= 100) {
      setLevel("Level 5 - 5 Emojis!!!!!");
      setEmojis((currEmojis) => {
        const currentEmojis = [...currEmojis];
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        return currentEmojis;
      });
    } else if (length >= 60) {
      setLevel("Level 4 - 4 Emojis!!!!");
      setEmojis((currEmojis) => {
        const currentEmojis = [...currEmojis];
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        return currentEmojis;
      });
    } else if (length >= 30) {
      setLevel("Level 3 - 3 Emojis!!!");
      setEmojis((currEmojis) => {
        const currentEmojis = [...currEmojis];
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        return currentEmojis;
      });
    } else if (length >= 10) {
      setLevel("Level 2 - 2 Emojis!!");
      setEmojis((currEmojis) => {
        const currentEmojis = [...currEmojis];
        currentEmojis.push(randomEmoji);
        currentEmojis.push(randomEmoji);
        return currentEmojis;
      });
    } else {
      setEmojis((currEmojis) => {
        const currentEmojis = [...currEmojis];
        currentEmojis.push(randomEmoji);
        return currentEmojis;
      });
    }
  }

  return (
    <div className="App">
      <Navbar
        addEmoji={addEmoji}
        level={level}
        emojis={emojis}
        length={length}
      />
      <div className="emojis-display">{emojis}</div>
    </div>
  );
}

export default App;
