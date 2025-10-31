import Footer from "@/app/_components/ui/Footer";
import "@/app/_styles/globals.css";
import { Rubik } from "next/font/google";
import Header from "@/app/_components/ui/Header";
import { Toaster } from "react-hot-toast";

const rubic = Rubik({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Devio",
  description:
    "Insights, stories, and reflections on my code blogs, creativity, and growth at Devio. A personal space for sharing meaningful content, and fun .",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rubic.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1 px-0">{children}</main>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 4000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
            },
          }}
        />
        <Footer />
      </body>
    </html>
  );
}
