'use client';
import Link from 'next/link';

import { useWeatherHistoryState } from '@/providers/WeatherHistoryProvider';

function SearchHistory() {
  const weatherHistory = useWeatherHistoryState();

  return (
    <article>
      <h2>Previous searches</h2>
      {weatherHistory.map(weather => (
        <article key={weather.id}>
          <Link href={`/weather/${weather.name.toLowerCase()}`} prefetch={false}>
            <h3>{weather.name}</h3>
          </Link>
          <p>{weather.temperature}</p>
          <p>Sunny</p>
          <footer>
            <p>
              Data from: <time>May 18</time>
            </p>
          </footer>
        </article>
      ))}
    </article>
  );
}

export default SearchHistory;
