import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import TestComponent from '@/components/TestComponent';

const TestPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Test Page
        </h1>
        <p className="text-xl mb-8 text-gray-600 dark:text-gray-400">
          If you can see this page, the routing is working correctly.
        </p>
        
        <TestComponent />
        
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Navigation Tests</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Go to Main Portfolio</h3>
              <Link to="/">
                <Button variant="outline" className="w-full">
                  Home Page
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="text-gray-500 dark:text-gray-400">
          <p>If you're seeing a blank page on other routes, there might be a JavaScript error.</p>
          <p>Check the browser's developer console for error messages.</p>
        </div>
      </div>
    </div>
  );
};

export default TestPage;