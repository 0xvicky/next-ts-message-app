import type {Metadata} from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Messaging App",
  description: "This is the messaging app."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
