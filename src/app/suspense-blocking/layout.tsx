import Link from "next/link";
import {Suspense} from "react";

export default async function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <Suspense>
      <html lang="en">
        <body className="container m-auto grid min-h-screen grid-rows-[auto_1fr_auto] gap-8 px-4 font-sans antialiased">
          <header className="text-xl leading-[4rem] font-bold">
            <Link href="/">Next Store</Link>
          </header>
          {children}
          <footer className="text-center leading-[4rem] opacity-70">Next Store</footer>
        </body>
      </html>
    </Suspense>
  );
}
