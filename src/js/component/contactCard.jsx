import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import MikePhoto from "../../img/m101.jpg";
import { Link } from "react-router-dom";

export const ContactCard = (contact) => {
  const { store, actions } = useContext(Context);
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, [loading]);

  const handleLoading = () => {
    if (loading == true) setLoading(false);
    else if (loading == false) setLoading(true);
  };

  return (
    <div
      key={contact.contact.id}
      className="container col-8 mt-5 border solid black d-flex p-3"
    >
      <div className="col-3 my-auto ms-2 me-2">
        <img
          src={MikePhoto}
          alt="mike"
          style={{ height: "200px", width: "200px" }}
        />
      </div>
      <div className="col-5 ms-2">
        <p style={{ fontSize: "20px" }}>{contact.contact.name}</p>
        <div className="d-flex">
          <i className="fas fa-map-marker-alt pt-1 pe-1"></i>
          <p>{contact.contact.address}</p>
        </div>
        <div className="d-flex">
          <i className="fas fa-phone pt-1 pe-1"></i>
          <p>{contact.contact.phone}</p>
        </div>
        <div className="d-flex">
          <i className="fas fa-envelope pt-1 pe-1"></i>
          <p>{contact.contact.email}</p>
        </div>
      </div>
      <div className="justify-content-end col-4 text-right d-flex pe-5">
        <i
          type="button"
          onClick={() => {
            actions.deleteContact(contact.contact.id);
            handleLoading();
          }}
          className="fas fa-trash-alt pe-1 pt-1"
        ></i>
        <Link
          to="/updatecontact"
          state={{ contact: contact.contact }}
          style={{ color: "black" }}
        >
          <i
            type="button"
            onClick={() => {
              actions.updateContact(contact.contact.id);
              handleLoading();
            }}
            className="fas fa-pencil-alt ps-1"
          ></i>
        </Link>
      </div>
    </div>
  );
};
