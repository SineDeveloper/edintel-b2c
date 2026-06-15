export default function ThankYou() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white dark:bg-gray-900">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="text-center bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Thank You!</h1>
          <p className="text-gray-600 dark:text-gray-300">Your submission has been received and will be processed.</p>
          <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-md">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Submission Received</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">Thank you for your submission. It has been sent to our system.</p>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
              You will be redirected to our website shortly, or you can continue browsing.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
