'use client';
import React, { createContext, useCallback, useContext, useState } from 'react';

type WeatherHistory = {
  id: number;
  name: string;
  temperature: number;
};

const WeatherHistoryStateContext = createContext<WeatherHistory[] | undefined>(undefined);

const WeatherHistoryUpdaterContext = createContext<
  React.Dispatch<React.SetStateAction<WeatherHistory[]>> | undefined
>(undefined);

function WeatherHistoryProvider({ children }: { children: React.ReactNode }) {
  // TODO: use useReducer instead
  const [weatherHistory, setWeatherHistory] = useState<WeatherHistory[]>([]);

  return (
    <WeatherHistoryStateContext.Provider value={weatherHistory}>
      <WeatherHistoryUpdaterContext.Provider value={setWeatherHistory}>
        {children}
      </WeatherHistoryUpdaterContext.Provider>
    </WeatherHistoryStateContext.Provider>
  );
}

function useWeatherHistoryState() {
  const weatherHistoryState = useContext(WeatherHistoryStateContext);
  if (typeof weatherHistoryState === 'undefined') {
    throw new Error(
      'useWeatherHistoryState must be used within a WeatherHistoryProvider',
    );
  }
  return weatherHistoryState;
}

function useWeatherHistoryUpdater() {
  const setWeatherHistory = useContext(WeatherHistoryUpdaterContext);
  if (typeof setWeatherHistory === 'undefined') {
    throw new Error(
      'useWeatherHistoryUpdater must be used within a WeatherHistoryProvider',
    );
  }

  const addWeatherHistory = useCallback(
    (weatherHistory: WeatherHistory) => {
      setWeatherHistory(prevWeatherHistory => [
        ...prevWeatherHistory.filter(wh => wh.id !== weatherHistory.id),
        weatherHistory,
      ]);
    },
    [setWeatherHistory],
  );

  return {
    addWeatherHistory,
  };
}

export { WeatherHistoryProvider, useWeatherHistoryState, useWeatherHistoryUpdater };
