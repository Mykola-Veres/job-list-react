import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { MapConteinerStyled } from './GoogleMaps.styled';
import { defaultTheme } from './Theme';

const containerStyle = {
  width: '372px',
  height: '436px',
};

const defaultOption = {
  panControl: true,
  zoomControl: true,
  mapTypeControl: true,
  scaleControl: true,
  streetViewControl: true,
  rotateControl: true,
  clickableIcons: true,
  keyBoardShortcuts: true,
  disableDoubleClickZoom: true,
  fullScreenControl: true,
  marker: true,
  styles: defaultTheme,
};

export default function GoogleMaps({ location }) {
  const initialValue = {
    lat: location.lat,
    lng: location.long,
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyB8Wu_dFt7tbQ8E0PJcJmpEL2HcPBAqhiA',
  });

  return (
    <>
      {isLoaded ? (
        <MapConteinerStyled>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={initialValue}
            zoom={10}
            options={defaultOption}
          >
            <Marker
              position={initialValue}
              opacity={1}
              visible={true}
              zIndex={99}
            />
          </GoogleMap>
        </MapConteinerStyled>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}
