import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import SparklesText from "@/components/ui/sparkles-text";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MinZa Blog",
  description: "A blog about software development and web technologies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="max-w-2xl mx-auto py-10 px-4">
            <header className="flex justify-between items-center mb-8">
              {/* <h1 className="text-2xl font-bold">MinZa Blog</h1> */}
              <SparklesText text="Minza Blog" />
              <ModeToggle />
            </header>
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
