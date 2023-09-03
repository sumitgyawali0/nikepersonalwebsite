import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Routes instead of Switch
import PreLoader from './components/PreLoader';
import nikeLogo from './assets/nike-logo-png-black-icon-white-background-large.png';
import videoBackground from './assets/loading page video.mp4';
import shoppage from './assets/shoppage1.mp4';
import React, { useState } from 'react';
import checkoutvideo from './assets/shoefallmain.mp4'

function HomePage() {
  return (
    <div className="App">
      <video className="background-video" autoPlay loop muted>
        <source src={videoBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <div className="shop-now-button">
          <Link to="/about" className="big-button">Shop Now</Link>
        </div>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="about-page">
      <div className="bottom-content"> 
        <h2>NIKE ONEONTA</h2>
        <Link to="/products" className="buy-now-button"> 
          Buy Now
        </Link>
      </div>
      <video className="background-video" autoPlay loop muted>
        <source src={shoppage} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav className="navbar">
        <div className="menu-logo">☰</div>
        <div className="logo-container">
          <img src={nikeLogo} alt="Nike Logo" className="logo-image" />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Contact</a></li>
          <li><Link to="/store">Store</Link></li>
        </ul>
      </nav>
      <PreLoader />
      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </Router>
  );
}

function ProductPage() {
  return (
    <div className="product-page">
      <div className="left-content">
        <iframe
          src="https://my.spline.design/untitled-1a301bb2856db3d84dde1e64d22c76a6/"
          title="Spline Design"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
        />
      </div>
      <div className="right-content">
        <h1>Nike Oneonta Next Nature</h1>
        <p>$100</p>
        <div className="product-details">
          <div class="size-select">
            <label for="size">Select Size:</label>
            <select id="size">
              <option value="4">Size 4</option>
              <option value="5">Size 5</option>
              <option value="6">Size 6</option>
              <option value="7">Size 7</option>
              <option value="8">Size 8</option>
            </select>
          </div>
          <p>
            From trails to rivers to trees, these durable sandals are ready to make adventuring fun—with special thanks to their rugged tread. The Oneonta name honours the majestic falls that flow near the Columbia River in Oregon (Nike's home state). Strap in with the plush webbing system, quickly personalise your fit with an elastic cord and cinch on the heel. Time to get wilding.
          </p>
          <h3>Benefits</h3>
          <ul>
            <li>Using insight from our trail teams and the Nike Sports Research Lab (NSRL), plush cushioning is strategically placed on the straps for a comfortable fit that stays in place.</li>
            <li>Adjustable straps and a heel toggle let you personalise the fit.</li>
            <li>A contoured footbed provides support for your foot while foam underneath keeps it comfortable from trails to city streets.</li>
            <li>The strategic placement of the lugs on the outsole provides traction from the mud to the river rock.</li>
          </ul>
        </div>

        <Link to="/checkout" className="add-to-bag-button">Add to Bag</Link>
      </div>


    </div>
  );
}

function CheckoutPage() {
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 100;
  const totalAmount = pricePerItem * quantity;

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  const handlePayNowClick = () => {
    
    window.location.href = 'https://esewa.com.np/#/home';
  };

  
  const isVideoLinked = !!checkoutvideo;

  return (
    <div className="checkout-page">
      <div className="checkout-left">
        <div className="custom-h1">CHECKOUT</div>
        <div className="product-details">
          <div className="custom-h2">Nike Oneonta Next Nature</div>
          <label htmlFor="quantity">Select Quantity:</label>
          <select
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <p className="custom-p">Price per item: $100</p>
        </div>
        <div className="order-summary">
          <div className="custom-h3">Order Summary</div>
          <p>Product: Nike Oneonta Next Nature</p>
          <p>Quantity: {quantity}</p>
          <p>Total Amount: ${totalAmount}</p>
          <button className="pay-now-button" onClick={handlePayNowClick}>
            Pay Now
          </button>
        </div>
      </div>
      <div className="checkout-right">
        {isVideoLinked ? (
          <video className="checkout-video" autoPlay loop muted preload="auto">
            <source
              src={checkoutvideo} 
              type="video/mp4"
              onError={(e) => {
                e.target.style.display = 'none'; 
              }}
            />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Video is not linked. Please check the video source.</p>
        )}
      </div>
    </div>
  );
}

export default App;
