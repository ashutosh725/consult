
import "./globals.css";
import TopHeader from "@/components/common/TopHeader";
import MainHeader from "@/components/common/MainHeader";
import Footer from "@/components/common/Footer";
import Chat from "@/components/common/Chat";



export const metadata = {
  title: "Nscx Education India",
  description: "created by ashutosh (8769206069)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
 
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Alice&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Yeseva+One&display=swap" rel="stylesheet"/>
     
      <body className="font-Open">
        <TopHeader/>
        <MainHeader/>
        {children}
        <Chat/>
        <Footer/>
        </body>
    </html>
  );
}
