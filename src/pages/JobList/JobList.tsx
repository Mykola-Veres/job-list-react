import { useEffect, useState } from "react"
import * as JobDataAPI from "../../services/fetchJobData";
import JobListItem from "../../components/JobListItems"
import {useFetchJobDataAPI} from "../../hooks/useFetchJobDataAPI"
// import MoviesList from "../../components/MoviesList";
// import {TitleStyled} from "./HomePage.styled";
// import Loader from "../../components/Loader";

// const useFetchJobDataAPI = () => {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     async function fetchJobDataAPI () {
//       setLoading(true);
//       try {
//         const items = await JobDataAPI.fetchJobData()
//         setItems(items)
//         console.log(items)
//       }
//       catch (error) {}
//       finally {setLoading(false)}
//     }
//     fetchJobDataAPI()
//   }, [])
// return {items, loading}  }

export default function JobList() {
  const {items, loading} = useFetchJobDataAPI()

  return (
    <div>
      <h1>ghjjjjjjjjjjjjjjjjvn</h1>
      {/* <TitleStyled>Trending today</TitleStyled>
      {loading && <Loader/>}
      {items && <MoviesList items={items}></MoviesList>} */}
      {items && <JobListItem items={items}></JobListItem>}
    </div>
  );
}


// export default function HomePage() {
//   const {items, loading} = useFetchTrendMovies()

//   return(
//     <div>
//       <TitleStyled>Trending today</TitleStyled>
//       {loading && <Loader/>}
//       {items && <MoviesList items={items}></MoviesList>}
//     </div>
//   )
// }
