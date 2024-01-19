import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CourseProvider } from './StateMangement/CourseContext';
import { StudentProvider} from './StateMangement/StudentContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CourseProvider>
    <StudentProvider >
    <App />
    </StudentProvider>
    </CourseProvider>
  </React.StrictMode>
);


