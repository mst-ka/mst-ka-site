import Safe from "react-safe";

import Navbar from "./Nav/Navbar";

function Layout() {
  return  (
    <>
      <Safe.script type="application/ld+json">{
        `[{  "@context" : "http://schema.org",
          "@type" : "LocalBusiness",
          "@id": "https://www.mst-ka.org",
          "name" : "Missouri S&T - Kappa Alpha Order",
          "image": "https://mst-ka.org/img/banner-slide-1.jpg",
          "telephone" : "+13146035417",
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
        }]`
      }</Safe.script>
      <Navbar />
    </>
  );
}

export default Layout;
