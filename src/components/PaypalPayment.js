import {
  PayPalScriptProvider,
  PayPalButtons,
  FUNDING,
} from '@paypal/react-paypal-js';

export default function PaypalPayment() {
  return (
    <PayPalScriptProvider options={{ 'client-id': 'test' }}>
      <PayPalButtons
        fundingSource={FUNDING.PAYPAL}
        style={{ layout: 'horizontal' }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: '5.00',
                },
              },
            ],
          });
        }}
        onApprove={(data) => console.log(data)}
        onCancel={(res) => console.log(res)}
      />
    </PayPalScriptProvider>
  );
}
