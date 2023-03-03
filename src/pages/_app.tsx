import "@/styles/globals.css";
import { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import ApplicationContainer from "@/components/ApplicationContainer";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light",
        }}
      >
        <ApplicationContainer>
          <Component {...pageProps} />
        </ApplicationContainer>
      </MantineProvider>
    </>
  );
}
