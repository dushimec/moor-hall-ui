import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Hero from './components/layout/Hero'
import bg from './assets/resto.png'
import Home from './components/layout/Home'
import Contacts from './pages/Contacts'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import CoffeeShop from './pages/CoffeeShop'
import Bakery from './pages/Bakery'
import CateringEvents from './pages/CateringEvents'
import MissionValues from './pages/MissionValues'
import OurStory from './pages/OurStory'
import WhyChooseUs from './pages/WhyChooseUs'
import Terms from './pages/Terms'
import Footer from './components/layout/Footer'

export default function App() {
	return (
		<Router>
			<div className="min-h-screen flex flex-col">
				<Routes>
					<Route path="/" element={
						<>
							{/* Top area: shared background for navbar and hero */}
							<header
								className="relative w-full bg-cover bg-center bg-fixed min-h-screen"
								style={{ 
									backgroundImage: `url(${bg})`, 
									backgroundRepeat: 'no-repeat', 
									backgroundSize: 'cover',
									backgroundAttachment: 'fixed',
									height: '120vh'
								}}
							>
								<div className="">
									<Navbar />
									<Hero />
								</div>
							</header>
							<div className="mt-3">
								<Home />
							</div>
						</>
					} />
					<Route path="/contacts" element={
						<>
							<Navbar />
							<Contacts />
						</>
					} />
					<Route path="/contact" element={
						<>
							<Navbar />
							<Contacts />
						</>
					} />
					<Route path="/services" element={
						<>
							<Navbar />
							<Services />
						</>
					} />
					<Route path="/gallery/food" element={
						<>
							<Navbar />
							<Gallery />
						</>
					} />
					<Route path="/gallery/coffee-shop" element={
						<>
							<Navbar />
							<CoffeeShop />
						</>
					} />
					<Route path="/gallery/bakery" element={
						<>
							<Navbar />
							<Bakery />
						</>
					} />
					<Route path="/gallery/catering-events" element={
						<>
							<Navbar />
							<CateringEvents />
						</>
					} />
					<Route path="/about/mission" element={
						<>
							<Navbar />
							<MissionValues />
						</>
					} />
					<Route path="/about/our-story" element={
						<>
							<Navbar />
							<OurStory />
						</>
					} />
					<Route path="/about/why-us" element={
						<>
							<Navbar />
							<WhyChooseUs />
						</>
					} />
					<Route path="/terms" element={
						<>
							<Navbar />
							<Terms />
						</>
					} />
				</Routes>
				<Footer />
			</div>
		</Router>
	)
}
