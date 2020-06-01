import React from "react";
import ReactDOM from "react-dom";
import {add,sub,mul,div} from "./Calc";
ReactDOM.render(
<>
<h1>
<ul>
    <li>Sum of two no is {add(5,6)}</li>
    <li>Sub of two no is {sub(9,7)}</li>
    <li>Div of two no is {div(10,2)}</li>
    <li>Mul of two no is {mul(8,3)}</li>
</ul>

</h1>

</>,document.getElementById("root"));
