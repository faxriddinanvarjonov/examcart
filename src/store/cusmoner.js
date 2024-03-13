let defoultCustomer = {
  customers: [],
};

export let customers = (state = defoultCustomer, actions) => {
  console.log(actions);
  switch (actions.type) {
    case "ADD":
      return { ...state, customers: [...state.customers, actions.id] };
    case "REMOVE":
      return {
        customers: [
          state.customers.filter((customer) => customer != actions.id),
        ],
      };

    default:
      return state;
  }
};
