import React from 'react';
import './App.css';
import Root from './components/Root';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import LearnerDashboard from './pages/LearnerDashboard';
import NewAssignment from './pages/NewAssignment';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Root/>}>
    <Route index element={ <HomePage />} />
    <Route path="login" element={ <Login />} />
    <Route path='learner-dashboard'element={ <LearnerDashboard />} /> 
    <Route path='new-assignment'element={ <NewAssignment />} /> 
  </Route>
));

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
