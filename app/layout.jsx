import "./globals.css";
import "../assets/mdi/css/materialdesignicons.min.css";
export const metadata = {
  title: "Test dev app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
