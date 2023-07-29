import CitySearch from './components/CitySearch';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-center text-3xl font-light tracking-wide text-slate-900">
          Weather.
        </h1>
        <CitySearch />
      </div>
    </main>
  );
}
