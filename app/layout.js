import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastContainer, Bounce } from "react-toastify";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SmartFlash",
  description: "AI powered generated flashcard",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
    signInFallbackRedirectUrl="/home"
    signUpFallbackRedirectUrl="/home"
    >
    <html lang="en">
      <body className={inter.className}>
        <Toaster/>
        <main>
        {children}
        </main>
      </body>
    </html>
    </ClerkProvider>
  );
}
