import { RouterProvider } from 'react-router-dom';
import router from './router';
import { HelmetProvider } from 'react-helmet-async';
import { PageWrapper } from './components/Transitions/PageWrapper';

function App() {
  return (
    <HelmetProvider>
      <PageWrapper>
        <RouterProvider router={router} />
      </PageWrapper>
    </HelmetProvider>
  );
}

export default App;
