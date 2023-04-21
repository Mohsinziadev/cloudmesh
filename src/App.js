import { useEffect, useState } from "react";
import SplashScreen from "./@components/SplashScreen";
import { Outlet } from "react-router-dom";
import Header from "./@components/Header";
import Footer from "./@components/Footer";


function App() {
  const [loadingApp, setLoadingApp] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoadingApp(false), 5000);
  }, []);

  return (
    <div className="App w-full overflow-hidden">
        <Header />
      {loadingApp && <SplashScreen />}
      <Outlet />
      <div className="shadow-sm">
        <div>
          <Footer />
        </div>
      </div>
    </div>

  );
}

export default App;
