import IMask from "imask";

var element = document.getElementById("element");
var maskOptions = {
    mask: "000-000-000",
};

var mask = IMask(element, maskOptions);