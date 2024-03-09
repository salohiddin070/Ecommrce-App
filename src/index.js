import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from 'react-toastify';
import "boxicons"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import StoreProvider from './context/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ToastContainer
      hideProgressBar={true}
      pauseOnHover={false}
      draggable={true}
      autoClose={3000}
      newestOnTop={true}
      position='top-center'
    />
    <BrowserRouter>
      <StoreProvider>
        <App />
      </StoreProvider>
    </BrowserRouter>
  </>
);


