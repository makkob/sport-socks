import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function Layout({ children, scrollPosition }) {
  return (
    <>
      <Header scrollPosition={scrollPosition}/>
      <div style={{ paddingTop: 140 }}>
        {children}
      </div>
      <Footer />
    </>
  );
}
