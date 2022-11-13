import { NavLink } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import {ListMoviesStyled, ItemMoviesStyled, ImageFilmStyled, MovieTextStyled} from "./JobListItem.styled";
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
}

interface Props {
  items: Item[]
}

export default function JobListItem({items}: Props) {
  // const location = useLocation();

    return(
    <ul>
      {items && items.map(({id, address, description, email, name, phone, salary, title, createdAt }) =>
        <NavLink
          // state={{from: location}}
          to={`/detailed/${id}`}
          key={id}>
            {address ? (
          <img
            // src={`https://image.tmdb.org/t/p/w300${backdrop_path}`}
            alt="ImageFilm"
          />
        ) : (
          <img src="{noFilm}" alt="no Film" />
        )}
          <p>{title ?? name ?? name}</p>
          <p>{new Date(createdAt).toLocaleDateString()}</p>
        </NavLink>)}
    </ul>
    )}
