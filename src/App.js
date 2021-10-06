import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import PaymentModal from './components/PaymentModal';
import { Button } from 'react-bootstrap';
import StripePayment from './components/StripePayment';
import PaypalPayment from './components/PaypalPayment';
import FlutterwavePayment from './components/FlutterwavePayment';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activePayment, setActivePayment] = useState('stripe');

  return (
    <div className="container">
      <h1 className="text-center">Dokto Payment Testing Ground</h1>
      <div className="mt-5">
        <div className="d-flex justify-content-around">
          <Button
            onClick={() => {
              setActivePayment('stripe');
              setIsModalVisible(true);
            }}
          >
            Stripe Payment
          </Button>
          <Button
            variant="warning"
            onClick={() => {
              setActivePayment('paypal');
              setIsModalVisible(true);
            }}
          >
            Paypal Payment
          </Button>
          <Button
            variant="info"
            onClick={() => {
              setActivePayment('flutterwave');
              setIsModalVisible(true);
            }}
          >
            Flutterwave Payment
          </Button>
        </div>

        <PaymentModal
          show={isModalVisible}
          handleClose={() => setIsModalVisible(false)}
        >
          {activePayment === 'stripe' && <StripePayment />}
          {activePayment === 'paypal' && <PaypalPayment />}
          {activePayment === 'flutterwave' && <FlutterwavePayment />}
        </PaymentModal>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
}

export default App;
