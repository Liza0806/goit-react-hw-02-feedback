import { styled } from 'styled-components';

export const OptionButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
  margin: 5px

  &:hover {
    background-color: #0056b3;
  }
`;