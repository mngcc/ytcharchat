import { ThemeContextProvider } from "@/components/provider";
import localFont from "next/font/local";
import "./globals.css";
import "./bubbleChat.css";

const pixeloidBold = localFont({
  src: [
    {
      path: "../public/fonts/PixeloidBold.ttf",
      weight: "400",
    },
  ],
  variable: "--font-pixeloid-bold",
});

export const metadata = {
  title: "YTCHARCHAT",
  description:
    "GG",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${pixeloidBold.variable}`}>
      <body className="font-montserrat">
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </body>
    </html>
  );
}
