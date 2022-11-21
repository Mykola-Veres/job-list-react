import { Bookmarker } from 'assets/Bookmark';
import { Location } from 'assets/Location';
import { Rating } from 'assets/Rating';
import { NavLink } from 'react-router-dom';
import { getNumberOfDays } from 'utils/countDay';
import {
  BookmarkerStyled,
  ConteinerStyled,
  IconConteinerStyled,
  ImageJobConteinerStyled,
  ImageJobStyled,
  ItemJobStyled,
  JobConteinerStyled,
  JobDateConteinerStyled,
  JobDateStyled,
  JobTextStyled,
  ListJobStyled,
  LocationConteinerStyled,
  RatingConreinerStyled,
  TextAddressConteinerStyled,
  TextConteinerStyled,
  TitleJobStyled,
} from './JobListItem.styled';
// import { useLocation } from "react-router-dom";
// import noFilm from '../../images/noFilm.jpg';

type Item = {
  address: string;
  benefits: Array<string>;
  createdAt: string;
  description: string;
  email: string;
  employment_type: Array<string>;
  id: string;
  location: object;
  name: string;
  phone: string;
  pictures: Array<string>;
  salary: string;
  title: string;
  updatedAt: string;
};

interface Props {
  items: Item[];
}

export default function JobListItem({ items }: Props) {
  return (
    <ListJobStyled>
      {items &&
        items.map(
          ({
            id,
            address,
            email,
            name,
            updatedAt,
            phone,
            salary,
            title,
            createdAt,
            location,
            pictures,
          }) => (
            <ItemJobStyled to={`/detailed/${id}`} key={id}>
              <JobConteinerStyled>
                <ImageJobConteinerStyled>
                  {<ImageJobStyled src={pictures[0]} alt={name} /> || (
                    <ImageJobStyled src="{noImage}" alt="no pictures" />
                  )}
                </ImageJobConteinerStyled>

                <ConteinerStyled>
                  <div>
                    <TitleJobStyled>{title}</TitleJobStyled>
                    <TextConteinerStyled>
                      <JobTextStyled>{name}</JobTextStyled>

                      <JobTextStyled>
                        {', '} {email}
                      </JobTextStyled>
                    </TextConteinerStyled>
                    <LocationConteinerStyled>
                      <Location />
                      <TextAddressConteinerStyled>
                        <JobTextStyled>{address}</JobTextStyled>
                      </TextAddressConteinerStyled>
                    </LocationConteinerStyled>
                  </div>

                  <IconConteinerStyled>
                    <div>
                      <BookmarkerStyled>
                        <Bookmarker />
                      </BookmarkerStyled>
                      <RatingConreinerStyled>
                        <Rating />
                      </RatingConreinerStyled>
                    </div>
                    <JobDateConteinerStyled>
                      <JobDateStyled>{`Posted ${getNumberOfDays(
                        updatedAt,
                        Date.now()
                      )} days ago`}</JobDateStyled>
                    </JobDateConteinerStyled>
                  </IconConteinerStyled>
                </ConteinerStyled>
              </JobConteinerStyled>
            </ItemJobStyled>
          )
        )}
    </ListJobStyled>
  );
}
