import styled from 'styled-components';

interface CellProps {
  readonly color: string;
}

const CellComponent = styled.div<CellProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 64px;
  height: 64px;

  background-color: ${(props) => props.color};
`;

export default CellComponent;
