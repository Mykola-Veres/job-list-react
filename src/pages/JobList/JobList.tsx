import { useEffect, useState } from "react"
import JobListItem from "../../components/JobListItems"
import {useFetchJobDataAPI} from "../../hooks/useFetchJobDataAPI"



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


