import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/contactCard.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      {store.contacts.length != 0 &&
        store.contacts.map((contact) => {
          return <ContactCard key={contact.id} contact={contact} />;
        })}
    </div>
  );
};
