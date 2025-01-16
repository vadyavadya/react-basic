
export const contacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];

export function messengerReducer(state, action) {
  switch (action.type) {
    case "changed_selection": {
      return { ...state, selectedId: action.id };
    }
    case 'changed_message':{
      return {
        ...state,
        message:{
          ...state.message,
          [action.id]:action.message
        }
      }
    }
    case 'sent_message':{
      return{
        ...state,
        message:{
          ...state.message,
          [action.id]:''
        }
      }
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export const initialState = {
  selectedId: 0,
  message: {
    0: "hello, Taylor",
    1: "hello, Alice",
    2: "hello, Bob",
  },
};