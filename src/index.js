import {addText} from "./js/script";
import {addImg} from "./js/script2";
import "./css/style.css";
import "./css/style2.css";
var buttonText=document.getElementById("buttonText");
buttonText.addEventListener('click',addText);

var buttonImg=document.getElementById("buttonImg");
buttonImg.addEventListener('click',addImg);