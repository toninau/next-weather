import CitySearch from './components/CitySearch';
import SearchHistory from './components/SearchHistory';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-3xl font-light tracking-wide text-slate-900">
          Weather.
        </h1>
        <CitySearch />
      </div>
      <SearchHistory />
    </main>
  );
}
