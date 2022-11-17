import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function JobListPagination({
  totalJobs,
  jobsPerPage,
  paginete,
  setCurranrJobsPage,
  curranrJobsPage,
}) {
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
    <div>
      <ul>
        {totalJobs &&
          numberPages.map(number => (
            <li key={number}>
              <NavLink
                to={`/`}
                onClick={() => {
                  paginete(number);
                }}
              >
                {number + 1}
              </NavLink>
            </li>
          ))}
      </ul>
      <button onClick={prevPage}>prev page</button>
      <button onClick={nextPage} disabled={false}>
        next page
      </button>
    </div>
  );
}
