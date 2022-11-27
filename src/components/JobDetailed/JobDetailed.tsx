import GoogleMaps from '../GoogleMaps/GoogleMaps';
import { getNumberOfDays } from 'utils/countDay';
import { Bookmarker } from 'assets/Bookmark';
import { Share } from 'assets/Share';
import {
  ArticleConteinerStyled,
  BenefitsItemStyled,
  BenefitsListStyled,
  BenefitsStyled,
  BenefitsTextStyled,
  ButtonConteinerDescktopStyled,
  ButtonConteinerStyled,
  ButtonStyled,
  DateConteinerStyled,
  DateTextStyled,
  DecorationConteinerStyled,
  EmploymentTypeItemStyled,
  EmploymentTypeListStyled,
  EmploymentTypeStyled,
  EmploymentTypeTextStyled,
  HeaderConteinerStyled,
  ImgItemStyled,
  ImgListStyled,
  ImgStyled,
  ImgTitleStyled,
  ItemDecorationStyled,
  ItemTextStyled,
  MainConteinerStyled,
  NavLinksConteinerStyled,
  NavLinksStyled,
  NavLinksTextStyled,
  PayConteinerStyled,
  PayTextStyled,
  SalaryConteinerStyled,
  SalaryTextStyled,
  SectionImgConteinerStyled,
  SectionImgInfoPositionStyled,
  SubTitleTextStyled,
  TextBenefitsStyled,
  TextStyled,
  TitleInfoStyled,
  TitleStyled,
  TitleTextStyled,
} from './JobDetailed.styled';
import { Bullet } from 'assets/Bullet';

interface Props {
  item: {
    address: string;
    benefits: Array<string>;
    createdAt: string;
    description: string;
    email: string;
    employment_type: Array<string>;
    id: string;
    location: { lat: number; long: number };
    name: string;
    phone: string;
    pictures: Array<string>;
    salary: string;
    title: string;
    updatedAt: string;
  };
}

export default function JobDetailed({ item }: Props) {
  function DescriptionSplit(): string[] {
    if (item) {
      const res = /\n/;
      const descriptionList = item.description.split(res);
      return descriptionList;
    }
    return [];
  }

  function DescriptionBenefits(): string[] {
    if (item) {
      const res = /\t/;
      const benefitsList = item.description.split(res);
      const benefitsListItem = benefitsList[1].split('.');
      return benefitsListItem.slice(0, benefitsListItem.length - 1);
    }
    return [];
  }
  return (
    <MainConteinerStyled>
      <div>
        <HeaderConteinerStyled>
          <TitleStyled>Job Details</TitleStyled>
          <NavLinksConteinerStyled>
            <NavLinksStyled href="*">
              <Bookmarker />{' '}
              <NavLinksTextStyled>Save to my list</NavLinksTextStyled>
            </NavLinksStyled>

            <NavLinksStyled href="*">
              <Share />
              <NavLinksTextStyled>Share</NavLinksTextStyled>
            </NavLinksStyled>
          </NavLinksConteinerStyled>
        </HeaderConteinerStyled>
        <ButtonConteinerDescktopStyled>
          <ButtonStyled>Apply now</ButtonStyled>
        </ButtonConteinerDescktopStyled>

        {item && (
          <>
            <ArticleConteinerStyled>
              <TitleTextStyled>{item.title}</TitleTextStyled>
              <PayConteinerStyled>
                <SalaryConteinerStyled>
                  <SalaryTextStyled>{item.salary}</SalaryTextStyled>
                  <PayTextStyled>Brutto, per year</PayTextStyled>
                </SalaryConteinerStyled>
                <DateConteinerStyled>
                  <DateTextStyled>
                    {`Posted ${getNumberOfDays(
                      item.updatedAt,
                      Date.now()
                    )} days ago`}
                  </DateTextStyled>
                </DateConteinerStyled>
              </PayConteinerStyled>

              <DecorationConteinerStyled>
                <TextStyled>{DescriptionSplit()[1]}</TextStyled>
                <SubTitleTextStyled>{DescriptionSplit()[3]}</SubTitleTextStyled>
                <TextStyled>{DescriptionSplit()[4]}</TextStyled>
                <SubTitleTextStyled>{DescriptionSplit()[6]}</SubTitleTextStyled>

                <ul>
                  {DescriptionBenefits().map((items, index) => (
                    <ItemTextStyled key={index}>
                      <ItemDecorationStyled>
                        <Bullet></Bullet>
                      </ItemDecorationStyled>
                      <TextBenefitsStyled>{items}</TextBenefitsStyled>
                    </ItemTextStyled>
                  ))}
                </ul>
              </DecorationConteinerStyled>
              <ButtonConteinerStyled>
                <ButtonStyled>Apply now</ButtonStyled>
              </ButtonConteinerStyled>
            </ArticleConteinerStyled>
            <SectionImgInfoPositionStyled>
              <SectionImgConteinerStyled>
                <ImgTitleStyled>Attached images</ImgTitleStyled>
                <ImgListStyled>
                  {item.pictures.map((img, index) => (
                    <ImgItemStyled key={index}>
                      {(
                        <ImgStyled src={img} alt={`pictures ${item.name}`} />
                      ) || <ImgStyled src="{noImage}" alt="no pictures" />}
                    </ImgItemStyled>
                  ))}
                </ImgListStyled>
              </SectionImgConteinerStyled>
              <section>
                <TitleInfoStyled>Additional info</TitleInfoStyled>
                <EmploymentTypeStyled>Employment type</EmploymentTypeStyled>
                <EmploymentTypeListStyled>
                  {item.employment_type.map((employee, index) => (
                    <EmploymentTypeItemStyled key={index}>
                      <EmploymentTypeTextStyled>
                        {employee}
                      </EmploymentTypeTextStyled>
                    </EmploymentTypeItemStyled>
                  ))}
                </EmploymentTypeListStyled>
                <BenefitsStyled>Benefits</BenefitsStyled>
                <BenefitsListStyled>
                  {item.benefits.map((benefits, index) => (
                    <BenefitsItemStyled key={index}>
                      <BenefitsTextStyled>{benefits}</BenefitsTextStyled>
                    </BenefitsItemStyled>
                  ))}
                </BenefitsListStyled>
              </section>
            </SectionImgInfoPositionStyled>
          </>
        )}
      </div>
      {item && (
        <GoogleMaps
          location={item.location}
          email={item.email}
          phone={item.phone}
        />
      )}
    </MainConteinerStyled>
  );
}
