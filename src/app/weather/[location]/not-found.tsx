import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <p>City not found</p>
      <Link href="/home">return to previous page</Link>
    </div>
  );
}
