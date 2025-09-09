"use client";
 
import Head from "next/head"; 
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/app/(app)/component/theme-provider";
import Header from "@/app/(app)/component/header";
import Footer from "@/app/(app)/component/footer";
import  React , {useEffect } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Get current route

  useEffect(() => {
    document.title = "ReadSphere - Your Reading World in One Website Explore books, monitor your reading habits, and grow your love for reading."; // ✅ Force title update
  }, [pathname]); // Update title when route changes

  const isAuthPage =
    pathname === "/sign-in" ||
    pathname === "/sign-in/factor-one" ||
    pathname === "/sign-up" ||
    pathname === "/sign-up/verify-email-address"; // Check if auth page

  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
      afterSignInUrl="/"
      afterSignUpUrl="/"
      afterSignOutUrl="/sign-in"
    >
      <html lang="en">
      <Head>
        <title>ReadSphere - Your Reading World in One Website Explore books, monitor your reading habits, and grow your love for reading.</title> {/* ✅ Set title */}
        <meta name="description" content="Discover books you'll love with ReadAuro, your personalized book recommendation platform." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        
    </Head>

        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="flex flex-col min-h-screen">
              {!isAuthPage && <Header />}
              <main className="flex-grow">{children}</main>
              {!isAuthPage && <Footer />}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
