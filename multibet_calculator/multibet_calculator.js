const win1m20= document.getElementById("win1m20");
const win1m21= document.getElementById("win1m21");
const win1m12= document.getElementById("win1m12");
const win1m02= document.getElementById("win1m02");
const win1m1= document.getElementById("win1m1");
const win1m2= document.getElementById("win1m2");
const win1m1m= document.getElementById("win1m1m");
const win1m2m= document.getElementById("win1m2m");

const win2m20= document.getElementById("win2m20");
const win2m21= document.getElementById("win2m21");
const win2m12= document.getElementById("win2m12");
const win2m02= document.getElementById("win2m02");
const win2m1= document.getElementById("win2m1");
const win2m2= document.getElementById("win2m2");
const win2m1m= document.getElementById("win2m1m");
const win2m2m= document.getElementById("win2m2m");

const win3m20= document.getElementById("win3m20");
const win3m21= document.getElementById("win3m21");
const win3m12= document.getElementById("win3m12");
const win3m02= document.getElementById("win3m02");
const win3m1= document.getElementById("win3m1");
const win3m2= document.getElementById("win3m2");
const win3m1m= document.getElementById("win3m1m");
const win3m2m= document.getElementById("win3m2m");

const textElement=document.getElementById("text");
const textElement1=document.getElementById("text1");
const reset=document.getElementById("reset");


let total=1;
let exact=0.25;
let winer=0.5;
let onemap=0.75;


win1m20.onclick = () => aumento(exact);
win1m21.onclick = () => aumento(exact);
win1m12.onclick = () => aumento(exact);
win1m02.onclick = () => aumento(exact);
win1m1.onclick = () => aumento(winer);
win1m2.onclick = () => aumento(winer);
win1m1m.onclick = () => aumento(onemap);
win1m2m.onclick = () => aumento(onemap);

win2m20.onclick = () => aumento(exact);
win2m21.onclick = () => aumento(exact);
win2m12.onclick = () => aumento(exact);
win2m02.onclick = () => aumento(exact);
win2m1.onclick = () => aumento(winer);
win2m2.onclick = () => aumento(winer);
win2m1m.onclick = () => aumento(onemap);
win2m2m.onclick = () => aumento(onemap);

win3m20.onclick = () => aumento(exact);
win3m21.onclick = () => aumento(exact);
win3m12.onclick = () => aumento(exact);
win3m02.onclick = () => aumento(exact);
win3m1.onclick = () => aumento(winer);
win3m2.onclick = () => aumento(winer);
win3m1m.onclick = () => aumento(onemap);
win3m2m.onclick = () => aumento(onemap);