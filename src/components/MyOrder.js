import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.config';
import {useNavigate,Link} from "react-router-dom"
import axios from 'axios';

const MyOrder = () => {
     const [user] = useAuthState(auth);
     const [items, setItems] = useState([]);
     const navigate = useNavigate();


      useEffect(() => {
        const getItem = async () => {
          const email = user.email;
          console.log(email);
          const url = `http://localhost:9500/myorder?email=${email}`;

          const { data } = await axios.get(url);
          setItems(data);
        };
        getItem();
      }, [user]);
      console.log(items);
    return (
      <div className="px-5">
        {items.length > 0 ? (
          <div class="overflow-x-auto">
            <table class="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>

                  <th>Product Name</th>
                  <th>Order Amount</th>
                  <th>Total Price</th>
                  <th>Action</th>
                  <th>Payment</th>
                  <th>Payment Status</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr>
                    <th>{index}</th>
                    <td>{item.firstname}</td>
                    <td>{item.email}</td>

                    <td>{item.products[0].title}</td>
                    <td>{item.products.length}</td>
                    <td>{item.productprice}</td>
                    <td>
                      {!item.paid && (
                        <button className="btn btn-xs text-white">
                          Cancel
                        </button>
                      )}
                    </td>

                    <td>
                      {item.productprice && !item.paid && (
                        <Link to={`/dashboard/payment/${item._id}`}>
                          <button className="btn btn-xs text-white">
                            Payment
                          </button>
                        </Link>
                      )}
                    </td>
                    <td>
                      {item.productprice && item.paid && (
                        <span className="text-success">Paid</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <span className="text-3xl font-semibold text-center my-10">
            You have no order.
          </span>
        )}
      </div>
    );
};

export default MyOrder;