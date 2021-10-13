import {
  PayPalScriptProvider,
  PayPalButtons,
  FUNDING,
} from '@paypal/react-paypal-js';

export default function PaypalPayment() {
  return (
    <PayPalScriptProvider options={{ 'client-id': 'AVXS2Vs7A7-pEKTmamJt42cYtl_sZY5DEW86JUB-Go2kTJAuWGMzSHV9j7bVu1JsSucNFmWBkjvYPqoo' }}>
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
