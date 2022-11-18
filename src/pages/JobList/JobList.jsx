import { useEffect, useState } from 'react';
import JobListItem from '../../components/JobListItems';
import { useFetchJobDataAPI } from '../../hooks/useFetchJobDataAPI';
import JobListPagination from 'components/JobListPagination';

export default function JobList() {
  const { items, loading } = useFetchJobDataAPI();

  const [curranrJobsPage, setCurranrJobsPage] = useState(1);
  const [jobsPerPage] = useState(7);

  const lastJobsIndex = curranrJobsPage * jobsPerPage;
  const firstJobIndex = lastJobsIndex - jobsPerPage;
  const currentJobList = items.slice(firstJobIndex, lastJobsIndex);

  function paginete(pageNumber) {
    setCurranrJobsPage(pageNumber + 1);
  }

  return (
    <div>
      <h1>ghjjjjjjjjjjjjjjjjvn</h1>
      {/* <TitleStyled>Trending today</TitleStyled>
      {loading && <Loader/>}
      */}
      {items && (
        <>
          <JobListItem items={currentJobList}></JobListItem>
          <JobListPagination
            totalJobs={items.length}
            jobsPerPage={jobsPerPage}
            paginete={paginete}
            setCurranrJobsPage={setCurranrJobsPage}
            curranrJobsPage={curranrJobsPage}
          ></JobListPagination>
        </>
      )}
    </div>
  );
}
