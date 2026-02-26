export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-2 text-gray-500">Page not found</p>
      <a href="/" className="mt-4 text-blue-500 underline">
        Go back home
      </a>
    </main>
  );
}
