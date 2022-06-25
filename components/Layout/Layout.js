import { Fab } from "@mui/material";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import Navbar from "./Header/Navbar";
import Footer from "./Footer/Footer";
import { useRouter } from "next/router";

function Layout(props) {
  const router = useRouter();
  return (
    <div>
      <Navbar />
      {props.children}
      
      <Footer />
      {router.pathname !== "/contact" ? (
        <Fab
          variant="extended"
          color="primary"
          href="/contact"
          sx={{ right: "1rem", bottom: "1rem", position: "fixed"}}
        >
          <ContactPageIcon sx={{ marginRight: ".3rem" }} />
          Apply for Membership
        </Fab>
      ) : null}
    </div>
  );
}

export default Layout;
