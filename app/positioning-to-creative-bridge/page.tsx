"use client";

import Link from "next/link";
import { useState } from "react";

type CreativeBrief = {
  tone: string;
  visualDirection: string;
  messageArchitecture: string;
};

function translateToCreativeBrief(positioning: string): Promise<CreativeBrief> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const lower = positioning.toLowerCase();
      resolve({
        tone:
          lower.includes("sustainable") || lower.includes("millennial")
            ? "Warm, authentic, and purpose-driven. Conversational but confident. Avoid corporate jargon."
            : "Clear, confident, and direct. Professional yet approachable.",
        visualDirection:
          "Natural light, earthy tones, and real people over stock. Minimal, clean layouts with ample whitespace. Photography that feels candid and lifestyle-led.",
        messageArchitecture:
          "Lead with the benefit (sustainable choice), support with proof (materials, practices), close with a clear CTA that invites trial or discovery.",
      });
    }, 1500);
  });
}

export default function PositioningToCreativeBridgePage() {
  const [positioning, setPositioning] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CreativeBrief | null>(null);

  async function handleTranslate() {
    if (!positioning.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const brief = await translateToCreativeBrief(positioning.trim());
      setResult(brief);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 p-6 md:p-10">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="text-sm text-stone-500 hover:text-stone-800 mb-6 inline-block"
        >
          ← Back to directory
        </Link>
        <h1 className="font-serif text-2xl font-bold text-stone-900 mb-1">
          Positioning-to-Creative Bridge
        </h1>
        <p className="font-sans text-stone-600 text-sm mb-6">
          Turn your positioning statement into a creative brief.
        </p>

        <label
          htmlFor="positioning"
          className="block font-sans text-sm font-medium text-stone-700 mb-2"
        >
          Positioning statement
        </label>
        <textarea
          id="positioning"
          value={positioning}
          onChange={(e) => setPositioning(e.target.value)}
          placeholder='e.g. "We are the sustainable choice for millennials"'
          rows={4}
          className="font-sans w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 placeholder-stone-400 focus:border-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-500"
          disabled={loading}
        />

        <button
          type="button"
          onClick={handleTranslate}
          disabled={loading || !positioning.trim()}
          className="mt-4 px-4 py-2 rounded-lg bg-stone-900 text-white font-sans font-medium hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? (
            <span className="inline-flex items-center gap-2">
              <span className="size-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Translating…
            </span>
          ) : (
            "Translate to Creative Brief"
          )}
        </button>

        {result && (
          <div className="mt-8 space-y-6">
            <h2 className="font-serif text-lg font-bold text-stone-800 border-b border-stone-200 pb-2">
              Creative Brief
            </h2>

            <section>
              <h3 className="font-sans text-sm font-semibold text-stone-600 uppercase tracking-wide mb-2">
                Tone
              </h3>
              <p className="font-sans text-stone-700 leading-relaxed">
                {result.tone}
              </p>
            </section>

            <section>
              <h3 className="font-sans text-sm font-semibold text-stone-600 uppercase tracking-wide mb-2">
                Visual Direction
              </h3>
              <p className="font-sans text-stone-700 leading-relaxed">
                {result.visualDirection}
              </p>
            </section>

            <section>
              <h3 className="font-sans text-sm font-semibold text-stone-600 uppercase tracking-wide mb-2">
                Message Architecture
              </h3>
              <p className="font-sans text-stone-700 leading-relaxed">
                {result.messageArchitecture}
              </p>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
