import { FC } from 'react';
import styled from 'styled-components';
import { Cell } from '../models/Cell';

interface CellProps {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
}
interface CellStyleProps {
  cell: Cell;
  selected: boolean;
}

const CellComponent: FC<CellProps> = ({ cell, selected, click }) => {
  return (
    <CellStyle
      className='available'
      cell={cell}
      selected={selected}
      onClick={() => click(cell)}
      style={{ background: cell.available && cell.figure ? 'green' : '' }}>
      {cell.available && !cell.figure && <Available />}
      {cell.figure?.logo && <ImgStyle src={cell.figure.logo} alt='' />}
    </CellStyle>
  );
};

export default CellComponent;

const CellStyle = styled.div<CellStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 64px;
  height: 64px;

  background-color: ${(props) => (props.selected ? 'brown' : props.cell.color)};
  cursor: ${(props) => (props.cell.figure ? 'pointer' : 'default')};
`;

const ImgStyle = styled.img`
  position: relative;

  width: 48px;
  height: 48px;
`;

const Available = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background-color: #2ff72f;
`;
