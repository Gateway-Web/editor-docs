import React from 'react';
import { inject } from '@vercel/analytics';
 
inject();

// Default implementation, that you can customize
export default function Root({children}) {
  return <>{children}</>;
}