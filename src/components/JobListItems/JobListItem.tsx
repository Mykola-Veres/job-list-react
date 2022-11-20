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

    return(
    <ul>
      {items && items.map(({id, address, email, name,updatedAt, phone, salary, title, createdAt, location, pictures }) =>
        <NavLink
          to={`/detailed/${id}`}
          key={id}>
            {<img src={pictures[0]} alt={name}/> || (
          <img src="{noImage}" alt="no pictures" />
        )}
        <h2>{title}</h2>
          <p>{name}</p>
          <p>{email}</p>
          <p>{new Date(createdAt).toLocaleDateString()}</p>
          <p>{new Date(updatedAt).toLocaleDateString()}</p>
          <p>{address}</p>
        </NavLink>)}
    </ul>
    )}
