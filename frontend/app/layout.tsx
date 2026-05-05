import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Caveat } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kodovault.no"),
  title: "Ko | Do · Vault — Lean Security",
  description:
    "En personlig passord-vault. Lean Security · Not Security as a Service. Bli med på lista.",
  openGraph: {
    title: "Ko | Do · Vault — Lean Security",
    description: "En personlig passord-vault. Lean Security · Not Security as a Service.",
    url: "https://kodovault.no",
    siteName: "Ko | Do · Vault",
    locale: "nb_NO",
    type: "website",
  },
  robots: { index: true, follow: true },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0a0e1a",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="nb" className={`dark ${inter.variable} ${caveat.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Toaster
          position="bottom-center"
          theme="dark"
          toastOptions={{
            style: {
              background: "rgba(15, 20, 36, 0.95)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              color: "#f1f5f9",
              backdropFilter: "blur(16px)",
            },
          }}
        />
      </body>
    </html>
  );
}
