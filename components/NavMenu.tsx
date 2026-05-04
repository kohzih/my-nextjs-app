import Link from 'next/link';

export function NavMenu() {
  return (
    <nav className="nav">
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/counter">Counter</Link></li>
        <li><Link href="/fetch-data">Fetch data</Link></li>
      </ul>
    </nav>
  );
}
