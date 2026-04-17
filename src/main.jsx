import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import LocalTesting from './LocalTesting';

import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LocalTesting />
  </StrictMode>
);