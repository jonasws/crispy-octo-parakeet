import React from "react";
import { render } from "react-dom";

import Presentation from "./presentation";


// Hack to ease use of new Android Wear watch!
/* window.addEventListener("click", (event) => {
 *   event.preventDefault();
 *   const keyEvent = new KeyboardEvent("keydown", {
 *     keyCode: 39 - event.button
 *   });
 *   window.dispatchEvent(keyEvent);
 * });
 *
 * window.addEventListener("contextmenu", (event) => {
 *   event.preventDefault();
 * });
 * */
render(<Presentation/>, document.getElementById("root"));
