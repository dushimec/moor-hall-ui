import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'
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
import MenuPage from './pages/Menu'
import ProductDetails from './pages/ProductDetails'
import BreakfastPage from './pages/Breakfast'
import LunchPage from './pages/Lunch'
import DinnerPage from './pages/Dinner'
import CocktailPage from './pages/Cocktail'
import CoffeeBeveragePage from './pages/CoffeeBeverage'
import Footer from './components/layout/Footer'
import { AdminProvider } from './context/AdminContext'
import { GuestInteractionProvider } from './context/GuestInteractionContext'
import CheckoutModal from './components/guest/CheckoutModal'
import ReservationModal from './components/guest/ReservationModal'
import CateringModal from './components/guest/CateringModal'
import EventModal from './components/guest/EventModal'
import SuccessModal from './components/guest/SuccessModal'
// Admin components
import AdminLogin from './components/Authantications/AdminLogin'
import AdminRegister from './components/Authantications/AdminRegister'
import AdminLayout from './components/admin/Layout/AdminLayout'
import DashboardPage from './components/admin/Dashboard/DashboardPage'
import OrderManagement from './components/admin/Orders/OrderManagement'
import PaymentManagement from './components/admin/Payments/PaymentManagement'
import WhatsAppManagement from './components/admin/WhatsApp/WhatsAppManagement'
import ReservationManagement from './components/admin/Reservations/ReservationManagement'
import CateringManagement from './components/admin/Catering/CateringManagement'
import MenuManagement from './components/admin/Menu/MenuManagement'
import CategoryManagement from './components/admin/Categories/CategoryManagement'
import ContentManagement from './components/admin/Content/ContentManagement'
import ReportsPage from './components/admin/Reports/ReportsPage'
import SettingsPage from './components/admin/Settings/SettingsPage'
// Protected route
import ProtectedRoute from './components/layout/ProtectedRoute'

// Helper component to conditionally show Footer
const ConditionalFooter: React.FC = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  
  if (isAdminRoute) {
    return null;
  }
  return <Footer />;
};

export default function App() {
	return (
		<Provider store={store}>
			<AdminProvider>
				<GuestInteractionProvider>
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
								<Route path="/menu" element={
									<>
										<Navbar />
										<MenuPage />
									</>
								} />
								<Route path="/menu/Breakfast" element={
									<>
										<Navbar />
										<BreakfastPage />
									</>
								} />
								<Route path="/menu/*" element={
									<>
										<Navbar />
										<MenuPage />
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
								<Route path="/product" element={
									<>
										<Navbar />
										<ProductDetails />
									</>
								} />
								
								/* Admin Routes - No Navbar or Footer for admin area */
								<Route path="/admin/login" element={
									<>
										<AdminLogin />
									</>
								} />
								<Route path="/admin/register" element={
									<>
										<AdminRegister />
									</>
								} />
								<Route path="/admin" element={
																	<ProtectedRoute>
																		<AdminLayout />
																	</ProtectedRoute>
																}
																>
																	<Route index element={<Navigate to="dashboard" replace />} />
																	<Route path="dashboard" element={<DashboardPage />} />
																	<Route path="orders" element={<OrderManagement />} />
																	<Route path="payments" element={<PaymentManagement />} />
																	<Route path="whatsapp" element={<WhatsAppManagement />} />
																	<Route path="reservations" element={<ReservationManagement />} />
																	<Route path="catering" element={<CateringManagement />} />
																	<Route path="menu" element={<MenuManagement />} />
																	<Route path="categories" element={<CategoryManagement />} />
																	<Route path="content" element={<ContentManagement />} />
																	<Route path="reports" element={<ReportsPage />} />
																	<Route path="settings" element={<SettingsPage />} />
																</Route>
															</Routes>
														{/* Footer - only shown on non-admin routes */}
						<ConditionalFooter />
						{/* Guest Interaction Modals */}
						<CheckoutModal />
						<ReservationModal />
						<CateringModal />
						<EventModal />
						<SuccessModal />
					</div>
				</Router>
				</GuestInteractionProvider>
			</AdminProvider>
		</Provider>
	)
}