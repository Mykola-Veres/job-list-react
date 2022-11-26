import { Navigate, Route, Routes } from 'react-router-dom';
import JobList from '../../pages/JobList';
import JobDetailedPage from 'pages/DetailedJob/DetailedJob';
import { GlobalStyle } from 'common/GlobalStyle';
import Container from 'components/Conteiner/Conteiner';

export default function App() {
  return (
    <Container>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/detailed/:jobId" element={<JobDetailedPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}
