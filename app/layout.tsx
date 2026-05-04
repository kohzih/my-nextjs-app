import './globals.css';
import { NavMenu } from '@/components/NavMenu';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <div className="layout">
          <aside className="sidebar">
            <h2>my-nextjs-app</h2>
            <NavMenu />
          </aside>
          <main className="main">{children}</main>
        </div>
      </body>
    </html>
  );
}
