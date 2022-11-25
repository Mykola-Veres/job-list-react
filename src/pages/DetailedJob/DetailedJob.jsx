import { Arrow } from 'assets/Arrow';
import JobDetailed from 'components/JobDetailed';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
// import { FaRegArrowAltCircleLeft } from "react-icons/fa";

// import * as JobDataAPI from "../../services/fetchJobData";
// import toast from 'react-hot-toast';
// import { FaArrowCircleLeft } from 'react-icons/fa';
// import MovieDetails from "../../components/MoviesDetails";
// import Loader from "../../components/Loader";

import { useFetchJobDataAPI } from '../../hooks/useFetchJobDataAPI';
import {
  ReturnToJobBoardConteinerStyled,
  ReturnToJobBoardstyled,
  ReturnToJobBoardTextStyled,
} from './DetailedJob.staled';

export default function JobDetailedPage() {
  // const [loading, setLoading] = useState(false);
  const location = useLocation();
  const { jobId } = useParams();

  const { items, loading } = useFetchJobDataAPI();

  useEffect(() => {
    async function fetchMoviesId() {
      // setLoading(true);
      try {
        //   const fetchMovies = await JobDataAPI.fetchMoviesById(jobId)
        // setMovies(fetchMovies)
      } catch (error) {
        // toast.error("This didn't work. Thumping went wrong! Try again!!!")
      }
      // finally{setLoading(false)}
    }
    fetchMoviesId();
  }, [jobId]);

  return (
    <div>
      {/* {loading && <Loader/>} */}
      {items && <JobDetailed item={items.find(item => item.id === jobId)} />}
      <ReturnToJobBoardConteinerStyled>
        <ReturnToJobBoardstyled
          to={location?.state?.from ?? '/'}
          state={{ from: location }}
        >
          <Arrow />
          <ReturnToJobBoardTextStyled>
            RETURN TO JOB BOARD
          </ReturnToJobBoardTextStyled>
        </ReturnToJobBoardstyled>
      </ReturnToJobBoardConteinerStyled>
    </div>
  );
}
