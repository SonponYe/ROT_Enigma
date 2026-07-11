import Link from "next/link";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-xl flex-col px-4 py-8">
      <h1 className="text-3xl font-bold">ROT_Enigma</h1>
      <p className="mb-6 opacity-70">
        Experiment with ROT (rotation) ciphers. Pick a flow:
      </p>
      <nav className="flex flex-col gap-3">
        <Link
          href="/normal"
          className="rounded-md border border-foreground/30 px-4 py-3 hover:bg-foreground/5"
        >
          <span className="font-semibold">Normal</span> — standard ROT-N cipher
          with a selectable rotation value
        </Link>
        <Link
          href="/enigma"
          className="rounded-md border border-foreground/30 px-4 py-3 hover:bg-foreground/5"
        >
          <span className="font-semibold">Enigma</span> — personal Enigma-style
          algorithm
        </Link>
      </nav>
      <Footer />
    </div>
  );
}
