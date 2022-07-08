import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import Loading from './Loading';


const stripePromise = loadStripe(
  "pk_test_51L3crVI20gp0i97m1j1eQCS8GypyBfb5Le13zVBryMdJHoy9KzJHwFQ9lMwNmrcZ1x0XJXLCOIexwyMdU9IQcB7500LuooR7ld"
);

const Payment = () => {
    const {id} = useParams();

     const url = `http://localhost:9500/order/${id}`;

     const { data, isLoading } = useQuery(["order", id], () =>
       fetch(url, {
         method: "GET",
       }).then((res) => res.json())
     );

      if (isLoading) {
        return <Loading></Loading>;
      }


     console.log(data);
    return (
      <div className="lg:ml-10 sm:ml-0">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h3 className="text-success text-2xl">Hello {data?.firstname},</h3>
            <h2 className="text-2xl font-semibold">Your Product Name :</h2>
            <h2 class="card-title">
              {" "}
              {data?.products.map((products) => (
                <ol>
                  <li>{products.title}</li>
                </ol>
              ))}
            </h2>

            <div class="card-actions justify-start">
              <p>Your Product Quantity : {data?.products.length}</p>

              <p>Pleasae Pay : {data?.productprice} $</p>
            </div>
            <div className="mt-5 w-full">
              <Elements stripe={stripePromise}>
                <CheckoutForm data={data} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Payment;