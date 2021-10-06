import { useState } from 'react';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { toast } from 'react-toastify';

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const CheckoutForm = () => {
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    try {
      setLoading(true);
      const result = await stripe.createToken(elements.getElement(CardElement));
      console.log(result);
      if (result?.error?.message) {
        toast.error(result?.error?.message);
        setLoading(false);
      } else {
        setLoading(false);
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement id="card-element" />
      <button
        type="submit"
        className="btn btn-primary"
        style={{ marginTop: '20px' }}
        disabled={!stripe || loading}
      >
        {loading ? 'processing...' : 'pay by card'}
      </button>
    </form>
  );
};

export default function StripePayment() {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}
