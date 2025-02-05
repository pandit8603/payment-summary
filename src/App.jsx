import { useState } from "react";
import { Phone, Mail, Loader2, CheckCircle2, XCircle } from "lucide-react";
import logo from "./assets/download1.jpeg";
import "./App.css";

const PRODUCT = {
  name: "Enterprise API License",
  quantity: 1,
  pricePerUnit: 999.0,
};

function App() {
  const [paymentStatus, setPaymentStatus] = useState("idle");

  const subtotal = PRODUCT.quantity * PRODUCT.pricePerUnit;
  const gst = subtotal * 0.18;
  const total = subtotal + gst;

  const handlePayment = () => {
    setPaymentStatus("processing");

    setTimeout(() => {
      setPaymentStatus(Math.random() > 0.5 ? "success" : "failed");
    }, 10000);
  };

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="brand">
            <img src={logo} className="brand-icon" />
            <h1 className="brand-name">Floww APIs Private Limited</h1>
          </div>
        </div>
      </header>
      {/* main sectin */}
      <main className="main">
        <div className="card">
          <h2 className="card-title">Payment Summary</h2>
          {/* Payment Details */}
          <div className="payment-details">
            <div className="detail-row">
              <span className="detail-label">Product</span>
              <span className="detail-value">{PRODUCT.name}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Quantity</span>
              <span className="detail-value">{PRODUCT.quantity}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Price per unit</span>
              <span className="detail-value">
                ₹{PRODUCT.pricePerUnit.toFixed(2)}
              </span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Subtotal</span>
              <span className="detail-value">₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">GST (18%)</span>
              <span className="detail-value">₹{gst.toFixed(2)}</span>
            </div>
            <div className="detail-row total-row">
              <span>Total Amount</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>
          {/* Payment Action */}
          <div className="payment-actions">
            {paymentStatus === "idle" && (
              <button onClick={handlePayment} className="pay-button">
                Pay Now
              </button>
            )}
            {/* if user click on pay Now button then animated spinner will visible */}
            {paymentStatus === "processing" && (
              <div className="processing">
                <Loader2 className="spinner" />
                <p className="processing-message">
                  Payment-in-progress. Please do not close this window
                </p>
              </div>
            )}
            {/* if payment get success then this message will displayed  with one check circle*/}
            {paymentStatus === "success" && (
              <div className="processing">
                <CheckCircle2 className="status-icon success-icon" />
                <p className="status-message success-message">
                  Payment Successful!
                </p>
              </div>
            )}
            {/* if payment failed then this part will executed  */}
            {paymentStatus === "failed" && (
              <div className="processing">
                <XCircle className="status-icon error-icon" />
                <p className="status-message error-message">Payment Failed</p>
                <button
                  onClick={() => setPaymentStatus("idle")}
                  className="retry-button"
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      {/* footer section */}
      <footer className="footer">
        <div className="footer-content">
          <h3 className="footer-title">Contact Support</h3>
          <div className="contact-info">
            <div className="contact-item">
              <Phone className="contact-icon" />
              <span>+91 (800) 123-4567</span>
            </div>
            <div className="contact-item">
              <Mail className="contact-icon" />
              <span>support@flowwapis.com</span>
            </div>
          </div>
          <div className="copyright">
            <p>© 2024 Floww APIs Private Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
