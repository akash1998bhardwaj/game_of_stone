import Router from './router/Router';
import './assets/css/style.css';
import { ToastContainer, toast } from 'react-toastify';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import 'react-toastify/dist/ReactToastify.css';
import { store } from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <ReactLenis
      root
      options={{ gestureOrientataion: "both" }}
    >
      <Provider store={store}>
        <div className="App">
          <Router />
          <ToastContainer />
        </div>
      </Provider>
    </ReactLenis>
  );
}

export default App;
