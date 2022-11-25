import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes/router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="max-w-[1440px] mx-auto px-5">
      <RouterProvider
        router={router}
      ></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
