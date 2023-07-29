import { Weather } from '../utils';

type CurrentWeatherProps = {
  weather: Weather;
};

function CurrentWeather({ weather }: CurrentWeatherProps) {
  return (
    <section>
      <h2 className="text-md mt-1 font-semibold text-slate-900 dark:sm:text-white md:text-xl">
        Current weather
      </h2>
      <dl>
        <div>
          <dt>Temperature</dt>
          <dd>{weather.main.temp}</dd>
        </div>
        <div>
          <dt>Min / Max</dt>
          <dd>
            {weather.main.temp_max} / {weather.main.temp_min}
          </dd>
        </div>
      </dl>
      <p>{JSON.stringify(weather)}</p>
    </section>
  );
}

export default CurrentWeather;
