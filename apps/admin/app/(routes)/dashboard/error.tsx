"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section>
      <h1>Admin dashboard error</h1>
      <p>{error.message}</p>
      <button onClick={reset}>Retry</button>
    </section>
  );
}
