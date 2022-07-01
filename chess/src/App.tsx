import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BoardComponent from './components/BoardComponent';
import { Board } from './models/Board';

const AppStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

function App() {
  const [board, setBoard] = useState(new Board());

  useEffect(() => {
    restart();
  }, []);

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }

  return (
    <AppStyle>
      <BoardComponent board={board} setBoard={setBoard} />
    </AppStyle>
  );
}

export default App;
