import React, { useState, useEffect } from "react";
import Header from "../Header";
import ContactList from "../ContactList";

const API =
  "https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json";

const App = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [foundData, setFoundData] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong.");
        }
      })
      .then((data) => {
        const sortedData = data.sort((a, b) =>
          a.last_name > b.last_name ? 1 : -1
        );
        setData(sortedData);
        setFoundData(sortedData);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {error ? (
        <p>{error.message}</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : (
        data && (
          <>
            <Header data={data} setFoundData={setFoundData} />
            <ContactList data={data} foundData={foundData} />
          </>
        )
      )}
    </>
  );
};

export default App;
