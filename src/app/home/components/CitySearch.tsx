'use client';
import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';

function CitySearch() {
  const [input, setInput] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.length < 1) {
      return;
    }
    router.push(`/weather/${input}`);
  };

  return (
    <form role="search" className="relative mt-4 flex gap-2" onSubmit={handleSubmit}>
      <div className="group">
        <input
          aria-label="Search forecast by city"
          placeholder="Search forecast by city..."
          className="w-full appearance-none border-b border-slate-900 px-2 py-2 text-sm leading-6 text-slate-900 placeholder-slate-400 focus:outline-none"
          type="search"
          id="city-search"
          value={input}
          onChange={event => setInput(event.target.value)}
        />
        <div className="m-auto h-px w-0 bg-slate-900 transition-[width] delay-75 duration-300 ease-in-out group-focus-within:w-full group-focus-within:transition-all group-hover:w-full group-hover:transition-all"></div>
      </div>
      <button
        className="mb-0.5 rounded-xl px-4 py-2 text-slate-900 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 active:bg-slate-100"
        type="submit"
      >
        <MagnifyingGlassIcon className="h-5 w-5 fill-current" />
      </button>
    </form>
  );
}

export default CitySearch;
