import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "../style.css";
import GiveawayHero from "./components/GiveawayHero";
import GiveawayStats from "./components/GiveawayStats/GiveawayStats";
import PrizeCards from "./components/PrizeCards/PrizeCards";
import Participate from "./components/HowToParticipate/Participate";
import Countdown from "./components/Countdown/Countdown";
import WinnerSlider from "./components/WinnerSlider/WinnerSlider";
import WinnersTabs from "./components/WinnersTabs/WinnersTabs";
import TrustRulesFAQ from "./components/TrustRulesFAQ/TrustRulesFAQ";
import GiveawayDetails from "./pages/GiveawayDetails/GiveawayDetails";
import Register from "./pages/Register/Register";
import Login from "./pages/Login";

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

      <main className="siteFooter">
        <h6>VELOOP GIVEAWAYS</h6>
      </main>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/prize/:id" element={<GiveawayDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;