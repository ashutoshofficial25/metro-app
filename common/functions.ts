import { MetroStations } from '@/constants/data';

export function getMetroStations(cityId: number) {
  const metroStations = MetroStations.filter(
    (station) => station.cityId === cityId
  );

  return metroStations;
}
