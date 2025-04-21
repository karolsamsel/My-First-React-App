import { useState } from "react";
import "./normalize.css";
import "./styles.css";
import { Header } from "./header";
import { NavBar } from "./NavBar";
import { Skills } from "./Skills";
import { Pricing } from "./Pricing";
import { Technologies } from "./technologies";
import { CtaSection } from "./CtaSection";
import { Footer } from "./Footer";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Skills />
      <Pricing />
      <Technologies />
      <CtaSection />
      <Footer />
    </>
  );
}

export default App;
