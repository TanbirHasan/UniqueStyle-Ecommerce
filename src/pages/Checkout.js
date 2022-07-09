import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSelector } from 'react-redux';
import auth from '../firebase.config';

const Checkout = () => {

    const [user] = useAuthState(auth)

   const firstnameref = useRef();
   const secondnameref = useRef();
 
   const addressref = useRef();
   const cityref = useRef();
   const postcoderef = useRef();
   const noteseref = useRef();
    
    const state = useSelector((state) => state.addItems);
    console.log(state);


    const handleSubmit = (e) => {
        e.preventDefault();
        const firstname = firstnameref.current.value;
        const lastname = secondnameref.current.value;
        const email = user.email;
        const address = addressref.current.value;
        const city = cityref.current.value;
        const postcode = postcoderef.current.value;
        const notes = noteseref.current.value;
        const products = state;
        const productprice = total;
    


        const Allinformation = {
          firstname,
          lastname,
          email,
          address,
          city,
          postcode,
          notes,
          products,
          productprice,
        };
          console.log(Allinformation);
           const url = "http://localhost:7000/order";

           fetch(url, {
             method: "POST",
             headers: {
               "content-type": "application/json",
             },
             body: JSON.stringify(Allinformation),
           })
             .then((res) => res.json())
             .then((result) => {
               console.log(result);
               alert("Your Order Placed Successfully");
               if(result){

               }
             });

    firstnameref.current.value = " ";
    secondnameref.current.value = " ";
    cityref.current.value = " ";
    addressref.current.value = " ";
    postcoderef.current.value = " ";
    noteseref.current.value = " ";
   




    }



    var total = 0;
    const itemList = (item) => {
         total = total + parseInt(item.price);
        return (
          <div class="mt-8">
            <div class="flex flex-col space-y-4">
              <div class="flex space-x-4">
                <div>
                  <img
                    src={item.img}
                    alt="image"
                    class="w-60"
                  />
                </div>
                <div>
                  <h2 class="text-xl font-bold">{item.title}</h2>
                  <p class="text-sm">{item.desc}</p>
                  <span class="text-red-600">Price</span>{item.price}
                </div>
                <div>
                 
                </div>
              </div>
            
            </div>
          </div>
        );

    }
    return (
        <div>
             <div class="container p-12 mx-auto">
            <div class="flex flex-col w-full px-0 mx-auto md:flex-row">
                <div class="flex flex-col md:w-full">
                    <h2 class="mb-4 font-bold md:text-xl text-heading ">Shipping Address
                    </h2>
                    <form class="justify-center w-full mx-auto" onSubmit={(e) => handleSubmit(e)}>
                        <div class="">
                            <div class="space-x-0 lg:flex lg:space-x-4">
                                <div class="w-full lg:w-1/2">
                                    <label for="firstName" class="block mb-3 text-sm font-semibold text-gray-500">First
                                        Name</label>
                                    <input name="firstName" ref={firstnameref} type="text" placeholder="First Name"
                                        class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                                </div>
                                <div class="w-full lg:w-1/2 ">
                                    <label for="firstName" class="block mb-3 text-sm font-semibold text-gray-500">Last
                                        Name</label>
                                    <input name="Last Name" ref={secondnameref} type="text" placeholder="Last Name"
                                        class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                                </div>
                            </div>
                            <div class="mt-4">
                                <div class="w-full">
                                    <label for="Email"
                                        class="block mb-3 text-sm font-semibold text-gray-500">Email</label>
                                    <input name="Last Name" value={user?.email} type="text" placeholder="Email"
                                        class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                                </div>
                            </div>
                            <div class="mt-4">
                                <div class="w-full">
                                    <label for="Address"
                                        class="block mb-3 text-sm font-semibold text-gray-500">Address</label>
                                    <textarea ref={addressref}
                                        class="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        name="Address" cols="20" rows="4" placeholder="Address"></textarea>
                                </div>
                            </div>
                            <div class="space-x-0 lg:flex lg:space-x-4">
                                <div class="w-full lg:w-1/2">
                                    <label for="city"
                                        class="block mb-3 text-sm font-semibold text-gray-500">City</label>
                                    <input name="city" ref={cityref} type="text" placeholder="City"
                                        class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                                </div>
                                <div class="w-full lg:w-1/2 ">
                                    <label for="postcode" class="block mb-3 text-sm font-semibold text-gray-500">
                                        Postcode</label>
                                    <input name="postcode" ref={postcoderef} type="text" placeholder="Post Code"
                                        class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                                </div>
                            </div>
                            <div class="flex items-center mt-4">
                                <label class="flex items-center text-sm group text-heading">
                                    <input type="checkbox"
                                        class="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1"/>
                                    <span class="ml-2">Save this information for next time</span></label>
                            </div>
                            <div class="relative pt-3 xl:pt-6"><label for="note"
                                    class="block mb-3 text-sm font-semibold text-gray-500"> Notes
                                    (Optional)</label><textarea name="note"
                                    ref={noteseref} class="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    rows="4" placeholder="Notes for delivery"></textarea>
                            </div>
                            <div class="mt-4">
                                <button
                                    class="w-full px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900"  type="submit">Process</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
                    <div class="pt-12 md:pt-0 2xl:ps-4">
                        <h2 class="text-xl font-bold">Order Summary : {state.length}
                        </h2>
                       {
                        state.map(itemList)
                       }
                        <div class="flex p-4 mt-4">
                           
                        </div>
                        <div
                            class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                            Subtotal<span class="ml-2">$40.00</span></div>
                        <div
                            class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                            Shipping Tax<span class="ml-2">$10</span></div>
                        <div
                            class="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                            Total<span class="ml-2">{total}</span></div>
                    </div>
                </div>
            </div>
        </div>
   
            
        </div>
    );
};

export default Checkout;