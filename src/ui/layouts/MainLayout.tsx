import { ToastContainer } from 'react-toastify';
import NavBar from '../components/organisms/NavBar';

interface IMainLayout {
  children: JSX.Element | JSX.Element[];
}

export default function MainLayout({ children }: IMainLayout) {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <NavBar />

      <div className="mt-16 p-4">{children}</div>
    </div>
  );
}
