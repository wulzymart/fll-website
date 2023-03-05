import {
  collection,
  doc,
  endBefore,
  getDocs,
  limit,
  limitToLast,
  onSnapshot,
  orderBy,
  query,
  startAfter,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import { db } from "@/firebase/firebase";
import TableGrid from "@/components/TableGrid";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Link from "next/link";
import { loggedOut } from "@/hooks/routes";
import CustomButton from "@/components/button";
import Input from "@/components/input";
import Modal from "@/components/Modal";
import { closeModal, openModal } from "@/modalcontrol";
import {
  EmailAuthProvider,
  getAuth,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth";
import { useRouter } from "next/router";

const CustomerPage = ({ currentUser }) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const [rows, setRows] = useState([]);
  const [customer, setCustomer] = useState();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstVisible, setFirstVisible] = useState("");
  const [lastVisible, setLastVisible] = useState("");
  const ordersRef = collection(db, "orders");
  const pageSize = 10;
  const queryOrders = query(
    ordersRef,
    where("customerId", "==", currentUser),
    orderBy("dateCreated", "asc"),
    limit(pageSize)
  );
  const nextOrders = query(
    ordersRef,
    where("station", "==", currentUser),
    orderBy("dateCreated", "asc"),
    startAfter(lastVisible),
    limit(pageSize)
  );
  const previousOrders = query(
    ordersRef,
    where("station", "==", currentUser),
    orderBy("dateCreated", "asc"),
    endBefore(firstVisible),
    limitToLast(pageSize)
  );
  const getQuery = async (type) => {
    const querySnapshot = await getDocs(type);
    if (!querySnapshot.empty) {
      setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
      setFirstVisible(querySnapshot.docs[0]);
      const tempData = [];
      querySnapshot.forEach((doc) => {
        tempData.push(doc.data());
      });
      setRows(tempData);
    } else setRows([]);
  };
  const router = useRouter();
  function getReceiverName(params) {
    return `${params.row.receiver.firstName || ""} ${
      params.row.receiver.lastName || ""
    }`;
  }
  function getReceiverAddress(params) {
    return `${params.row.receiver.address.streetAddress || ""} ${
      params.row.receiver.address.lga || ""
    } ${params.row.receiver.address.state || ""}`;
  }
  const columns = [
    {
      field: "id",
      headerName: "Tracking Id",

      width: 200,
      renderCell: (param) => {
        return <Link href={`/tracking/${param.value}`}>{param.value}</Link>;
      },
    },
    {
      field: "originStation",
      headerName: "Origin Station",

      width: 150,
    },

    {
      field: "destinationStation",
      headerName: "Destination Station",

      width: 150,
    },
    {
      field: "receiverName",
      headerName: "Receiver's Name",

      width: 150,
      valueGetter: getReceiverName,
    },
    {
      field: "receiverAddress",
      headerName: "Receiver's Address",

      width: 150,
      valueGetter: getReceiverAddress,
    },

    {
      field: "deliveryStatus",
      headerName: "Delivery Status",

      width: 150,
    },
    {
      field: "total",
      headerName: "Price",
      width: 150,
    },
  ];
  const changePassword = () => {
    const credential = EmailAuthProvider.credential(
      customer.email,
      oldPassword
    );
    reauthenticateWithCredential(user, credential)
      .then(() => {
        if (newPassword === confirmPassword) {
          updatePassword(user, newPassword).then(() => {
            alert("Password Update successful");
            closeModal("change-password");
            setNewPassword("");
            setOldPassword("");
            setConfirmPassword("");
          });
        }
      })
      .catch((error) => {
        alert("error updating password");
      });
  };
  //   const topUp = () => {
  //     let walletBalance = customer.walletBalance ? customer.walletBalance : 0;
  //     walletBalance = +walletBalance + +amount;
  //     const history = customer.history;
  //     history.push({
  //       info: `${amount}NGN was added to wallet by ${customer}`,
  //       time: today,
  //     });
  //     setDoc(
  //       customerRef,
  //       {
  //         walletBalance,
  //         history,
  //       },
  //       { merge: true }
  //     );
  //     closeModal("topUp");
  //     setDoc(doc(db, "income", paymentId), {
  //       id: paymentId,
  //       customerId: id,
  //       customerName: firstName + " " + lastName,
  //       businessName,
  //       amount,
  //       purpose: "Wallet Top-up",
  //       paymentMode,
  //       receiptInfo,
  //       dateMade: serverTimestamp(),
  //       processedBy: 'customer: '+ ' ' + firstName + " " + lastName,
  //       station: 'Online',
  //     });
  //   };

  useEffect(() => {
    if (!currentUser) return;
    const customerRef = doc(db, "customers", currentUser);
    const unsubsCribeCustomer = onSnapshot(customerRef, (snapshot) => {
      const data = snapshot.data();
      setCustomer(data);

      getQuery(queryOrders);
    });
    if (currentUser) return unsubsCribeCustomer;
  }, [currentUser]);
  return (
    <div>
      {customer && (
        <div className="flex flex-col gap-4 w-[90%] mx-auto my-10">
          <Header title="My Account" />
          <div className=" flex gap-4 justify-end flex-wrap">
            <CustomButton handleClick={() => openModal("change-password")}>
              Change Password
            </CustomButton>
            {/* <CustomButton>Top up</CustomButton> */}
            <CustomButton handleClick={() => router.push("/pickup-request")}>
              Order Pickup
            </CustomButton>
          </div>
          <Modal title="Change Password" id="change-password">
            <div className=" flex gap-4 mb-8">
              <p>Old Password:</p>
              <Input
                type="password"
                value={oldPassword}
                handleChange={(e) => setOldPassword(e.target.value)}
              />
            </div>
            <div className=" flex gap-4 mb-8">
              <p>New Password:</p>
              <Input
                type="password"
                value={newPassword}
                handleChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className=" flex gap-4 mb-8">
              <p>Confirm Password:</p>
              <Input
                type="password"
                value={confirmPassword}
                handleChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <CustomButton handleClick={() => changePassword()}>
              Submit
            </CustomButton>
          </Modal>
          <div className="w-full rounded-lg p-8 bg-blue-200 flex flex-wrap justify-around gap-y-4">
            <div className="min-w-52 flex flex-col gap-4">
              <p className="flex flex-col  gap-2 mb-2">
                <span className="font-bold">Customer Name:</span>
                <span>{customer.firstName + " " + customer.lastName}</span>
              </p>
            </div>
            <div className="min-w-52 flex flex-col gap-4">
              <p className="flex flex-col  gap-2 mb-2">
                <span className="font-bold">Business Name:</span>
                <span>{customer.businessName}</span>
              </p>
            </div>
            <div className="min-w-52 flex flex-col gap-4">
              <p className="flex flex-col   gap-2 mb-2">
                <span className="font-bold">Date Registered</span>
                <span>
                  {customer.dateCreated.toDate().toDateString().split(" ")[1] +
                    " " +
                    customer.dateCreated.toDate().toDateString().split(" ")[2] +
                    " " +
                    customer.dateCreated.toDate().toDateString().split(" ")[3]}
                </span>
              </p>
            </div>

            <div className="min-w-52 flex flex-col gap-4">
              <p className="flex flex-col  gap-2 mb-2">
                <span className="font-bold">Wallet Balance:</span>
                <span>{customer.walletBalance} NGN</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row  gap-4 ">
            <div className="flex flex-col bg-blue-400  w-full p-8 rounded-lg mb-4 gap-y-2">
              <p className="">
                <span>Phone Number: </span>
                <span>{customer.phoneNumber}</span>
              </p>
              <p className="">
                <span>Email: </span>
                <span>{customer.email}</span>
              </p>
            </div>
            <div className="flex flex-col bg-blue-400  w-full p-8 rounded-lg mb-4 gap-y-2">
              <p className="">Address:</p>
              <p className="">
                {customer.address.streetAddress + " " + customer.address.state}
              </p>
            </div>
          </div>

          {rows.length ? (
            <div className="mt-4 w-full">
              <h2 className="text-xl font-body mb-4">Recent Orders</h2>
              <TableGrid
                columns={columns}
                rows={rows}
                autoHeight
                hideFooter
                setSelectedId={() => {}}
              />
              <div className="bg-blue-100 p-4">
                <div className="flex gap-6 justify-end pr-8">
                  <button
                    className="flex items-center text-slate-800 "
                    onClick={() => getQuery(previousOrders)}
                  >
                    <GrFormPrevious />
                  </button>
                  <button
                    className="flex items-center text-slate-800 "
                    onClick={() => getQuery(nextOrders)}
                  >
                    <GrFormNext />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
};

export default loggedOut(CustomerPage);
