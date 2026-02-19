import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Book } from './components/sections/Book';
import { About } from './components/sections/About';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg dark:bg-dark-bg light:bg-white
                    text-slate-900 dark:text-slate-50 light:text-slate-900
                    transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <Book />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;