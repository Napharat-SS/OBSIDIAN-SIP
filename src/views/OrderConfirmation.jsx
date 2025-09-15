import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const OrderConfirmation = () => {
  const navigate = useNavigate();
  const { orderId } = useParams();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ดึงข้อมูล order จาก backend
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login"); // redirect ไป login ถ้าไม่เจอ token
          return;
        }
        const res = await fetch(`/api/orders/${orderId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          const errData = await res.json();
          throw new Error(errData.message || "Failed to fetch order data");
        }

        const data = await res.json();
        setOrder(data.order);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId, navigate]);

  // Loading State
  if (loading) {
    return (
      <div className="bg-[#0f0f10] min-h-screen flex items-center justify-center text-gray-300">
        <p className="text-xl">Loading your order...</p>
      </div>
    );
  }

  // Error State
  if (error || !order) {
    return (
      <div className="bg-gradient-to-r from-[#000000] to-[#341f01] min-h-screen px-4 py-10">
        <div className="text-center text-[#3F3C38] p-6 rounded-lg bg-stone-300 bg-opacity-70">
          <h1 className="text-4xl font-bold">Error!</h1>
          <p className="mt-4">{error || "No order data found."}</p>
          <button
            onClick={() => navigate("/checkout")}
            className="mt-6 bg-[#3F3C38] text-[#FFFFFF] px-6 py-3 rounded-xl hover:text-lg sm:hover:text-2xl hover:font-bold hover:scale-105 transition-all"
          >
            Go to Checkout
          </button>
        </div>
      </div>
    );
  }

  // Function แปลงวันที่จาก createdAt
  const getOrderDate = () => {
    if (order.createdAt) {
      const date = new Date(order.createdAt);
      const options = { year: "numeric", month: "long", day: "numeric" };
      return date.toLocaleDateString("en-US", options);
    }
    return "N/A";
  };

  const isDelivery = order.deliveryFee > 0;

  const handleTrackOrder = () => {
    navigate("/profile/my-orders");
  };

  return (
    <div className="bg-[#0f0f10] bg-cover bg-no-repeat bg-center bg-fixed min-h-screen px-4 py-10 text-gray-300">
      <div className="min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT: Customer Info */}
          <div className="bg-[#341f01] shadow-md rounded-2xl p-6 relative text-gray-300">
            <h1 className="text-4xl font-bold mb-4">
              Thank you for your purchase!
            </h1>
            <p className="pt-4 pb-7 mb-6 text-sm text-gray-300 text-xl">
              Your order will be processed based on the selected order type and
              your specified time. You will receive a notification once it is
              ready or on its way.
            </p>

            <div className="mb-6">
              <h2 className="text-3xl text-gray-300 font-semibold mb-2">
                Billing address
              </h2>
              <p className="text-xl">
                <strong>Name:</strong> {order.customerInfo?.firstName}{" "}
                {order.customerInfo?.lastName}
              </p>
              <p className="text-xl">
                <strong>Address:</strong> {isDelivery ? order.address : "N/A"}
              </p>
              <p className="text-xl">
                <strong>Phone:</strong> {order.customerInfo?.phoneNumber}
              </p>
              <p className="text-xl">
                <strong>Email:</strong> {order.customerInfo?.email}
              </p>
              <p className="text-l mt-4">
                <strong>Note:</strong> {order.note || "N/A"}
              </p>
            </div>

            <button
              onClick={handleTrackOrder}
              className="w-full bg-[#c58c4ce6] text-black py-2 rounded-2xl hover:bg-[#ddb07ee6] transition-colors duration-300 text-2xl font-medium focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Track Your Order
            </button>
          </div>

          {/* RIGHT: Order Summary */}
          <div className="bg-[#341f01] shadow-md rounded-2xl p-6 relative">
            <h2 className="text-2xl text-gray-300 font-bold mb-7">
              Order Summary
            </h2>

            <div className="grid grid-cols-3 text-sm text-gray-300 mb-4">
              <div>
                <strong>Date</strong>
                <br />
                {getOrderDate()}
              </div>
              <div>
                <strong>Order Number</strong>
                <br />
                {order._id}
              </div>
              <div>
                <strong>Payment Method</strong>
                <br />
                Mobile Banking
              </div>
            </div>

            <div className="border-t border-b divide-y">
              {order.basketItems.map((item) => (
                <div key={item.productId} className="flex items-center py-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-300">{item.name}</h3>
                    <p className="text-sm text-gray-300">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <div className="font-semibold text-gray-300">
                    {item.price * item.quantity}.00฿
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 text-md text-gray-300 space-y-1">
              <div className="flex justify-between">
                <span>
                  <strong>Sub Total</strong>
                </span>
                <span>
                  <strong>฿{order.subtotal}.00</strong>
                </span>
              </div>

              {isDelivery && (
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>฿{order.deliveryFee}.00</span>
                </div>
              )}

              <div className="flex justify-between font-bold pt-2 border-t mt-8">
                <span className="pt-4 text-xl">Order Total</span>
                <span className="pt-4 text-xl">฿{order.total}.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
