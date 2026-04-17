/**
 * Layout Notes
 * Author: Kimberley Gonzalez
 * Created: December 2025
 * 
 */


import "./globals.css";

export const metadata = {
  title: "Korn Wordle", /*What shows on the tab*/
  description: "Korn Wordle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" flex flex-col items-center justify-center">
        {children}
      </body>
    </html>
  );
}