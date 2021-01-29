import App, { AppContext, AppProps } from "next/app";
import React, { useEffect } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import { theme } from "../style/muiTheme";
import "../style/global.css";
import AppLayout from "../container/Layout/AppLayout";
import { LoadingProvider } from "../contexts/loading/loading.context";
import { UserProvider } from "../contexts/user/user.context";
import { ProductProvider } from "../contexts/products/products.context";
import { OrderProvider } from "../contexts/order/order.context";

export default function ExtendedApp({
  Component,
  pageProps,
}: AppProps): JSX.Element {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LoadingProvider>
        <UserProvider>
          <ProductProvider>
            <OrderProvider>
              <AppLayout>
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <Component {...pageProps} />
              </AppLayout>
            </OrderProvider>
          </ProductProvider>
        </UserProvider>
      </LoadingProvider>
    </ThemeProvider>
  );
}

ExtendedApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  const { req, query } = appContext.ctx;
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  // const { locale } = parseCookies(req);
  const locale = "ja";
  return {
    ...appProps,
    userAgent,
    query,
    locale,
  };
};
