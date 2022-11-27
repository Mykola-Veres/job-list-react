import { Arrow } from 'assets/Arrow';
import JobDetailed from 'components/JobDetailed';
import Loader from 'components/Loader';
import { useLocation, useParams } from 'react-router-dom';
import { useFetchJobDataAPI } from '../../hooks/useFetchJobDataAPI';
import {
  ReturnToJobBoardConteinerStyled,
  ReturnToJobBoardstyled,
  ReturnToJobBoardTextStyled,
} from './DetailedJob.staled';

export default function JobDetailedPage() {
  const location = useLocation();
  const { jobId } = useParams();
  const { items, loading } = useFetchJobDataAPI();

  return (
    <div>
      {loading && <Loader />}
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
