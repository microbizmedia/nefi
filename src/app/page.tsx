
import Header from "./outlets/header";
import Outlet from "./outlets/outlet";
import Footer from "./outlets/footer";

export default function Home() {
  return (
    <>
      
      {/*...::: Header Start :::... */}
      <Header />
      {/*...::: Header End :::... */}

      {/*...::: Main Start :::... */}
      <Outlet />
      {/*...::: Main End :::... */}

      {/*...::: Footer Start :::... */}
      <Footer/>
      {/*...::: Footer End :::... */}
    </>
  );
}
