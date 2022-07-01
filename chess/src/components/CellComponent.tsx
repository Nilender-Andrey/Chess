import { FC } from 'react';
import styled from 'styled-components';
import { Cell } from '../models/Cell';

interface CellProps {
  cell: Cell;
}

const CellStyle = styled.div<CellProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 64px;
  height: 64px;

  background-color: ${(props) => props.cell.color};
`;

const ImgStyle = styled.img`
  position: relative;

  width: 48px;
  height: 48px;
`;

const CellComponent: FC<CellProps> = ({ cell }) => {
  return (
    <CellStyle cell={cell}>
      {cell.figure?.logo && <ImgStyle src={cell.figure.logo} alt='' />}
    </CellStyle>
  );
};

export default CellComponent;
