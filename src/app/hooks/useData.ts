import { useState, useEffect } from "react";

/**
 * Fetches a JSON file from /public/data/ and returns its contents.
 * Falls back to `fallback` if the fetch fails (e.g. in dev without a server,
 * or if the file has a syntax error).
 *
 * Usage:
 *   const events = useData<Event[]>("events.json", []);
 */
export function useData<T>(file: string, fallback: T): T {
  const [data, setData] = useState<T>(fallback);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/${file}`)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then(setData)
      .catch(() => {
        // Keep the fallback value — no error shown to the user
      });
  }, [file]);

  return data;
}
