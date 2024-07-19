import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";

function UpdateContact() {
    const {store, actions}=useContext(Context)
    const [fullName, setFullName]=useState("")
    const [email, setEmail]=useState("")
    const [phone, setPhone]=useState("")
    const [address, setAddress]=useState("")
    const { state } = useLocation()

    useEffect(()=>{
        handleSetValues()
    },[])

    function handleSetValues() {
        setFullName(state.contact.name)
        setPhone(state.contact.phone)
        setEmail(state.contact.email)
        setAddress(state.contact.address)
    }

    console.log(state)
  return (
    <div className="container col-10">
      <h1 className="text-center mb-4">Add New Contact</h1>
      <div className="mb-3">
         <label for="exampleFormControlInput1" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          className="form-control mb-2"
          id="fullNameFormText"
          placeholder="SpongeBob Squarepants"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control mb-2"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label for="exampleFormControlInput1" className="form-label">
          Phone
        </label>
        <input
          type="tel"
          className="form-control mb-2"
          id="telFormText"
          placeholder="911"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label for="exampleFormControlInput1" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control mb-2"
          id="addressFormText"
          placeholder="124 Conch St., Bikini Bottom"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div>
      <Link to="/" className="bg-primary text-white col-12 border none text-center" type="button" style={{fontSize: '20px'}} onClick={() => {actions.updateContact(state.contact.id, fullName, email, phone, address); }}>Save</Link>
      </div>
      <Link to="/">
        Back to create contacts
      </Link>
    </div>
  );
}

export default UpdateContact;
