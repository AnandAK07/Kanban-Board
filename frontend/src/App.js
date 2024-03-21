import React, { useState } from 'react'
import './App.css';
import Board from './components/boards/Board';
import Editable from './components/editable/Editable';

function App() {
  const [boards, setBoards] = useState([
    {
      id: Date.now() + Math.random() * 2,
      title: "To Do",
      cards: [
        {
          id: Date.now() + Math.random(),
          title: "Project A",
          tasks: [],
          labels: [{
            text: "frontent",
            color: "blue"
          }],
          decs: "baeeen beoi iee",
          date: ""
        },
        {
          id: Date.now() + Math.random(),
          title: "Project A",
          tasks: [],
          labels: [{
            text: "frontent",
            color: "skyblue"
          }],
          decs: "baeeen beoi iee",
          date: ""
        },
        {
          id: Date.now() + Math.random(),
          title: "Project A",
          tasks: [],
          labels: [{
            text: "backend",
            color: "yellow"
          }],
          decs: "baeeen beoi iee",
          date: ""
        },

      ]
    },
    {
      id: Date.now() + Math.random() * 2,
      title: "In Progress",
      cards: [
        {
          id: Date.now() + Math.random(),
          title: "Project K",
          tasks: [],
          labels: [{
            text: "frontent",
            color: "gray"
          }],
          decs: "baeeen beoi iee",
          date: ""
        },
        {
          id: Date.now() + Math.random(),
          title: "Project R",
          tasks: [],
          labels: [{
            text: "backend",
            color: "pink"
          }],
          decs: "baeeen beoi iee",
          date: ""
        },

      ]
    },
    {
      id: Date.now() + Math.random() * 2,
      title: "Review",
      cards: [
        {
          id: Date.now() + Math.random(),
          title: "Project C",
          tasks: [],
          labels: [{
            text: "frontent",
            color: "black"
          }],
          decs: "baeeen beoi iee",
          date: ""
        },

        {
          id: Date.now() + Math.random(),
          title: "Project D",
          tasks: [],
          labels: [{
            text: "backend",
            color: "yellow"
          }],
          decs: "baeeen beoi iee",
          date: ""
        },
        {
          id: Date.now() + Math.random(),
          title: "Project D",
          tasks: [],
          labels: [{
            text: "backend",
            color: "skyblue"
          }],
          decs: "baeeen beoi iee",
          date: ""
        },
      ]
    },
    {
      id: Date.now() + Math.random() * 2,
      title: "Done",
      cards: [
        {
          id: Date.now() + Math.random(),
          title: "Project E",
          tasks: [],
          labels: [{
            text: "frontent",
            color: "green"
          }],
          decs: "baeeen beoi iee",
          date: ""
        },
        {
          id: Date.now() + Math.random(),
          title: "Project F",
          tasks: [],
          labels: [{
            text: "backend",
            color: "red"
          }],
          decs: "baeeen beoi iee",
          date: ""
        },

      ]
    }
  ])

  const addCard = (title, bid) => {
    const card = {
      id: Date.now() + Math.random(),
      title: "",
      labels: [],
      tasks: [],
      date: "",
      desc: "",
    }

    const index = boards.findIndex(item => item.id === bid)
    if (index < 0) return;
    const tempBoards = [...boards];
    tempBoards[index].cards.push(card)
    setBoards(tempBoards);
  }

  const removeCard = (cid, bid) => {
    const bIndex = boards.findIndex(item => item.id === bid)
    if (bIndex < 0) return;
    const cIndex = boards[bIndex].cards.findIndex(item => item.id === bid)
    if (cIndex < 0) return;
    const tempBoards = [...boards];
    tempBoards[bIndex].cards.slice(cIndex, 1);
    setBoards(tempBoards)
  }

  const addBoard = (title) => {
    setBoards([...boards, {
      id: Date.now() + Math.random(),
      title,
      cards: [],
    }])
  }

  const removeBoard = (bid) => {
    const tempBoard = boards.filter(item => item.id !== bid);
    setBoards(tempBoard)
  }

  return (
    <div className="app">
      <div className='app_navbar'>
        <h2>Kanban</h2>
      </div>
      <div className="app_outer">
        <div className='app_boards'>
          {boards.map((item) => (
            <Board key={item.id} board={item} />
          ))}

          <div className="add_boards_board">
            <Editable displayClass="app_boards_board_add" text="Add Board" placehodler="Enter board title" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
