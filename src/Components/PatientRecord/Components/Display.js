import { useState } from "react";
import "./Display.css";
import Modal from "./Modal";
const Display = ({ contract, account }) => {
  const [data, setData] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const getdata = async () => {
    
    let dataArray;
    const Otheraddress = document.querySelector(".address").value;
    try {
      if (Otheraddress) {
        dataArray = await contract.display(Otheraddress);
        console.log("other address", dataArray);
      } else {
        dataArray = await contract.display(account);
      }
    } catch (e) {
      alert("You don't have access");
    }
    const isEmpty = Object.keys(dataArray).length === 0;

    if (!isEmpty) {
      const str = dataArray.toString();
      const str_array = await str.split(",");
      console.log("str",str);
      console.log("str_array",str_array);
      const images = str_array.map((item, i) => {
        return (
          <a href={`https://gateway.pinata.cloud/ipfs/${item.replace("ipfs://",'')}`} key={i} target="_blank" rel="#">
            <img
              key={i}
              src={`https://gateway.pinata.cloud/ipfs/${item.replace("ipfs://",'')}`}
              alt="new"
              className="image-list"
            ></img>
          </a>
        );
      });
      setData(images);
    } else {
      alert("No image to display");
    }
  };
  return (
    <>
      <div className="image-list">{data}</div>
      <input
        type="text"
        placeholder="Enter Address"
        className="address"
      ></input>
      
      {!modalOpen && (
        <button className="center button" onClick={() => setModalOpen(true)}>
          Share
        </button>
      )}
      {modalOpen && (
        <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
      )}
      
      <button className="center button" onClick={getdata}>
        Get Record
      </button>
    </>
  );
};
export default Display;