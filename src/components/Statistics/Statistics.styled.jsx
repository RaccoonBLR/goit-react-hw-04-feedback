import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Text = styled.p`
  font-weight: 200;
  font-size: 34px;

  text-align: center;
  width: 166px;
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 8px;
  background-color: lightblue;
  color: white;
  transition: scale 300ms;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), -4px 0 8px -4px rgba(0, 0, 0, 0.4),
    4px 0 4px -4px rgba(0, 0, 0, 0.4), 0 0 6px rgba(0, 0, 0, 0.1) inset;

  :hover {
    scale: 1.04;
  }
`;

export const Value = styled.span`
  font-weight: 600;
  font-size: 36px;

  display: block;
  text-align: center;
  margin-top: 10px;
`;
