import { db } from "@/firebase/firebase";
import {
  collection,
  getDocs,
  query,
  Timestamp,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";

export function getJobs(Component) {
  return function GetJobs(props) {
    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const date = new Date().toDateString();
    const today = new Date(date);
    useEffect(() => {
      const getJobs = async () => {
        getDocs(
          query(
            collection(db, "jobs"),
            where("closingDate", ">=", Timestamp.fromDate(today))
          )
        ).then((snapshots) => {
          const tempData = [];
          snapshots.forEach((snapshot) => tempData.push(snapshot.data()));
          setJobs(tempData);
          setLoading(false);
        });
      };
      getJobs();
    }, [loading]);
    if (loading) return <p>loading</p>;
    return <Component jobs={jobs} {...props} />;
  };
}
