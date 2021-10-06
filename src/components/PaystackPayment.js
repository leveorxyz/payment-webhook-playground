import { usePaystackPayment } from 'react-paystack';

const config = {
  reference: new Date().getTime().toString(),
  email: 'expelmahmud@gmail.com',
  amount: 20000,
  publicKey: 'pk_test_713bcb21dc58d4b28153758b43412415d45f7571',
};

export default function PaystackPayment() {
  const initializePayment = usePaystackPayment(config);

  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed');
  };

  return (
    <div>
      <button
        className="btn btn-danger btn-block"
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}
      >
        Paystack Payment
      </button>
    </div>
  );
}
