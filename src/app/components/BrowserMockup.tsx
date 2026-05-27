import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface BrowserMockupProps {
  children: ReactNode;
  url?: string;
  className?: string;
}

export function BrowserMockup({ children, url = 'myproject.dev', className = '' }: BrowserMockupProps) {
  return (
    <div className={`rounded-xl overflow-hidden ${className}`}>
      {/* Browser header */}
      <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
        {/* Traffic lights */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        {/* URL bar */}
        <div className="flex-1 ml-4">
          <div className="bg-gray-700 rounded-md px-3 py-1.5 text-xs text-gray-400 font-mono">
            {url}
          </div>
        </div>
      </div>

      {/* Content area */}
      <div className="relative overflow-hidden">
        {children}
      </div>
    </div>
  );
}
