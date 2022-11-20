import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ListJobStyled = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 29px;
  padding-bottom: 49px;
  margin-left: auto;
  margin-right: auto;
  gap: 8px;
`;

export const TitleJobStyled = styled.h2`
  width: 280px;
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.5625px;
  color: #3a4562;
  @media (min-width: 1400px) {
    width: 712px;
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: -0.625px;
  }
`;

export const ItemJobStyled = styled(NavLink)`
  height: 206px;
  display: flex;
  background: #eff0f5;
  border-radius: 8px;
  transform: scale(1);
  transition: transform 100ms linear;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  :hover,
  :focus {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

export const ImageJobStyled = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
export const ImageJobConteinerStyled = styled.div`
  width: 66px;
  height: 66px;
  margin-top: 45px;
  margin-left: 16px;
  margin-right: 19px;
  margin-bottom: 95px;
  object-fit: contain;
`;

export const JobTextStyled = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  letter-spacing: 0.23619px;
  color: #878d9d;
`;

export const JobDateStyled = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  letter-spacing: 0.206667px;
  color: #878d9d;
`;
