import "@/assets/styles/screen.scss";

export const metadata = {
  title: "NetZet Dev Task",
  description: "It's a Frontend Dev Task",
};

export default function MainLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
