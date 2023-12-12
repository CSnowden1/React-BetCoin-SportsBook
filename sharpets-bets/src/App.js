import './App.css';
import Nav from './components/nav'
import HeroComponent from './components/hero';
import TrendingBets from './components/trending';
import SignUpPromo from './components/sitePromo';
import BetsSection from './components/homeBets';
import BetcoinSection from './components/betCoinPromo';
import BetCoinBets from './components/betCoinBets';
import FooterComponent from './components/footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <HeroComponent />
      <TrendingBets />
      <SignUpPromo />
      <BetsSection />
      <BetcoinSection />
      <BetCoinBets />
      <FooterComponent />
    </div>
  );
}

export default App;
