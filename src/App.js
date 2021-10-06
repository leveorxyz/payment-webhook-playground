import { useState } from 'react';
import StripePayment from './components/StripePayment';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PaymentModal from './components/PaymentModal';
import { Button } from 'react-bootstrap';
import PaypalPayment from './components/PaypalPayment';

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
            onClick={() => {
              setActivePayment('paypal');
              setIsModalVisible(true);
            }}
          >
            Paypal Payment
          </Button>
        </div>

        <PaymentModal
          show={isModalVisible}
          handleClose={() => setIsModalVisible(false)}
        >
          {activePayment === 'stripe' && <StripePayment />}
          {activePayment === 'paypal' && <PaypalPayment />}
        </PaymentModal>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
}

export default App;
