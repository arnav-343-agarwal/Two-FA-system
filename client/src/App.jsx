import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { SessionProvider } from "./context/SessionContext";

function App() {
  return (
    <>
      <div className="bg-slate-800 h-screen">
        <div className="flex justify-center items-center h-screen">
          <SessionProvider>
            <RouterProvider router={router} />
          </SessionProvider>
        </div>
      </div>
    </>
  );
}

export default App;
