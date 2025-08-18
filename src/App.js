import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Store from './pages/Store';
import ProductPage from './components/ProductPage';
import Checkout from "./pages/Billing";
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Return from './pages/Return';
import Shipping from './pages/Shipping';
import Cancellation from './pages/Cancellation';
import Checkouts from './pages/Checkouts';
import Landing from './pages/Landing';
import ThankYou from './pages/ThankYou';
import Aly from './pages/Aly';
import Karungali from './karungali/Karungali'
import { CartProvider } from './components/CartContext';
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import { LanguageProvider } from './context/LanguageContext';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import translations from './utils/data';
import { validateSlug, createProductUrl, slugToCategory } from './utils/urlSlugs';

AOS.init({
  delay: 300,
  duration: 900,
  easing: 'ease',
});

// WhatsApp floating component with bouncing animation
const WhatsAppFloating = () => {
  return (
    <>
      {/* CSS for bounce animation */}
      <style jsx>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        .whatsapp-float {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 60px;
          height: 60px;
          z-index: 1000;
          animation: bounce 2s infinite;
          cursor: pointer;
          background: linear-gradient(135deg, #25D366, #20B358);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
          transition: all 0.3s ease;
          border: none;
          outline: none;
        }
        
        .whatsapp-float:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 25px rgba(37, 211, 102, 0.6);
        }
        
        .whatsapp-float:active {
          transform: scale(0.95);
        }
        
        .whatsapp-icon {
          font-size: 32px;
          color: white;
          text-decoration: none;
        }
        
        @media (max-width: 768px) {
          .whatsapp-float {
            width: 56px;
            height: 56px;
            bottom: 20px;
            right: 20px;
          }
          
          .whatsapp-icon {
            font-size: 28px;
          }
        }
      `}</style>
      
      <a
        href="https://wa.me/919059821555?text=Hi! I'm interested in your Karungali products"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        title="Chat with us on WhatsApp"
        aria-label="Contact us on WhatsApp"
      >
        <span className="whatsapp-icon">
          📱
        </span>
      </a>
    </>
  );
};

// Alternative WhatsApp component with SVG icon
const WhatsAppFloatingWithSVG = () => {
  return (
    <>
      <style jsx>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        .whatsapp-float {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 60px;
          height: 60px;
          z-index: 1000;
          animation: bounce 2s infinite;
          cursor: pointer;
          background: linear-gradient(135deg, #25D366, #20B358);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
          transition: all 0.3s ease;
        }
        
        .whatsapp-float:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 25px rgba(37, 211, 102, 0.6);
        }
      `}</style>
      
      <a
        href="https://wa.me/919059821555?text=Hi! I'm interested in your Karungali products"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        title="Chat with us on WhatsApp"
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
        </svg>
      </a>
    </>
  );
};

// SEO-friendly Product Page Component with slug validation
const ProductPageWithSlug = () => {
  const { id, slug } = useParams();
  const productId = parseInt(id, 10);
  
  // Find the product in your data
  const product = translations.products.product.find(p => p.id === productId);
  
  if (!product) {
    return <Navigate to="/shop" replace />;
  }
  
  // Validate if the slug matches the product name
  if (!validateSlug(slug, product.name)) {
    // Redirect to correct URL with proper slug
    const correctUrl = createProductUrl(product.id, product.name);
    return <Navigate to={correctUrl} replace />;
  }
  
  return (
    <Layout>
      <ErrorBoundary>
        <ProductPage />
      </ErrorBoundary>
    </Layout>
  );
};

// Category Page Component
const CategoryPage = () => {
  const { categorySlug } = useParams();
  const categoryName = slugToCategory[categorySlug];
  
  if (!categoryName) {
    return <Navigate to="/shop" replace />;
  }
  
  return (
    <Layout>
      <ErrorBoundary>
        <Store category={categoryName} />
      </ErrorBoundary>
    </Layout>
  );
};

// Legacy product URL redirect component
const LegacyProductRedirect = () => {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  
  const product = translations.products.product.find(p => p.id === productId);
  
  if (!product) {
    return <Navigate to="/shop" replace />;
  }
  
  // Redirect to new SEO-friendly URL
  const newUrl = createProductUrl(product.id, product.name);
  return <Navigate to={newUrl} replace />;
};

function App() {
  return (
    <ErrorBoundary>
      <div className="App overflow-hidden">
        <CartProvider>
          <LanguageProvider>
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                <Route path="/sree_anjaneya" element={<ErrorBoundary><Landing /></ErrorBoundary>} />
                <Route path="/thank-you" element={<ErrorBoundary><ThankYou /></ErrorBoundary>} />
                <Route path="/astha_laxmi" element={<ErrorBoundary><Aly /> </ErrorBoundary>} />
                
                {/* All other routes with navbar and footer */}
                <Route path="/" element={
                  <Layout>
                    <ErrorBoundary><Home /></ErrorBoundary>
                  </Layout>
                } />
                <Route path="/about" element={
                  <Layout>
                    <ErrorBoundary><About /></ErrorBoundary>
                  </Layout>
                } />
                <Route path="/contact" element={
                  <Layout>
                    <ErrorBoundary><Contact /></ErrorBoundary>
                  </Layout>
                } />
                <Route path="/shop" element={
                  <Layout>
                    <ErrorBoundary><Store /></ErrorBoundary>
                  </Layout>
                } />
                
                {/* SEO-friendly product URLs with slugs */}
                <Route path="/product/:id/:slug" element={<ProductPageWithSlug />} />
                
                {/* SEO-friendly category URLs */}
                <Route path="/category/:categorySlug" element={<CategoryPage />} />
                
                {/* Legacy product URL redirect to new SEO format */}
                <Route path="/product/:id" element={<LegacyProductRedirect />} />
                
                <Route path="/billing" element={
                  <Layout>
                    <ErrorBoundary><Checkout /></ErrorBoundary>
                  </Layout>
                } />
                <Route path="/terms" element={
                  <Layout>
                    <ErrorBoundary><Terms /></ErrorBoundary>
                  </Layout>
                } />
                <Route path="/privacy" element={
                  <Layout>
                    <ErrorBoundary><Privacy /></ErrorBoundary>
                  </Layout>
                } />
                <Route path="/return" element={
                  <Layout>
                    <ErrorBoundary><Return /></ErrorBoundary>
                  </Layout>
                } />
                <Route path="/shipping" element={
                  <Layout>
                    <ErrorBoundary><Shipping /></ErrorBoundary>
                  </Layout>
                } />
                <Route path="/cancellation" element={
                  <Layout>
                    <ErrorBoundary><Cancellation /></ErrorBoundary>
                  </Layout>
                } />
                <Route path="/checkout" element={
                  <Layout>
                    <ErrorBoundary><Checkouts /></ErrorBoundary>
                  </Layout>
                } />
                <Route path="/karungali" element={
                  <Layout>
                    <ErrorBoundary><Karungali /></ErrorBoundary>
                  </Layout>
                } />
                
                {/* Additional SEO-friendly routes */}
                <Route path="/store" element={
                  <Layout>
                    <ErrorBoundary><Store /></ErrorBoundary>
                  </Layout>
                } />
                
                {/* Legacy route redirects for SEO */}
                <Route path="/product" element={<Navigate to="/shop" replace />} />
              </Routes>
              
              {/* WhatsApp Floating Button */}
              <WhatsAppFloatingWithSVG />
            </BrowserRouter>
          </LanguageProvider>
        </CartProvider>
      </div>
    </ErrorBoundary>
  );
}

export default App;
