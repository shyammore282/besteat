import "./App.css";
import Header from "./components/common/Header";
import Hero from "./components/hero/Hero";
import HeadlineCard from "./components/headline/HeadlineCard";
import Food from "./components/food/Food";
import Category from "./components/category/Category";
import Footer from "./components/common/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <HeadlineCard />
      <Food />
      <Category />
      <Footer />
    </>
  );
}

export default App;
