const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
      loading: true,
    },
    actions: {
      // Use getActions to call a function within a fuction
      createContact: async (fullName, email, phone, address) => {
        const response = await fetch(
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
        );
        if (response.ok) {
          const data = await response.json();
          fetch(
            "https://playground.4geeks.com/contact/agendas/billystorm01/contacts"
          )
            .then((resp) => resp.json())
            .then((data) => setStore({ contacts: data.contacts }));
        } else {
          console.log(`Error: ${response.status}, ${response.statusText}`);
          return {
            error: { status: response.status, statusText: response.statusText },
          };
        }
      },

      /*GET*/
      getContact: () => {
        fetch(
          "https://playground.4geeks.com/contact/agendas/billystorm01/contacts"
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.detail == 'Agenda "billystorm01gg" doesn\'t exist.') {
              fetch("https://playground.4geeks.com/todo/users/billystorm01", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
              })
                .then((resp) => {
                  return resp.json(); // (returns promise) Will try to parse the result as JSON and return a promise that you can .then for results
                })
                .then((data) => {
                  setStore({ contacts: [] });
                });
            } else {
              setStore({ contacts: data.contacts });
              setStore({ loading: false });
            }
          })
          .catch((error) => console.error(error));
      },

      deleteContact: async (id) => {
        const response = await fetch(
          "https://playground.4geeks.com/contact/agendas/billystorm01/contacts/" +
            id,
          {
            method: "DELETE",
          }
        );

        const data = await fetch(
          "https://playground.4geeks.com/contact/agendas/billystorm01/contacts"
        )
          .then((resp) => resp.json())
          .then((data) => setStore({ contacts: data.contacts }));
      },

      updateContact: async (id, fullName, phone, email, address) => {
        const response = await fetch(
          "https://playground.4geeks.com/contact/agendas/billystorm01/contacts/" +
            id,
          { method: "PUT",
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
        );
        if (response.ok) {
          const data = await response.json();
          fetch(
            "https://playground.4geeks.com/contact/agendas/billystorm01/contacts"
          )
            .then((resp) => resp.json())
            .then((data) => setStore({ contacts: data.contacts }));
        } else {
          console.log(`Error: ${response.status}, ${response.statusText}`);
          return {
            error: { status: response.status, statusText: response.statusText },
          };
        }
      },
    },
  };
};

export default getState;
