// const [searchParams] = useSearchParams(); // returns an array which has current state. Similar to useState
// const mapLat = searchParams.get("lat"); // we need to call a get method on state
// const mapLng = searchParams.get("lng");

import { useSearchParams } from "react-router-dom";

export function useUrlPosition() {
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  console.log(`lat: ${lat} : lng: ${lng}`);
  return [lat, lng];
}
