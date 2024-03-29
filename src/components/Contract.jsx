import loginBG from "../img/login-bg.jpeg";
import React, { useState, useEffect } from "react";
import "../custom.css";
import Logo from "./logo/Logo";
// import the txt file list to display as contract
import contractList from "../txt/mycontract.txt";

const Contract = () => {
  const [contract, setContract] = useState([]);

  const processData = (data) => {
    const items = data.split("\n"); // Split by new line character
    // Process the items as needed
    return items;
  };

  const fetchContractTxt = async () => {
    try {
      const response = await fetch(contractList);
      const data = await response.text();
      const items = processData(data);
      setContract(items);

      console.log(items);
    } catch (error) {
      console.error("Error reading the text file:", error);
    }
  };

  useEffect(() => {
    fetchContractTxt();
  }, []);

  return (
    <div className="relative">
      <div className="absolute transform translate-y-[120px] text-black text-[26px] font-bold z-10 mx-auto">
        Let's make a contract
      </div>

      <div className="font-bold absolute text-center transform translate-y-[220px] text-gray-800 text-[17px] z-10">
        I will
      </div>

      {/* here come logos for different social media platforms */}
      <div className="z-10 w-[300px] transform translate-y-[230px] mr-[-50px]"></div>

      <div className="absolute left-0 top-0 w-full flex flex-col justify-start">
        {/* backgound login img */}
        <img src={loginBG} className="h-screen w-full object-cover" />

        <ul className="list-disc transform translate-y-[-670px] ml-[24px]">
          {contract.map((eachLine) => (
            <li key={eachLine}>{eachLine}</li>
          ))}
        </ul>

        <button className="text-2xl uppercase font-bold shadow-lg py-4 transform translate-y-[-490px] w-[200px] self-center bg-white text-black rounded-lg">
          I agree
        </button>
      </div>
    </div>
  );
};

export default Contract;
