import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import ScrolltoTop from '../utils/ScrolltoTop';
import PageNav from './PageNav';

function AppLayout() {
  return (
    <>
      <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
        <PageNav />

        <main className="px-3">
          <Outlet />
        </main>

        <Footer />
      </div>
      <ScrolltoTop />
    </>
  );
}

export default AppLayout;
