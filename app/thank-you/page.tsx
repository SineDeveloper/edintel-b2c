export default function ThankYou() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white dark:bg-gray-900">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="text-center bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Thank You!</h1>
          <p className="text-gray-600 dark:text-gray-300">Your submission has been received.</p>
          <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-md">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Submitted Data:</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">This page shows a sample of what was submitted to Salesforce.</p>
            <ul className="mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li><span className="font-medium">Salutation:</span> [Selected Value]</li>
              <li><span className="font-medium">First Name:</span> [Entered Value]</li>
              <li><span className="font-medium">Last Name:</span> [Entered Value]</li>
              <li><span className="font-medium">Email:</span> [Entered Value]</li>
              <li><span className="font-medium">Mobile:</span> [Entered Value]</li>
              <li><span className="font-medium">Preferred Branch:</span> [Selected Value]</li>
              <li><span className="font-medium">Date of Birth:</span> [Selected Date]</li>
              <li><span className="font-medium">Interesting Course:</span> [Selected Values]</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
