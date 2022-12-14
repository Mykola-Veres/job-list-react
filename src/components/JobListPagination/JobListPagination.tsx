import { ArrowLeft } from 'assets/ArrowLeft';
import { ArrowRight } from 'assets/ArrowRight';
import {
  LeftButtonStyled,
  PaginationConteinerStyled,
  PaginationItemStyled,
  PaginationLinkStyled,
  PaginationListStyled,
  RightButtonStyled,
} from './JobListPagination.styled';

interface Props {
  totalJobs: number;
  jobsPerPage: number;
  paginete: (number: number) => void;
  setCurranrJobsPage: React.Dispatch<React.SetStateAction<number>>;
  curranrJobsPage: number;
}

export default function JobListPagination({
  totalJobs,
  jobsPerPage,
  paginete,
  setCurranrJobsPage,
  curranrJobsPage,
}: Props) {
  const numberPages = [];

  for (let index = 0; index < totalJobs / jobsPerPage; index++) {
    numberPages.push(index);
  }

  function nextPage() {
    if (numberPages.length === curranrJobsPage) {
      return;
    }
    setCurranrJobsPage(prev => prev + 1);
  }

  function prevPage() {
    if (curranrJobsPage === 1) {
      return;
    }
    setCurranrJobsPage(prev => prev - 1);
  }

  return (
    <PaginationConteinerStyled>
      <LeftButtonStyled onClick={prevPage} disabled={false}>
        <ArrowLeft />
      </LeftButtonStyled>
      <PaginationListStyled>
        {totalJobs &&
          numberPages.map(number => (
            <PaginationItemStyled key={number}>
              <PaginationLinkStyled
                to={`/`}
                onClick={() => {
                  paginete(number);
                }}
              >
                {number + 1}
              </PaginationLinkStyled>
            </PaginationItemStyled>
          ))}
      </PaginationListStyled>

      <RightButtonStyled onClick={nextPage} disabled={false}>
        <ArrowRight />
      </RightButtonStyled>
    </PaginationConteinerStyled>
  );
}
