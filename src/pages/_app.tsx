import "@/styles/globals.css";
import type { AppProps } from "next/app";
import ThemeProvider from "../../context/theme-context";
import ActiveSectionProvider from "../../context/active-section-context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ActiveSectionProvider>
        <Component {...pageProps} />
      </ActiveSectionProvider>
    </ThemeProvider>
  );
}
