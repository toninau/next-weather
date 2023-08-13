'use client';
import { useEffect } from 'react';
import { Weather } from '../utils';
import {
  useWeatherHistoryState,
  useWeatherHistoryUpdater,
} from '@/providers/WeatherHistoryProvider';

type WeatherHistoryProps = {
  weather: Weather;
};

function WeatherHistory({ weather }: WeatherHistoryProps) {
  const { addWeatherHistory } = useWeatherHistoryUpdater();
  const weatherHistory = useWeatherHistoryState();

  useEffect(() => {
    addWeatherHistory({
      id: weather.id,
      name: weather.name,
      temperature: weather.main.temp,
    });
  }, [weather, addWeatherHistory]);

  const weatherHistoryWithoutCurrent = weatherHistory.filter(wh => wh.id !== weather.id);

  return (
    <div>
      <h2>Weather History</h2>
      <div>
        {weatherHistoryWithoutCurrent.map(weather => (
          <div key={weather.id}>
            <p>{weather.name}</p>
            <p>{weather.temperature}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherHistory;
