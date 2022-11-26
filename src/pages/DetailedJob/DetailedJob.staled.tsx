import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ReturnToJobBoardstyled = styled(Link)`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: #3a4562;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ReturnToJobBoardTextStyled = styled.p`
  margin-left: 19px;
`;

export const ReturnToJobBoardConteinerStyled = styled.div`
  width: 212px;
  height: 50px;
  background: #dae0ed;
  border-radius: 8px;
  margin-bottom: 10px;
  transform: scale(1);
  transition: transform 100ms linear;
  :hover,
  :focus {
    transform: scale(1.01);
    cursor: pointer;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;
