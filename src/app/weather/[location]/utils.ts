import { z } from 'zod';
import envVariables from '@/config';

const locationSchema = z.object({
  name: z.string(),
  lat: z.number(),
  lon: z.number(),
});

export type Location = z.infer<typeof locationSchema>;

export async function findLocations(city: string): Promise<Location[]> {
  // By default, fetch will automatically fetch and cache data INDEFINITELY.
  // https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#static-data-fetching
  const locationRes = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${envVariables.WEATHER_API_KEY}`,
  );

  if (!locationRes.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const locationData = await locationRes.json();
  return locationSchema.array().parse(locationData);
}

const weatherSchema = z.object({
  weather: z
    .object({
      id: z.number(),
      main: z.string(),
      description: z.string(),
      icon: z.string(),
    })
    .array(),
  main: z.object({
    temp: z.number(),
    feels_like: z.number(),
    temp_min: z.number(),
    temp_max: z.number(),
    pressure: z.number(),
    humidity: z.number(),
  }),
  visibility: z.number(),
  wind: z.object({
    speed: z.number(),
    deg: z.number(),
    gust: z.number().optional(),
  }),
  clouds: z.object({
    all: z.number(), // Cloudiness, %
  }),
  rain: z
    .object({
      '1h': z.number().optional(),
      '3h': z.number().optional(),
    })
    .optional(),
  snow: z
    .object({
      '1h': z.number().optional(),
      '3h': z.number().optional(),
    })
    .optional(),
  dt: z.number(), // Time of data calculation, unix, UTC
  sys: z.object({
    type: z.number(),
    id: z.number(),
    sunrise: z.number(), // Sunrise time, unix, UTC
    sunset: z.number(), // Sunset time, unix, UTC
  }),
  timezone: z.number(), // Shift in seconds from UTC
  name: z.string(),
  id: z.number(),
});

export type Weather = z.infer<typeof weatherSchema>;

export async function getCurrentWeather(lat: number, lon: number): Promise<Weather> {
  const params = new URLSearchParams({
    lat: lat.toString(),
    lon: lon.toString(),
    appid: envVariables.WEATHER_API_KEY,
  });

  // revalidate this data every 15 minutes at most
  const weatherRes = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?${params}`,
    { next: { revalidate: 900 } },
  );

  if (!weatherRes.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const weatherData = await weatherRes.json();
  return weatherSchema.parse(weatherData);
}
