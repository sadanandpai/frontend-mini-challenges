import styled from 'styled-components';

const CellDiv = styled.div`
  background-color: ${(props) => props.backgroundColor ?? '#FFF'};
  cursor: pointer;
  border-radius: 8px;
`;

export default function Cell({ rowIndex, colIndex, backgroundColor }) {
  return (
    <CellDiv
      className="cell"
      data-row-index={rowIndex}
      data-col-index={colIndex}
      backgroundColor={backgroundColor}
    />
  );
}
