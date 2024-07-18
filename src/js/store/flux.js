const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
		contacts: [],
	},
    actions: {
      // Use getActions to call a function within a fuction
      createContact: (fullName, email, phone, address) => {
        fetch(
          "https://playground.4geeks.com/contact/agendas/billystorm01/contacts",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: fullName,
              phone: phone,
              email: email,
              address: address,
            }),
          }
        )
          .then((res) => {
            if (!res.ok) throw Error(res.statusText);
            return res.json();
          })
          .then((response) => console.log("Success:", response))
          .catch((error) => console.error(error));
      },
      getContact: () => {
        fetch(
          "https://playground.4geeks.com/contact/agendas/billystorm01/contacts"
        )
          .then((res) => res.json())
          .then((data) => {
            setStore({contacts: data.contacts})
          })
          .catch((error) => console.error(error));
      },
    },
  };
};

export default getState;
