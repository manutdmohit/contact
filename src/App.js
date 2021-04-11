import React, { useEffect, useState } from "react";
import "./App.css";
import "./ContactCard";
import ContactCard from "./ContactCard";

const App = () => {
  // const contacts = [
  //   {
  //     avatarUrl: "https://via.placeholder.com/150",
  //     name: "Suraz KC",
  //     email: "kcsuraz@fakeid.com",
  //     age: 25,
  //   },
  //   {
  //     avatarUrl: "https://via.placeholder.com/150",
  //     name: "Keshav Jaishi",
  //     email: "keshavjaishi@fakeid.com",
  //     age: 27,
  //   },
  //   {
  //     avatarUrl: "https://via.placeholder.com/150",
  //     name: "Keshav Jaishi",
  //     email: "keshavjaishi@fakeid.com",
  //     age: 27,
  //   },
  //   {
  //     avatarUrl: "https://via.placeholder.com/150",
  //     name: "Dipendra Shah",
  //     email: "dipendrashah@fakeid.com",
  //     age: 27,
  //   },
  // ];

  const [results, setResults] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=4")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResults(data.results);
      });
  }, []);

  return (
    <div>
      {results.map((result, index) => {
        return (
          <ContactCard
            key={index}
            avatarUrl={result.picture.large}
            name={result.name.first}
            email={result.email}
            age={result.dob.age}
          />
        );
      })}
      {/* <ContactCard
        avatarUrl="https://via.placeholder.com/150"
        name="Suraz Kc"
        email="kcsuraz@fakeid.com"
        age={25}
      />
      <ContactCard
        avatarUrl="https://via.placeholder.com/150"
        name="Sushant Acharya"
        email="sushantacharya@fakeid.com"
        age={26}
      />
      <ContactCard
        avatarUrl="https://via.placeholder.com/150"
        name="Keshav Jaishi"
        email="keshavjaishi@fakeid.com"
        age={27}
      /> */}
    </div>
  );
};
export default App;
