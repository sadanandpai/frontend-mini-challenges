import styled from 'styled-components';

export const Button = styled.button`
  padding: 5px 25px;
  background-color: black;
  color: white;
  border-radius: 0.5rem;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;
  font-size: ${(props) => (props.large ? '1.5rem' : '1rem')};
`;

export const FlexColumnCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FlexRowCenter = styled.div`
  display: flex;
  align-items: center;
`;
