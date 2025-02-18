import Link from "next/link";

import "../globals.css";

export default function App({
  Component,
  pageProps,
}: {
  Component: React.ComponentType<any>;
  pageProps: Record<string, unknown>;
}) {
  return (
    <main className="container m-auto grid min-h-screen grid-rows-[auto_1fr_auto] gap-8 px-4 font-sans antialiased">
      <header className="text-xl font-bold leading-[4rem]">
        <Link href="/">Next Store</Link>
      </header>
      <Component {...pageProps} />
      <footer className="text-center leading-[4rem] opacity-70">
        Next Store
      </footer>
    </main>
  );
}
