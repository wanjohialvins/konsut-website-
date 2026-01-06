
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Team from './components/Team'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Team />
            <Clients />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
