"use client";
import React, { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchingApi();
  }, []);

  const fetchingApi = () => {
    fetch("https://dummyjson.com/comments")
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setData(data.comments);
        setLoading(false);
      });
  };

  return (
    <div>
      <h1>Comments</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.map((item) => (
          <div key={item.id}>
            <h2 key={item.id}>{item.body}</h2>
            <h3>{item.user.fullName}</h3>
          </div>
        ))
      )}
    </div>
  );
};

export default page;
