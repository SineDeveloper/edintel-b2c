export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">B2C Contact Form</h1>
        
        <form 
          action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00Dg70000087CJB" 
          method="POST"
          className="space-y-4"
        >
          <input type="hidden" name="oid" value="00Dg70000087CJB" />
          <input type="hidden" name="retURL" value="https://edintel-b2c.vercel.app/thank-you" />
          
          <div>
            <label htmlFor="salutation" className="block text-sm font-medium text-gray-700">Salutation</label>
            <select id="salutation" name="salutation" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
              <option value="">--None--</option>
              <option value="Mr.">Mr.</option>
              <option value="Ms.">Ms.</option>
              <option value="Mrs.">Mrs.</option>
              <option value="Dr.">Dr.</option>
              <option value="Prof.">Prof.</option>
              <option value="Mx.">Mx.</option>
            </select>
          </div>

          <div>
            <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First Name</label>
            <input 
              id="first_name" 
              name="first_name" 
              type="text" 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input 
              id="last_name" 
              name="last_name" 
              type="text" 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile</label>
            <input 
              id="mobile" 
              name="mobile" 
              type="text" 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              id="email" 
              name="email" 
              type="text" 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="00Ng700000C5dQ1" className="block text-sm font-medium text-gray-700">Preferred Branch</label>
            <select 
              id="00Ng700000C5dQ1" 
              name="00Ng700000C5dQ1" 
              title="Preferred Branch"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              <option value="">--None--</option>
              <option value="Bangkapi">Bangkapi</option>
              <option value="Silom">Silom</option>
              <option value="Chaengwattana">Chaengwattana</option>
              <option value="Chonburi">Chonburi</option>
            </select>
          </div>

          <div>
            <label htmlFor="00Ng700000C6Adh" className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input 
              id="00Ng700000C6Adh" 
              name="00Ng700000C6Adh" 
              type="text" 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div className="pt-4">
            <input 
              type="submit" 
              name="submit" 
              value="Submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            />
          </div>
        </form>
      </div>
    </main>
  );
}
