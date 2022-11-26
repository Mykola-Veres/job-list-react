import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const PaginationConteinerStyled = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 396px;
  height: 40px;
  background: #ffffff;
  box-shadow: 2px 1px 7px rgba(0, 0, 0, 0.08),
    0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12);
  border-radius: 10.4px;
  margin-bottom: 66px;
  @media (min-width: 1400px) {
    width: 515px;
    height: 52px;
  }
`;

export const PaginationListStyled = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PaginationItemStyled = styled.li`
  width: 31px;
  height: 31px;
`;

export const PaginationLinkStyled = styled(NavLink)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 20.8px;
  line-height: 25px;
  letter-spacing: 1.73333px;
  transform: scale(1);
  color: #70778b;
  :hover,
  :focus {
    color: #5876c5;
    transform: scale(1.01);
    cursor: pointer;
    border-bottom: 2px solid;
  }
`;

export const LeftButtonStyled = styled.button`
  width: 80px;
  height: 35px;
  background: #ffffff;
  border-width: 0px;
  border-right: 1.3px solid #dee3ef;
  margin-right: auto;
  cursor: pointer;
  :hover,
  :focus {
    transform: scale(1.03);
    border-left: 2px solid #dee3ef;
  }
`;

export const RightButtonStyled = styled.button`
  width: 80px;
  height: 35px;
  background: #ffffff;
  border-width: 0px;
  border-left: 1.3px solid #dee3ef;
  margin-left: auto;
  cursor: pointer;
  :hover,
  :focus {
    transform: scale(1.03);
    border-left: 2px solid #dee3ef;
  }
`;
