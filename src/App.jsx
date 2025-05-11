import React, { Suspense, lazy } from 'react';
import './App.css';
import './index.css';
import { Outlet, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { PureLightTheme } from './core/components/theme/PureLightTheme.js';
import ErrorBoundary from './core/Element/Error/ErrorBoundary.jsx';
const Loading = lazy(() => import('./core/components/Loading/Loading'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const TempNavbar = lazy(() => import('./components/NavBar/TempNavbar'));

function App() {
  const location = useLocation();
  const hideNavbarRoutes = ['/PersonalDetails'];
  const shouldHideTempNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <ThemeProvider theme={PureLightTheme}>
      <ErrorBoundary>
        <div className="font-manrope w-[100%]">
          <div className="bg-white h-[2rem] lg:h-[3.5rem]"></div>
          <Suspense fallback={<Loading />}>
            {!shouldHideTempNavbar && <TempNavbar />}
            <Outlet />
            <Footer />
          </Suspense>
        </div>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
