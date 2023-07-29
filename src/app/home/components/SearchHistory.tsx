import Link from 'next/link';

function SearchHistory() {
  return (
    <article>
      <h2>Previous searches</h2>
      <article>
        <Link href={`/weather/helsinki`} prefetch={false}>
          <h3>Helsinki</h3>
        </Link>
        <p>23C</p>
        <p>Sunny</p>
        <footer>
          <p>
            Data from: <time>May 18</time>
          </p>
        </footer>
      </article>
      <article>
        <Link href={`/weather/stockholm`} prefetch={false}>
          <h3>Stockholm</h3>
        </Link>
        <p>23C</p>
        <p>Rain</p>
        <footer>
          <p>
            Data from: <time>May 18</time>
          </p>
        </footer>
      </article>
    </article>
  );
}

export default SearchHistory;
