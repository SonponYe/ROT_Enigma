"use client";

import { useState } from "react";
import Button from "../components/button";
import InputField from "../components/input";
import OutputField from "../components/output";
import Footer from "../components/footer";

// Enigma-style rotor cipher: each letter is shifted by a key that advances
// with every letter processed, so repeated characters encrypt differently.
// Placeholder for the personal algorithm — swap the two functions to change it.
const KEY = 7;
const STEP = 3;

function enigmaEncode(text) {
  let shift = KEY;
  return text.replace(/[a-zA-Z]/g, (c) => {
    const base = c <= "Z" ? 65 : 97;
    const out = String.fromCharCode(((c.charCodeAt(0) - base + shift) % 26) + base);
    shift = (shift + STEP) % 26;
    return out;
  });
}

function enigmaDecode(text) {
  let shift = KEY;
  return text.replace(/[a-zA-Z]/g, (c) => {
    const base = c <= "Z" ? 65 : 97;
    const out = String.fromCharCode(((c.charCodeAt(0) - base - shift + 26 * 2) % 26) + base);
    shift = (shift + STEP) % 26;
    return out;
  });
}

function Enigma() {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");

  return (
    <div className="enigma-page mx-auto flex min-h-screen w-full max-w-xl flex-col px-4 py-8">
      <h1 className="text-2xl font-bold">ROT_Enigma</h1>
      <p className="mb-4 opacity-70">Personal Enigma algorithm</p>
      <InputField value={text} onChange={setText} label="Enter text" />
      <div className="flex gap-2">
        <Button label="Encrypt" onClick={() => setOutput(enigmaEncode(text))} />
        <Button label="Decrypt" onClick={() => setOutput(enigmaDecode(text))} />
      </div>
      <OutputField value={output} />
      <Footer />
    </div>
  );
}

export default Enigma;
