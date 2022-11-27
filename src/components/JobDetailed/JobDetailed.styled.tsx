import styled from 'styled-components';

export const MainConteinerStyled = styled.div`
  padding-top: 24px;
  padding-bottom: 37px;
  padding-left: 15px;
  padding-right: 15px;
  @media (min-width: 1400px) {
    display: flex;
    padding-top: 56px;
    padding-bottom: 97px;
  }
`;
export const ArticleConteinerStyled = styled.article`
  padding-bottom: 135px;
  @media (min-width: 1400px) {
    position: relative;
    padding-bottom: 86px;
  }
`;
export const HeaderConteinerStyled = styled.header`
  padding-bottom: 32px;
  @media (min-width: 1400px) {
    display: flex;
    padding-bottom: 39px;
  }
`;
export const TitleStyled = styled.h2`
  margin-bottom: 37px;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.413333px;
  color: #3a4562;
  @media (min-width: 1400px) {
    margin-bottom: 0;
  }
`;

export const NavLinksConteinerStyled = styled.div`
  display: flex;
  margin-left: auto;
`;
export const NavLinksStyled = styled.a`
  display: flex;
  cursor: pointer;
  :not(:last-child) {
    margin-right: 36px;
  }
`;
export const NavLinksTextStyled = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -0.5px;
  color: rgba(56, 65, 93, 0.82);
  margin-left: 10px;
  @media (min-width: 1400px) {
    padding-top: 5px;
    align-items: baseline;
    font-family: 'Roboto';
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.5625px;
    color: #3a4562;
    font-stretch: 100;
  }
`;
export const TitleTextStyled = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: -0.75px;
  color: #3a4562;
  margin-bottom: 5px;
  @media (min-width: 1400px) {
    width: 501px;
  }
`;

export const PayConteinerStyled = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 14px;
`;
export const SalaryConteinerStyled = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  @media (min-width: 1400px) {
    flex-direction: column;
    position: absolute;
    top: -20px;
    right: 0;
    transform: translateY(50%);
  }
`;

export const DateConteinerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;
`;
export const DateTextStyled = styled.p`
  font-weight: 300;
  font-size: 13px;
  line-height: 25px;
  letter-spacing: 0.191905px;
  color: rgba(56, 65, 93, 0.602109);
`;
export const SalaryTextStyled = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: -0.625px;
  color: #3a4562;
`;
export const PayTextStyled = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.5625px;
  color: rgba(56, 65, 93, 0.82);
`;
export const TextStyled = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.5625px;
  color: rgba(56, 65, 93, 0.82);
  margin-bottom: 40px;
`;

export const TextBenefitsStyled = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.5625px;
  color: rgba(56, 65, 93, 0.82);
`;
export const SubTitleTextStyled = styled.h4`
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: -0.625px;
  color: #3a4562;
  margin-bottom: 10px;
`;

export const ItemTextStyled = styled.li`
  display: flex;
`;
export const ItemDecorationStyled = styled.div`
  width: 9px;
  height: 9px;
  margin-right: 15px;
  margin-top: 2px;
`;

export const DecorationConteinerStyled = styled.div`
  margin-bottom: 25px;
`;
export const ButtonStyled = styled.button`
  width: 127px;
  height: 52px;
  background: #384564;
  border-radius: 8px;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
`;
export const ButtonConteinerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 1400px) {
    justify-content: start;
    align-items: flex-start;
  }
`;

export const ButtonConteinerDescktopStyled = styled.div`
  display: none;
  @media (min-width: 1400px) {
    display: flex;
    align-items: flex-start;
    padding-bottom: 32px;
  }
`;

export const SectionImgConteinerStyled = styled.section`
  padding-bottom: 63px;
  @media (min-width: 1400px) {
    padding-bottom: 0;
  }
`;
export const ImgTitleStyled = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.413333px;
  color: #3a4562;
  margin-bottom: 31px;
`;

export const ImgListStyled = styled.ul`
  display: flex;
  gap: 5px;
  @media (min-width: 1400px) {
    gap: 10px;
  }
`;
export const ImgItemStyled = styled.li`
  width: 160px;
  height: 115px;
  @media (min-width: 1400px) {
    width: 210px;
  }
`;
export const ImgStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const TitleInfoStyled = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.413333px;
  color: #3a4562;
  margin-bottom: 15px;
`;

export const EmploymentTypeStyled = styled.h3`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.5625px;
  color: rgba(56, 65, 93, 0.82);
  margin-bottom: 10px;
  @media (min-width: 1400px) {
    font-family: 'Roboto';
  }
`;

export const EmploymentTypeListStyled = styled.ul`
  display: flex;
  gap: 8px;
  margin-bottom: 22px;
`;

export const EmploymentTypeItemStyled = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 121px;
  background: rgba(161, 177, 219, 0.317343);
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  @media (min-width: 1400px) {
    width: 220px;
  }
`;

export const EmploymentTypeTextStyled = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: -0.457143px;
  color: #55699e;
`;

export const BenefitsStyled = styled.h3`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.5625px;
  color: rgba(56, 65, 93, 0.82);
  margin-bottom: 10px;
  @media (min-width: 1400px) {
    font-family: 'Roboto';
  }
`;

export const BenefitsListStyled = styled.ul`
  display: flex;
  gap: 5px;
  margin-bottom: 63px;
`;

export const BenefitsItemStyled = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 130px;
  background: rgba(255, 207, 0, 0.15);
  border: 1px solid #ffcf00;
  border-radius: 8px;
  @media (min-width: 1400px) {
    width: 220px;
  }
`;

export const BenefitsTextStyled = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: -0.4px;
  color: #988b49;
`;

export const SectionImgInfoPositionStyled = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1400px) {
    flex-direction: column-reverse;
  }
`;
