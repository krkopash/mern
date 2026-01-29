import '@testing-library/jest-dom';

export default {
     // other Jest config
     coverageThreshold: {
       global: {
         branches: 80,
         functions: 80,
         lines: 80,
         statements: 80,
       },
     },
   };