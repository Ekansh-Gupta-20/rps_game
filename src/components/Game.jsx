import React, { useState } from "react";
import "./Game.css";

const Game = () => {
  const options = ["ROCK", "PAPER", "SCISSORS"];
  const [playerVal, setPlayerVal] = useState("");
  const [computerVal, setComputerVal] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [resultMsg, setResultMsg] = useState("");

  const logic = (player, computer) => {
    if (player === computer) return 0;
    if (
      (player === "ROCK" && computer === "SCISSORS") ||
      (player === "SCISSORS" && computer === "PAPER") ||
      (player === "PAPER" && computer === "ROCK")
    ) {
      return 1;
    }
    return -1;
  };

 const decision = (playerChoice) => {
  const computerChoice = options[Math.floor(Math.random() * 3)];

  setPlayerVal(playerChoice);
  setComputerVal(computerChoice);

  const result = logic(playerChoice, computerChoice);

  if (result === 1) {
    setPlayerScore(playerScore + 1);
    setResultMsg("You Win! (^‿^) ✔");
  } else if (result === -1) {
    setCompScore(compScore + 1);
    setResultMsg("You Lose (×_×) ✘");
  } else {
    setResultMsg("It's a Tie (・_・) =");
  }
};


  return (
    <div className="game">
      <h1>Rock Paper Scissors</h1>

      <div className="buttons">
        <button onClick={() => decision("ROCK")}>
          <i className="fas fa-hand-rock"></i>
        </button>

        <button onClick={() => decision("PAPER")}>
          <i className="fas fa-hand-paper"></i>
        </button>

        <button onClick={() => decision("SCISSORS")}>
          <i className="fas fa-hand-scissors"></i>
        </button>
      </div>

      <div className="values">
        <p>Player: {playerVal}</p>
        <p>Computer: {computerVal}</p>
      </div>

      <div className="scores">
        <p>Player Score: {playerScore}</p>
        <p>Computer Score: {compScore}</p>
      </div>
      <h2 className="result">{resultMsg}</h2>

<button className="reset" onClick={() => {
  setPlayerScore(0);
  setCompScore(0);
  setPlayerVal("");
  setComputerVal("");
  setResultMsg("");
}}>
  Reset Game
</button>

    </div>
  );
};

export default Game;
