import React, { useContext } from "react";
import { Context } from "../store/appContext";
import MikePhoto from "../../img/m101.jpg";

export const ContactCard = (contact) => {
  const { store, actions } = useContext(Context);
  console.log(contact);

  return (
    <div
      key={contact.id}
      className="container col-8 mt-5 border solid black d-flex p-3"
    >
      <div className="col-3">
        <img src={MikePhoto} alt="mike" />
      </div>
      <div className="col-5 ps-4">
        <p style={{ fontSize: "20px" }}>{contact.name}</p>
        <p>{contact.address}</p>
        <p>{contact.phone}</p>
        <p>{contact.email}</p>
      </div>
    </div>
  );
};
