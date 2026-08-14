"use client";

import { useState } from "react";

/** BibTeX with a copy button — the one thing a citing reader actually wants. */
export function BibtexBlock({ bibtex }: { bibtex: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked — the text is selectable either way.
    }
  }

  return (
    <div className="relative mt-4 border border-rule bg-surface">
      <button
        type="button"
        onClick={copy}
        data-print-hide
        className="absolute right-3 top-3 rounded-full border border-rule bg-bg px-3 py-1 font-sans text-xs text-muted transition-colors hover:border-accent hover:text-accent"
      >
        {copied ? "Copied" : "Copy"}
        <span className="sr-only"> BibTeX entry</span>
      </button>
      <pre className="overflow-x-auto px-5 py-4 pr-20 font-mono text-xs leading-relaxed">
        {bibtex}
      </pre>
    </div>
  );
}
