import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RoutesVars } from './const/constRoutes';

import UserDetailsPage from './pages/UserDetailsPage/UserDetailsPage';
import AddUserDetailsPage from './pages/AddUserDetailsPage/AddUserDetailsPage';
import SelectImagePage from './pages/SelectImagePage/SelectImagePage';
import { UserContextProvider } from './context/UserContext/UserContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false },
  },
});

function App() {
  const MissingRoute = () => <Navigate to={{ pathname: RoutesVars.ADD_USER_DETAILS }} replace />;

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <UserContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path={RoutesVars.USER_DETAILS} element={<UserDetailsPage />} />
              <Route path={RoutesVars.ADD_USER_DETAILS} element={<AddUserDetailsPage />} />
              <Route path={RoutesVars.SELECT_IMAGE} element={<SelectImagePage />} />

              <Route path="*" element={<MissingRoute />} />
            </Routes>
          </BrowserRouter>
          <ReactQueryDevtools />
        </UserContextProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
