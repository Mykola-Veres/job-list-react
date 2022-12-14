import { useState } from 'react';
import JobListItem from '../../components/JobListItems';
import { useFetchJobDataAPI } from '../../hooks/useFetchJobDataAPI';
import JobListPagination from 'components/JobListPagination';
import Loader from 'components/Loader';

export default function JobList() {
  const { items, loading } = useFetchJobDataAPI();

  const [curranrJobsPage, setCurranrJobsPage] = useState(1);
  const [jobsPerPage] = useState(7);

  const lastJobsIndex = curranrJobsPage * jobsPerPage;
  const firstJobIndex = lastJobsIndex - jobsPerPage;
  const currentJobList = items.slice(firstJobIndex, lastJobsIndex);

  function paginete(pageNumber: number): void {
    setCurranrJobsPage(pageNumber + 1);
  }

  return (
    <div>
      {loading && <Loader />}
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
