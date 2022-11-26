import styled from 'styled-components';

export const MapSectionConteinerStyled = styled.section`
  @media (min-width: 1400px) {
    margin-left: 82px;
  }
`;

export const MapConteinerStyled = styled.div`
  border-radius: 8px;
  height: 436px;
  @media (min-width: 1400px) {
    width: 402px;
  }
`;

export const ContactsStyled = styled.h3`
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.413333px;
  color: #3a4562;
  margin-bottom: 32px;
  @media (min-width: 1400px) {
    display: none;
  }
`;

export const InfoWindowStyled = styled.div`
  background-color: #3a4564;
  border-radius: 8px;
  border-color: #3a4564;
  padding: 15px;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
