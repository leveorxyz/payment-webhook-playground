import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

export default function FlutterwavePayment() {
  const config = {
    public_key: 'FLWPUBK_TEST-cef158ec1b1213690fbeeccb930be993-X',
    tx_ref: Date.now(),
    amount: 100,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'expelmahmud@gmail.com',
      phonenumber: '+8801719058105',
      name: 'Dokto User',
    },
    // customizations: {
    //   title: 'my Payment Title',
    //   description: 'Payment for items in cart',
    //   logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    // },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div>
      <button
        className="btn btn-warning btn-block"
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              console.log(response);
              closePaymentModal();
            },
            onClose: () => {},
          });
        }}
      >
        Payment with flutterwave
      </button>
    </div>
  );
}
