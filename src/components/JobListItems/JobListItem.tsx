import { NavLink } from 'react-router-dom';
import { getNumberOfDays } from 'utils/countDay';
import { ImageJobConteinerStyled, ImageJobStyled, ItemJobStyled, JobDateStyled, JobTextStyled, ListJobStyled, TitleJobStyled } from './JobListItem.styled';
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
              <ImageJobConteinerStyled>
                {<ImageJobStyled src={pictures[0]} alt={name} /> || (
                  <ImageJobStyled src="{noImage}" alt="no pictures" />
                )}
              </ImageJobConteinerStyled>

              <div>
                <TitleJobStyled>{title}</TitleJobStyled>
                <div>
                  <JobTextStyled>{name}</JobTextStyled>&#xB7;
                  <JobTextStyled>{email}</JobTextStyled>
                </div>
                <div>
                  <JobTextStyled>{address}</JobTextStyled>
                </div>

                <div>
                  <JobDateStyled>{`Posted ${getNumberOfDays(
                    updatedAt,
                    Date.now()
                  )} days ago`}</JobDateStyled>
                </div>
              </div>
            </ItemJobStyled>
          )
        )}
    </ListJobStyled>
  );
}
