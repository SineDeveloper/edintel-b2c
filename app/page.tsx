"use client";

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Home() {
  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white dark:bg-gray-900">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">B2C Contact Form</h1>
        
        <form 
          action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00Dg70000087CJB" 
          method="POST"
          className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <input type="hidden" name="oid" value="00Dg70000087CJB" />
          <input type="hidden" name="retURL" value="https://edintel-b2c.vercel.app/thank-you" />
          
          <div>
            <label htmlFor="salutation" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Salutation</label>
            <select id="salutation" name="salutation" className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
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
            <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">First Name <span className="text-red-500">*</span></label>
            <input 
              id="first_name" 
              name="first_name" 
              type="text" 
              required
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Last Name <span className="text-red-500">*</span></label>
            <input 
              id="last_name" 
              name="last_name" 
              type="text" 
              required
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Mobile <span className="text-red-500">*</span></label>
            <input 
              id="mobile" 
              name="mobile" 
              type="text" 
              required
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email <span className="text-red-500">*</span></label>
            <input 
              id="email" 
              name="email" 
              type="text" 
              required
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="00Ng700000C5dQ1" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Preferred Branch <span className="text-red-500">*</span></label>
            <select 
              id="00Ng700000C5dQ1" 
              name="00Ng700000C5dQ1" 
              title="Preferred Branch"
              required
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="">--Please select--</option>
              <option value="Bangkapi">Bangkapi</option>
              <option value="Silom">Silom</option>
              <option value="Chaengwattana">Chaengwattana</option>
              <option value="Chonburi">Chonburi</option>
            </select>
          </div>

          <div>
            <label htmlFor="00Ng700000C6Adh" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Date of Birth <span className="text-red-500">*</span></label>
            <DatePicker
              id="00Ng700000C6Adh"
              name="00Ng700000C6Adh"
              selected={startDate}
              onChange={(date: Date | null) => setStartDate(date)}
              dateFormat="dd/MM/yyyy"
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Format: DD/MM/YYYY</p>
          </div>

          <div>
            <label htmlFor="00Ng700000C6ERB" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Interesting Course <span className="text-red-500">*</span></label>
            <select 
              id="00Ng700000C6ERB" 
              name="00Ng700000C6ERB" 
              multiple
              title="Interesting Course"
              required
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="Writing">Writing</option>
              <option value="Listening/Speaking">Listening/Speaking</option>
              <option value="IELTS">IELTS</option>
              <option value="Comprehensive">Comprehensive</option>
            </select>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Hold Ctrl/Cmd to select multiple courses</p>
          </div>

          <div className="pt-4">
            <input 
              type="submit" 
              name="submit" 
              value="Submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
            />
          </div>
        </form>
      </div>
    </main>
  );
}
