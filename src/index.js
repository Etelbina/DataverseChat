import {
  setRootElement,
  setRoutes,
  onURLChange,
} from "./router.js";
import { Welcome } from "./views/Welcome.js";
import {Home} from "./views/Home.js";
import IndividualChat from "./views/Individual.js";
import { GroupChat } from "./views/Group.js";
import NotFound from "./views/Notfound.js";
//import { HomeIconButton } from "./components/HomeIconButton.js";
//import IndividualChat from "./views/Individual.js";

const routes = {
  "/": Welcome,
  "/Home": Home,
  "/Individual": IndividualChat,
  "/Group": GroupChat,
  "/Notfound": NotFound,
};

const mainContainer = document.getElementById("root");

setRoutes(routes);
setRootElement(mainContainer);

document.addEventListener("DOMContentLoaded", (event) => {
  onURLChange(event.target.location.pathname);
});

