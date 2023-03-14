import styled from 'styled-components';

export const OptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const OptionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;

  padding: 10px 28px;
  transition: color 240ms, background-color 240ms;
  border: none;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 2px 3px rgba(0, 0, 0, 0.2);

  :hover,
  :focus,
  :active {
    color: white;
    background-color: lightblue;
  }
`;
