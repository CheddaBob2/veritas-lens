import "./globals.css";

export const metadata = {
  title: "Veritas Lens",
  description: "Catholic discernment and claim analysis tool.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
