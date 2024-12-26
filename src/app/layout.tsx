
import "./globals.css";

export const metadata = {
  title: "Samia's Portfolio",
  description: "A personal portfolio showcasing projects and experience.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
