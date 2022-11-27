import { Watch } from 'react-loader-spinner';
import { LoaderStyle } from './Loader.styled';

const Loader = () => (
  <LoaderStyle>
    <Watch height="100" width="100" color="blue" ariaLabel="loading" />
  </LoaderStyle>
);
export default Loader;
