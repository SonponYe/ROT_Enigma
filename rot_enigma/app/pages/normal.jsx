"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "../components/button";
import InputField from "../components/input";
import OutputField from "../components/output";
import RotSelector from "../components/rot_selector";
import Footer from "../components/footer";

// ROT5 rotates digits, ROT13 rotates letters, ROT47 rotates printable ASCII.
// All three are self-inverse, so the same button encrypts and decrypts.
function applyRot(text, rot) {
  switch (rot) {
    case 5:
      return text.replace(/[0-9]/g, (c) =>
        String.fromCharCode(((c.charCodeAt(0) - 48 + 5) % 10) + 48)
      );
    case 47:
      return text.replace(/[!-~]/g, (c) =>
        String.fromCharCode(((c.charCodeAt(0) - 33 + 47) % 94) + 33)
      );
    default:
      return text.replace(/[a-zA-Z]/g, (c) => {
        const base = c <= "Z" ? 65 : 97;
        return String.fromCharCode(((c.charCodeAt(0) - base + rot) % 26) + base);
      });
  }
}

function Normal() {
  const [text, setText] = useState("");
  const [rot, setRot] = useState(13);
  const [output, setOutput] = useState("");

  return (
    <div className="normal-page flex min-h-screen flex-col px-4 py-8">
      <main className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold">ROT_Enigma</h1>
          <p className="opacity-70">Standard ROT-N cipher</p>
        </div>
        <InputField value={text} onChange={setText} />
        <RotSelector value={rot} onChange={setRot} />
        <Button
          label="Encrypt / Decrypt"
          onClick={() => setOutput(applyRot(text, rot))}
        />
        <OutputField value={output} />
        <Link
          href="/"
          className="mt-6 text-center text-sm opacity-70 hover:opacity-100"
        >
          &larr; Back to home
        </Link>
      </main>
      <Footer />
    </div>
  );
}

export default Normal;
