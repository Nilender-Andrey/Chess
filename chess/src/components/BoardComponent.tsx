import React, { FC } from 'react';
import styled from 'styled-components';
import { Board } from '../models/Board';
import CellComponent from './CellComponent';

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

const BoardStyle = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: calc(64px * 8);
  height: calc(64px * 8);
`;

const BoardComponent: FC<BoardProps> = ({ board, setBoard }) => {
  return (
    <BoardStyle>
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell) => (
            <CellComponent cell={cell} key={cell.id} />
          ))}
        </React.Fragment>
      ))}
    </BoardStyle>
  );
};

export default BoardComponent;
