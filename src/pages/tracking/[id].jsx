import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import { db } from "@/firebase/firebase";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import Textarea from "@/components/textarea";

import { closeModal, openModal } from "@/modalcontrol";
import Modal from "@/components/Modal";

import { idGenerator } from "@/AppBrain";
import NotFound from "@/components/NotFound";
import Input from "@/components/input";
import CustomButton from "@/components/button";

const OrderPage = () => {
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const [identity, setIdentity] = useState("");
  const [reviews, setReviews] = useState([]);
  const [subReceiverName, setSubReceiverName] = useState("");
  const [subReceiverPhone, setSubReceiverPhone] = useState("");

  const rate = (rating) => {
    const stars = document.querySelectorAll(".star");
    stars.forEach((star, index) => {
      star.classList.contains("text-yellow-300") &&
        star.classList.remove("text-yellow-300");
      index < rating && star.classList.add("text-yellow-300");
    });
  };
  const router = useRouter();
  const [notFound, setNotFound] = useState(false);
  const id = router.query.id;

  const [order, setOrder] = useState();
  const [customer, setCustomer] = useState();
  const [Receiver, setReceiver] = useState();
  const [item, setItem] = useState();

  const handleSubmit = () => {
    const count = order.review?.count ? order.review.count + 1 : 1;
    const orderRef = doc(db, "orders", id);
    setDoc(orderRef, { review: { [identity]: true, count } }, { merge: true });
    const name =
      identity === "Sender"
        ? customer.firstName
        : identity === "Receiver" && Receiver.firstName;
    const reviewId = idGenerator(10);
    setDoc(
      orderRef,
      { review: { [identity]: true, count } },
      { merge: true }
    ).then(() =>
      setDoc(doc(db, "reviews", reviewId), {
        id: reviewId,
        orderId: id,
        reviewer: identity,
        rating,
        review,
        name,
        reaction: "",
        phoneNumber:
          identity === "Sender"
            ? customer.phoneNumber
            : identity === "Receiver" && Receiver.phoneNumber,
      }).then(() => openModal("sign-up-submitted"))
    );
  };
  useEffect(() => {
    if (!router.isReady) return;
    const orderRef = doc(db, "orders", id);
    const getOrder = onSnapshot(orderRef, (snapshot) => {
      if (snapshot.exists()) {
        setOrder(snapshot.data());
        setReceiver(snapshot.data().receiver);
        setItem(snapshot.data().item);
        const customerRef = doc(db, "customers", snapshot.data().customerId);
        const getCustomer = async () => {
          const customerSnapshot = await getDoc(customerRef);
          setCustomer(customerSnapshot.data());
        };
        getCustomer();
        if (snapshot.data().review) {
          const reviewRef = query(
            collection(db, "reviews"),
            where("orderId", "==", snapshot.data().id)
          );
          const getReviews = async () => {
            await getDocs(reviewRef).then((reviews) => {
              const temp = [];
              reviews.forEach((review) => temp.push(review.data()));
              setReviews(temp);
            });
          };
          getReviews();
        }
      } else setNotFound(true);
    });

    return getOrder;
  }, [router.isReady]);
  useEffect(() => {}, []);
  return !notFound ? (
    <div className="p-10 md:p-20">
      {order ? (
        <div className="flex flex-col gap-4 w-full">
          <Header title="Order Information" />
          <div className="w-full rounded-lg shadow-2xl p-8 bg-blue-200 flex flex-col md:flex-row md:flex-wrap justify-around gap-y-4">
            <div className="min-w-52 flex flex-col gap-4">
              <p className="flex flex-col  gap-2 mb-2">
                <span className="font-bold">Tracking ID:</span>
                <span>{order.id}</span>
              </p>
              <p className="flex flex-col   gap-2 mb-2">
                <span className="font-bold">Date Created:</span>
                <span>
                  {order.dateCreated.toDate().toDateString().split(" ")[1] +
                    " " +
                    order.dateCreated.toDate().toDateString().split(" ")[2] +
                    " " +
                    order.dateCreated.toDate().toDateString().split(" ")[3]}
                </span>
              </p>
            </div>
            <div className="min-w-52 flex flex-col gap-4">
              <p className="flex gap-2 flex-col  mb-2">
                <span className="font-bold">Origin Station:</span>
                <span>{order.originStation}</span>
              </p>
              <p className="flex gap-2 flex-col  mb-2">
                <span className="font-bold">Destination Station:</span>
                <span>{order.destinationStation}</span>
              </p>
            </div>
            <div className="min-w-52 flex flex-col gap-4">
              <p className="flex gap-2 flex-col  mb-2">
                <span className="font-bold">Delivery Type:</span>
                <span>{order.deliveryType}</span>
              </p>
              <p className="flex gap-2 flex-col  mb-2">
                <span className="font-bold">Service Type:</span>
                <span>{order.deliveryService}</span>
              </p>
            </div>
          </div>

          <div className="">
            <div className="w-full h-full">
              <div className=" bg-blue-500 shadow-2xl text-white w-full p-8 rounded-lg mb-4">
                <p className="text-xl font-semibold mb-8">Item Details</p>
                <div className="flex flex-wrap gap-x-16 gap-y-2 mb-2">
                  <p className="">
                    <span>Cartegory: </span>
                    <span>{item.cartegory}</span>
                  </p>
                  <p className="">
                    <span>Condition: </span>
                    <span>{item.condition}</span>
                  </p>
                  <p className="">
                    <span>Quantity: </span>
                    <span>{item.quantity}</span>
                  </p>
                  <p className="">
                    <span>Weight: </span>
                    <span>{item.weight}</span>
                  </p>
                  <p className="">
                    <span>Value: </span>
                    <span>{item.value} NGN</span>
                  </p>
                </div>
                <p>
                  <span>Description: </span>
                  <span>{item.description}</span>
                </p>
              </div>

              <div className=" bg-blue-500 shadow-2xl text-white w-full p-8 rounded-lg mb-4">
                <p className="text-xl font-semibold mb-8">
                  Tracking and Delivery
                </p>
                <div className="flex flex-wrap gap-x-8 gap-y-2 mb-2">
                  <p className="mb-6">
                    <span className="font-bold">Delivery Status: </span>
                    <span>{order.deliveryStatus}</span>
                  </p>
                </div>
                <p className="font-bold mb-4">Tracking Details:</p>
                <div className="flex flex-col gap-4 w-full">
                  {order.trackingInfo.map((item, i) => (
                    <div key={i} className="flex justify-between">
                      <p className="w-[50%]">
                        <span className="font-bold">Info:</span> {item.info}
                      </p>
                      <p>
                        <span className="font-bold">Time:</span> {item.time}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {order.subReceiverName && (
                <div className=" bg-blue-500 shadow-2xl text-white w-full p-8 rounded-lg mb-4">
                  <p className="text-lg font-medium">
                    You have assigned {order.subReceiverName} with phone number{" "}
                    {order.subReceiverPhone} to picked up the order. You will
                    get a confirmatory call from us before delivery
                  </p>
                </div>
              )}
              {order.receivedByName ? (
                <div className=" bg-blue-500 shadow-2xl text-white w-full p-8 rounded-lg mb-4">
                  <p className="text-lg font-medium">
                    {order.receivedByName} with phone number{" "}
                    {order.receivedByPhone} has picked up the order
                  </p>
                </div>
              ) : (
                ""
              )}
              {!order.subReceiverName && (
                <div className=" bg-blue-500 shadow-2xl text-white w-full p-8 rounded-lg mb-4">
                  <p className="text-xl font-semibold">Substitute Receiver</p>
                  <p className=" mb-8">
                    If you wont be available for pick up, please kindly provide
                    the name and the phone number of the person to pickup
                    onbehalf your.
                  </p>
                  <div className="flex flex-col md:flex-row gap-x-8 gap-y-4 justify-around">
                    <div className="flex gap-2 items-center">
                      <p className="font-bold mb-4">Name:</p>
                      <Input
                        value={subReceiverName}
                        name={subReceiverName}
                        handleChange={(e) => {
                          setSubReceiverName(e.target.value);
                          console.log(e.target.value);
                        }}
                      />
                    </div>
                    <div className="flex gap-2 items-center">
                      <p className="font-bold mb-4">Phone:</p>
                      <Input
                        value={subReceiverPhone}
                        name={subReceiverPhone}
                        handleChange={(e) => {
                          setSubReceiverPhone(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <Modal id="sub-receiver" title="Confirm Substitute Receiver">
                    <div className="text-gray-700 w-[300px] mx-auto md:w-[400px]">
                      <p className="text-center">
                        You are assigning {subReceiverName} with phone number{" "}
                        {subReceiverPhone} to pick up on your behalf. The
                        receiver will be contacted to verify this action.
                      </p>
                      <p className="mb-6 text-center">
                        Note that valid means of identification will be required
                        for pickup
                      </p>
                      <CustomButton
                        handleClick={() => {
                          setDoc(
                            doc(db, "orders", id),
                            { subReceiverName, subReceiverPhone },
                            { merge: true }
                          ).then(() => {
                            setSubReceiverName("");
                            setSubReceiverPhone("");
                            closeModal("sub-receiver");
                          });
                        }}
                      >
                        Proceed
                      </CustomButton>
                    </div>
                  </Modal>
                  <div className="flex justify-end mt-4">
                    <button
                      onClick={() => {
                        if (!subReceiverName || !subReceiverPhone) {
                          alert("please fill all required fields");
                          return;
                        }
                        openModal("sub-receiver");
                      }}
                      className="py-2 px-4 bg-red-500 rounded-lg"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              )}
              {order.review && (
                <div className=" bg-blue-500 shadow-2xl text-white w-full p-8 rounded-lg mb-4">
                  <p className="text-xl font-semibold mb-8">Reviews</p>
                  <div className="flex flex-col md:flex-row md:gap-8">
                    {reviews.map((review, index) => (
                      <div key={index} className="mb-6 md:w-1/2">
                        <p className="mb-4">Review by: {review.reviewer}</p>
                        <p className="mb-4">Rating: {review.rating}/5</p>
                        <p className="mb-4">Feedback: {review.review}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {!order.review || order.review?.count < 2 ? (
                <div className=" bg-blue-500 shadow-2xl text-white w-full p-8 rounded-lg mb-4">
                  <p className="text-xl font-semibold">Give us a feedback</p>
                  <p className=" mb-8">
                    Your feedback helps us grow, kindly write us a review
                  </p>

                  <div className=" flex gap-4 my-4 ">
                    <p>Identity:</p>
                    <select
                      className="rounded-lg font-openSans text-gray-800  py-2 px-3 outline-0 invalid:border-red-500 "
                      value={identity}
                      onChange={(e) => setIdentity(e.target.value)}
                    >
                      <option value="">Select one</option>
                      {!order.review?.Sender && (
                        <option value="Sender">Sender</option>
                      )}
                      {!order.review?.Receiver && (
                        <option value="Receiver">Receiver</option>
                      )}
                    </select>
                  </div>
                  <div className="flex flex-wrap gap-x-8 gap-y-2 mb-2">
                    <p className="mb-6 flex items-center">
                      <span className="font-bold pr-2">Rate us: </span>
                      <button
                        onClick={() => {
                          rate(1);
                          setRating(1);
                        }}
                      >
                        <span className="star">
                          <FaStar />
                        </span>
                      </button>
                      <button
                        onClick={() => {
                          rate(2);
                          setRating(2);
                        }}
                      >
                        <span className="star">
                          <FaStar />
                        </span>
                      </button>
                      <button
                        onClick={() => {
                          rate(3);
                          setRating(3);
                        }}
                      >
                        <span className="star">
                          <FaStar />
                        </span>
                      </button>
                      <button
                        onClick={() => {
                          rate(4);
                          setRating(4);
                        }}
                      >
                        <span className="star">
                          <FaStar />
                        </span>
                      </button>
                      <button
                        onClick={() => {
                          rate(5);
                          setRating(5);
                        }}
                      >
                        <span className="star">
                          <FaStar />
                        </span>
                      </button>
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <p className="font-bold mb-4">Review:</p>
                    <Textarea
                      value={review}
                      rows={5}
                      handleChange={(e) => {
                        setReview(e.target.value);
                      }}
                      placeholder="Please enter your review"
                    />
                  </div>
                  <div className="flex justify-end mt-4">
                    <button
                      onClick={() => {
                        if (!rating || !review || !identity) {
                          alert("please fill all required fields");
                          return;
                        }
                        handleSubmit();
                      }}
                      className="py-2 px-4 bg-red-500 rounded-lg"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              ) : (
                <div className=" bg-blue-500 shadow-2xl text-white w-full p-8 rounded-lg mb-4">
                  <p className="text-xl font-semibold">
                    Thanks for the feedbacks, we will work on it and give you a
                    call if necessary
                  </p>
                </div>
              )}
            </div>
            <Modal id="sign-up-submitted" title="Thank you">
              <div className=" p-8 flex flex-col justify-center text-center gap-4">
                <p className="text-gray-800 text-lg font medium">
                  Thank you for the feed back
                </p>
                <div className="flex justify-center ">
                  <Image src="/success.png" width="40" height="40" />
                </div>
              </div>
            </Modal>
          </div>
        </div>
      ) : (
        <p>loading</p>
      )}
    </div>
  ) : (
    <NotFound message="Item with tracking Number not available, Please confirm tracking Id" />
  );
};

export default OrderPage;
