import { useState, useRef } from "react";
//Here we are declaring the data array as a global variable
//because if its within the scope of the component then it will rendered again and again

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);

  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);
  let box_Array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const toggle = (e, num) => {
    if (lock) {
      return;
    } else if (count % 2 === 0) {
      e.target.innerHTML = `<img src="images/cross.png"/>`;
      data[num] = "x";
      setCount((prev) => ++prev);
    } else {
      e.target.innerHTML = `<img src="images/circle.png"/>`;
      data[num] = "o";
      setCount((prev) => ++prev);
    }
    console.log(data);
    checkWin();
  };

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data);
       

    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data);
    } else {
      return;
    }
  };

  const won = (winner) => {
    setLock((prev) => !prev);
    if (count % 2 === 0) {
      document.querySelector(".title").innerHTML = `
        <h2 class="winner-title">
        Player <img src="images/cross.png" style="width: 50px; "/>Won
        </h2>
        `;
    } else {
      document.querySelector(".title").innerHTML = `
        <h2 class="winner-title">
        Player <img src="images/circle.png" style="width: 50px; "/>Won
        </h2>
        `;
    }
  };

  const reset = () => {
    console.log(data);
    setLock(false);
    setCount(0);
    box_Array.map((e) => {
      e.current.innerHTML = ``;
    });
    data = ["", "", "", "", "", "", "", "", ""];
    document.querySelector(".title").innerHTML = `
    <h2>
    Tic Tac Toe in <span>React</span>
  </h2>
        `;
  };
  return (
    <div className="tictactoe-container">
      <div className="title">
        <h2>
          Tic Tac Toe in <span>React</span>
        </h2>
      </div>
      <div className="board">
        <div className="row1 row">
          <div
            className="box"
            ref={box1}
            onClick={(e) => {
              toggle(e, 0);
            }}
          ></div>
          <div
            className="box"
            ref={box2}
            onClick={(e) => {
              toggle(e, 1);
            }}
          ></div>
          <div
            className="box"
            ref={box3}
            onClick={(e) => {
              toggle(e, 2);
            }}
          ></div>
        </div>
        <div className="row2 row">
          <div
            className="box"
            ref={box4}
            onClick={(e) => {
              toggle(e, 3);
            }}
          ></div>
          <div
            className="box"
            ref={box5}
            onClick={(e) => {
              toggle(e, 4);
            }}
          ></div>
          <div
            className="box"
            ref={box6}
            onClick={(e) => {
              toggle(e, 5);
            }}
          ></div>
        </div>
        <div className="row3 row">
          <div
            className="box"
            ref={box7}
            onClick={(e) => {
              toggle(e, 6);
            }}
          ></div>
          <div
            className="box"
            ref={box8}
            onClick={(e) => {
              toggle(e, 7);
            }}
          ></div>
          <div
            className="box"
            ref={box9}
            onClick={(e) => {
              toggle(e, 8);
            }}
          ></div>
        </div>
      </div>
      <button className="reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;
