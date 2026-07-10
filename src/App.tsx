import { AppControllerProvider } from './state/AppControllerContext';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { AnalysisModal } from './components/AnalysisModal';
import { IntakeModal } from './components/IntakeModal';
import { Footer } from './components/Footer';
import './styles/main.css';

export default function App() {
  return (
    <AppControllerProvider>
      <Nav />
      <Hero />
      <HowItWorks />
      <AnalysisModal />
      <IntakeModal />
      <Footer />
    </AppControllerProvider>
  );
}
