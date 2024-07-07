import { useState, useEffect } from "react";

interface IPoint {
  longitude: number;
  latitude: number;
}

function getRandomLongitude() {
  // Generate a random longitude within the range of Iraq
  const minLongitude = 38.7942;
  const maxLongitude = 48.5758;
  return Math.random() * (maxLongitude - minLongitude) + minLongitude;
}

function getRandomLatitude() {
  // Generate a random latitude within the range of Iraq
  const minLatitude = 29.0616;
  const maxLatitude = 37.3847;
  return Math.random() * (maxLatitude - minLatitude) + minLatitude;
}
const useGetPoints = () => {
  const [points, setPoints] = useState<IPoint[] | undefined>(undefined);

  useEffect(() => {
    const points = [
      { longitude: getRandomLongitude(), latitude: getRandomLatitude() },
      { longitude: getRandomLongitude(), latitude: getRandomLatitude() },
      { longitude: getRandomLongitude(), latitude: getRandomLatitude() },
      { longitude: getRandomLongitude(), latitude: getRandomLatitude() },
      { longitude: getRandomLongitude(), latitude: getRandomLatitude() },
      { longitude: getRandomLongitude(), latitude: getRandomLatitude() },
      // Add more points as needed
    ];

    setPoints(points);
  }, []);

  return { points };
};

export default useGetPoints;
