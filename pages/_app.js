import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import theme from "../utils/theme.js";
import Layout from "../components/Layout/Layout";
import "../styles/global.css";

function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>BA of KA</title>
        <meta
          name="description"
          content="Beta Alpha Chapter of Kappa Alpha Order at Missouri S&T"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GoogleReCaptchaProvider reCaptchaKey="6Lf59QQnAAAAAEeiSfQeDKzEyCGFSfmWX1vYVUL1">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </GoogleReCaptchaProvider>
    </div>
  );
}

export default App;
