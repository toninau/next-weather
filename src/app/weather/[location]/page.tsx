import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';

import CurrentWeather from './components/CurrentWeather';
import WeatherHistory from './components/WeatherHistory';

import { findLocations, getCurrentWeather } from './utils';

type PageParams = { location: string };

type MetadataProps = {
  params: PageParams;
};

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const locations = await findLocations(params.location).catch(() => []);
  const city = locations[0]?.name ?? 'Not found';
  // let regionNames = new Intl.DisplayNames(['en'], {type: 'region'});
  // regionNames.of('US');  // "United States"
  return {
    title: `${city} - Weather`,
  };
}

type PageProps = {
  params: PageParams;
};

export default async function Page({ params }: PageProps) {
  const locations = await findLocations(params.location);

  if (!locations?.length) {
    notFound();
  }

  const currentWeather = await getCurrentWeather(locations[0].lat, locations[0].lon);

  return (
    <main>
      <h1 className="mt-1 text-lg font-semibold text-slate-900 dark:sm:text-white md:text-2xl">
        Weather in {locations[0].name}
      </h1>
      <Link href="/home" className="text-red-600">
        Home
      </Link>
      <WeatherHistory weather={currentWeather} />
      <CurrentWeather weather={currentWeather} />
    </main>
  );
}
