import "@/assets/styles/screen.scss";
import Header from "@/components/header/Header";
import NoticeBar from "@/components/notice-bar/NoticeBar";

export const metadata = {
  title: "NetZet Dev Task",
  description: "It's a Simple Frontend Dev Task",
};

export default function MainLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="main--wrapper">
          <NoticeBar />
          <Header />

          {children}
        </main>
      </body>
    </html>
  );
}
