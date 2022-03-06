import React from "react";
import Header from "./pages/header/Header";
import Story from "./pages/story/Story";
import Watch from "./pages/watch/Watch";
import Services from "./pages/services/Services";
import Team from "./pages/team/Teams";
// import Work from "./pages/work/Work";
// import Clients from "./pages/clients/Clients";
import Partner from "./pages/partner/Partner";
import Footer from "./pages/footer/Footer";

export default function MainComponent() {
  return (
    <div>
      <Header />
      <Story />
      <Watch />
      <Services />
      <Team />
      {/* <Work /> */}
      {/* <Clients /> */}
      <Partner />
      <Footer />
    </div>
  );
}
