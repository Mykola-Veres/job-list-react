import { Navigate, Route, Routes } from 'react-router-dom';
// import { lazy, Suspense } from 'react';
// import Navigation from '../Navigation';
// import { Toaster } from 'react-hot-toast';
// import { AppStyled } from './App.styled';
// import Loader from '../Loader';
import JobList from '../../pages/JobList';
import JobDetailedPage from 'pages/DetailedJob/DetailedJob';
// import DetailedJob from 'pages/DetailedJob';

// const HomePage = lazy(() => import("../../pages/HomePage"));
// const MoviesPageSearch = lazy(() => import("../../pages/MoviesPage"));
// const MovieDetailsPage = lazy(() => import("../../pages/MovieDetailsPage"));
// const Cast = lazy(() => import("../Cast"));
// const Reviews = lazy(() => import("../Reviews"));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<JobList />} />
      <Route path="/detailed/:jobId" element={<JobDetailedPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
