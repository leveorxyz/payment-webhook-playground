import { useState } from 'react';
import StripePayment from './components/StripePayment';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PaymentModal from './components/PaymentModal';
import { Button } from 'react-bootstrap';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className="container">
      <h1>Dokto Payment Testing Ground</h1>
      <div className="mt-5">
        <div>
          <Button onClick={() => setIsModalVisible(true)}>
            Stripe Payment
          </Button>
        </div>

        <PaymentModal
          show={isModalVisible}
          handleClose={() => setIsModalVisible(false)}
        >
          <StripePayment />
        </PaymentModal>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
