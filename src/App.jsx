import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./style.css";
import GiveawayHero from "./components/GiveawayHero";
import GiveawayStats from "./components/GiveawayStats/GiveawayStats";
import PrizeCards from "./components/PrizeCards/PrizeCards";
import Participate from "./components/HowToParticipate/Participate";
import Countdown from "./components/Countdown/Countdown";
import WinnerSlider from "./components/WinnerSlider/WinnerSlider";
import WinnersTabs from "./components/WinnersTabs/WinnersTabs";
import TrustRulesFAQ from "./components/TrustRulesFAQ/TrustRulesFAQ";
import GiveawayDetails from "./pages/GiveawayDetails/GiveawayDetails";

function Home() {
  return (
    <>
      <GiveawayHero />
      <GiveawayStats />
      <PrizeCards />
      <Participate />
      <Countdown />
      <WinnerSlider />
      <WinnersTabs />
      <TrustRulesFAQ />

      <main style={{ padding: "60px 6%", backgroundColor: "black" }}>
        <h1>VELOOP GIVEAWAYS</h1>
      </main>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/giveaway/:id" element={<GiveawayDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;