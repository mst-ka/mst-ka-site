import { Fab } from "@mui/material";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import Navbar from "./Nav/Navbar";
import Footer from "./Footer/Footer";
import { useRouter } from "next/router";
import Safe from "react-safe";

function Layout(props) {
  const router = useRouter();
  return (
    <div>
      <Safe.script type="application/ld+json">{`[{  "@context" : "http://schema.org",
          "@type" : "LocalBusiness",
          "@id": "https://www.mst-ka.org",
          "name" : "Missouri S&T - Kappa Alpha Order",
          "image": "https://mst-ka.org/img/banner-slide-1.jpg",
          "telephone" : "+13143788483",
          "address" : {
            "@type" : "PostalAddress",
            "streetAddress" : "1 Fraternity Drive",
            "addressLocality" : "Rolla",
            "addressRegion" : "Missouri",
            "postalCode" : "65401",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 37.95683785189487,
            "longitude": -91.78287364038182
          }
        }]`}</Safe.script>
      <Navbar />
      {props.children}
      <Footer />
      {router.pathname !== "/apply" ? (
        <Fab
          variant="extended"
          color="primary"
          href="/apply"
          sx={{ right: "1rem", bottom: "1rem", position: "fixed" }}
        >
          <ContactPageIcon sx={{ marginRight: ".3rem" }} />
          Apply for Membership
        </Fab>
      ) : null}
    </div>
  );
}

export default Layout;
