export const keyName= "keyName";

// This function receives an argument but does not return anything
export const setApiKey = (key) => {
  // To save the KEY API to Local Storage
  localStorage.setItem("keyName", key);
};
// console.log(localStorage);

// This function returns but does not receive any arguments
export const getApiKey = () => {
  // To get the KEY API from Local Storage
  const myStorage = window.localStorage.getItem(keyName);
  return myStorage;
};