import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Board } from '../models/Board';
import { Cell } from '../models/Cell';
import CellComponent from './CellComponent';

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({ board, setBoard }) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  function click(cell: Cell) {
    if (
      selectedCell &&
      selectedCell !== cell &&
      selectedCell.figure?.canMove(cell)
    ) {
      selectedCell.moveFigure(cell);
      setSelectedCell(null);
      updateBoard();
    } else {
      setSelectedCell(cell);
    }
  }

  useEffect(() => {
    highLightCells();
  }, [selectedCell]);

  function highLightCells() {
    board.highLightCells(selectedCell);
    updateBoard();
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  }

  return (
    <BoardStyle>
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell) => {
            const selected =
              cell.x === selectedCell?.x && cell.y === selectedCell?.y;

            return (
              <CellComponent
                cell={cell}
                key={cell.id}
                selected={selected}
                click={click}
              />
            );
          })}
        </React.Fragment>
      ))}
    </BoardStyle>
  );
};

export default BoardComponent;

const BoardStyle = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: calc(64px * 8);
  height: calc(64px * 8);
`;
