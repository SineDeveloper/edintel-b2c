"use client";

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { motion } from 'framer-motion';

export default function Home() {
  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center"
        >
          B2C Contact Form
        </motion.h1>
        
        <motion.form 
          action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00Dg70000087CJB" 
          method="POST"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
        >
          <input type="hidden" name="oid" value="00Dg70000087CJB" />
          <input type="hidden" name="retURL" value="https://edintel-b2c.vercel.app/thank-you" />
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <label htmlFor="salutation" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Salutation</label>
            <select id="salutation" name="salutation" className="w-full rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white py-2 px-3 transition-all duration-200">
              <option value="">--None--</option>
              <option value="Mr.">Mr.</option>
              <option value="Ms.">Ms.</option>
              <option value="Mrs.">Mrs.</option>
              <option value="Dr.">Dr.</option>
              <option value="Prof.">Prof.</option>
              <option value="Mx.">Mx.</option>
            </select>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name <span className="text-red-500">*</span></label>
            <input 
              id="first_name" 
              name="first_name" 
              type="text" 
              required
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white py-2 px-3 transition-all duration-200"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name <span className="text-red-500">*</span></label>
            <input 
              id="last_name" 
              name="last_name" 
              type="text" 
              required
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white py-2 px-3 transition-all duration-200"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Mobile <span className="text-red-500">*</span></label>
            <input 
              id="mobile" 
              name="mobile" 
              type="text" 
              required
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white py-2 px-3 transition-all duration-200"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.7 }}
          >
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email <span className="text-red-500">*</span></label>
            <input 
              id="email" 
              name="email" 
              type="text" 
              required
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white py-2 px-3 transition-all duration-200"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.8 }}
          >
            <label htmlFor="00Ng700000C5dQ1" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Preferred Branch <span className="text-red-500">*</span></label>
            <select 
              id="00Ng700000C5dQ1" 
              name="00Ng700000C5dQ1" 
              title="Preferred Branch"
              required
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white py-2 px-3 transition-all duration-200"
            >
              <option value="">--Please select--</option>
              <option value="Bangkapi">Bangkapi</option>
              <option value="Silom">Silom</option>
              <option value="Chaengwattana">Chaengwattana</option>
              <option value="Chonburi">Chonburi</option>
            </select>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.9 }}
          >
            <label htmlFor="00Ng700000C6Adh" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Date of Birth <span className="text-red-500">*</span></label>
            <DatePicker
              id="00Ng700000C6Adh"
              name="00Ng700000C6Adh"
              selected={startDate}
              onChange={(date: Date | null) => setStartDate(date)}
              dateFormat="dd/MM/yyyy"
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white py-2 px-3 transition-all duration-200"
            />
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Format: DD/MM/YYYY</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 1.0 }}
          >
            <label htmlFor="00Ng700000C6ERB" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Interesting Course <span className="text-red-500">*</span></label>
            <select 
              id="00Ng700000C6ERB" 
              name="00Ng700000C6ERB" 
              multiple
              title="Interesting Course"
              required
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white py-2 px-3 transition-all duration-200"
            >
              <option value="Writing">Writing</option>
              <option value="Listening/Speaking">Listening/Speaking</option>
              <option value="IELTS">IELTS</option>
              <option value="Comprehensive">Comprehensive</option>
            </select>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Hold Ctrl/Cmd to select multiple courses</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.1 }}
            className="pt-4"
          >
            <motion.input 
              type="submit" 
              name="submit" 
              value="Submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800 transition-all duration-200"
            />
          </motion.div>
        </motion.form>
      </div>
    </main>
  );
}
