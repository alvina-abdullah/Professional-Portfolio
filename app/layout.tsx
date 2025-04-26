import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ThemeProvider } from "@/components/theme-provider"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Portfolio",
  description: "",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${poppins.variable} font-sans bg-background`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black to-purple-950">
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,0,150,0.3),rgba(0,0,0,0))]"></div>
            <Header />
            <main>{children}</main>
            </div>
            <div>
            <Footer/>
            </div>
         
        </ThemeProvider>
      </body>
    </html>
  )
}
