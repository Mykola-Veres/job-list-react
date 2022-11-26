import axios from 'axios';

export function fetchJobData() {
  const fetchJobData = axios
    .get(
      `https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu`
    )
    .then(response => response.data);
  return fetchJobData;
}

export function fetchJobListLocation(lat: number, lng: number) {
  const fetchJobData = axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyB8Wu_dFt7tbQ8E0PJcJmpEL2HcPBAqhiA`
    )
    .then(response => response.data.plus_code.compound_code);
  return fetchJobData;
}
