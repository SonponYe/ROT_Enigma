import Link from "next/link";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col px-4 py-8">
      <main className="mx-auto flex w-full max-w-xl flex-1 flex-col items-center justify-center text-center">
        <h1 className="mb-8 text-3xl font-bold">ROT_Enigma</h1>
        <nav className="flex gap-4">
          <Link
            href="/normal"
            className="flex h-32 w-36 items-center justify-center rounded-md border border-foreground/30 text-lg font-semibold hover:bg-foreground/5"
          >
            Normal
          </Link>
          <Link
            href="/enigma"
            className="flex h-32 w-36 items-center justify-center rounded-md border border-foreground/30 text-lg font-semibold hover:bg-foreground/5"
          >
            Enigma
          </Link>
        </nav>
      </main>
      <Footer />
    </div>
  );
}
