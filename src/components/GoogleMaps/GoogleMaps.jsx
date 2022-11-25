import {
  GoogleMap,
  InfoWindow,
  MarkerF,
  useJsApiLoader,
} from '@react-google-maps/api';
import {
  ContactsStyled,
  InfoWindowStyled,
  MapConteinerStyled,
  MapSectionConteinerStyled,
} from './GoogleMaps.styled';
import { defaultTheme } from './Theme';
import { useEffect, useState } from 'react';
import * as JobDataAPI from '../../services/fetchJobData';

const containerStyle = {
  borderRadius: '8px',
  width: '100%',
  height: '100%',
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

export default function GoogleMaps({ location, email, phone }) {
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
    <MapSectionConteinerStyled>
      <ContactsStyled>Contacts</ContactsStyled>
      <div>
        {isLoaded ? (
          <MapConteinerStyled>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={initialValue}
              zoom={10}
              options={defaultOption}
              tilt={1}
            >
              <InfoWindow position={initialValue}>
                <InfoWindowStyled>
                  <h3>{locations || 'locations Not found'}</h3>
                  <p>{email}</p>
                  <p>{phone}</p>
                </InfoWindowStyled>
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
      </div>
    </MapSectionConteinerStyled>
  );
}
