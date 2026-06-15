export default function ThankYou() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white dark:bg-gray-900">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="text-center bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Thank You!</h1>
          <p className="text-gray-600 dark:text-gray-300">Your submission has been received.</p>
        </div>
      </div>
    </main>
  );
}
