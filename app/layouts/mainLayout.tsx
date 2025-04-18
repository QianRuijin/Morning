import { Outlet } from "react-router";
import Header from "../components/header";
// import Footer from "../components/footer";
import classes from './mainLayout.module.css'
export default function layout() {
  return (
    <main>
      <Header />
      <div className={classes.wrap}>
        <div className={classes.container}>
          <Outlet />
        </div>
      </div>
      {/* <Footer /> */}
    </main>
  );
}
