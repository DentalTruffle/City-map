
// import { ThemeProvider } from "@material-tailwind/react";

// function MyApp({ Component, pageProps }) {
//   return (
//     <ThemeProvider>
//       <Component {...pageProps} />
//     </ThemeProvider>
//   );
// }

// export default MyApp;


import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
