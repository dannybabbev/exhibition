import { ThemeSwitcher } from "@/components/theme-switcher";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import { Palette, Github } from "lucide-react";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Artisana",
  description: "Explore the work and stories of extraordinary artists from around the world",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-8 items-center">
              <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
                <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
                  <div className="flex gap-5 items-center font-semibold">
                    <Link href={"/"} className="flex items-center">
                      <Palette className="mr-2 h-5 w-5" />
                      Artisana
                    </Link>
                  </div>
                </div>
              </nav>
              <div className="flex flex-col gap-20 max-w-5xl p-5">
                {children}
              </div>

              <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
                <p>
                  Made with ❤ in Switzerland
                </p>
                <Link href="https://github.com/dannybabbev/exhibition" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </Link>
                <ThemeSwitcher />
              </footer>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
