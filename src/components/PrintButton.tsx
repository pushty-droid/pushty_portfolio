"use client";

/** Prints /cv through the print stylesheet in globals.css. */
export function PrintButton() {
  return (
    <button type="button" onClick={() => window.print()} className="btn-secondary">
      Print / save as PDF
    </button>
  );
}
