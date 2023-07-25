import Navigation from "./components/Navigation";
import "../styles/global.css";
export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My firs app with Next 13</title>
      </head>

      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
