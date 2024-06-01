import { Inter, Poppins, Raleway } from "next/font/google";
import "./globals.css";
import { Provider } from "@/context/Providers";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins', // Optional: for custom properties usage
});

// Configure Raleway font
const raleway = Raleway({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-raleway', // Optional: for custom properties usage
});


export const metadata = {
  title: "LENS Corporation | Biometrics & Vision",
  description: "Lens Corp AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={`${poppins.className} ${raleway.className}`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
