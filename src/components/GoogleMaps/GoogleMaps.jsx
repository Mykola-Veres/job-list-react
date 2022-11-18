import {
  GoogleMap,
  InfoBox,
  InfoWindow,
  MarkerF,
  useJsApiLoader,
} from '@react-google-maps/api';
import { MapConteinerStyled } from './GoogleMaps.styled';
import { defaultTheme } from './Theme';
import { useEffect, useState } from 'react';
import * as JobDataAPI from '../../services/fetchJobData';

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
  const [locations, setLocations] = useState('');
  const initialValue = {
    lat: location.lat,
    lng: location.long,
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyB8Wu_dFt7tbQ8E0PJcJmpEL2HcPBAqhiA',
  });

  useEffect(() => {
    async function fetchJobDataAPI() {
      try {
        const decode = await JobDataAPI.fetchJobListLocation(
          location.lat,
          location.long
        );
        setLocations(decode);
        console.log('decode', decode);
      } catch (error) {}
    }
    fetchJobDataAPI();
  }, [location.lat, location.long]);

  console.log('locations', locations);

  return (
    <>
      {isLoaded ? (
        <MapConteinerStyled>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={initialValue}
            zoom={10}
            options={defaultOption}
            tilt={1}
          >
            <InfoBox position={initialValue}>
              <div
                style={{
                  backgroundColor: 'yellow',
                  opacity: 0.75,
                  padding: 12,
                }}
              >
                <div style={{ fontSize: 16, fontColor: `#08233B` }}>
                  Hello, World!
                </div>
              </div>
            </InfoBox>
            <InfoWindow position={initialValue}>
              <div>
                <h2>{locations}</h2>
              </div>
            </InfoWindow>
            <>
              <MarkerF
                position={initialValue}
                opacity={1}
                visible={true}
                zIndex={99}
              />
            </>
          </GoogleMap>
        </MapConteinerStyled>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}
