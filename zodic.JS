let date = Number(prompt("enter a date"));
let month =prompt("enter month");
if((month=="feb" &&(date<1 ||date>29))||(month=="apr" &&(date<1 ||date>30))||(month=="jun" &&(date<1 ||date>30))||
(month=="sep" &&(date<1 ||date>30))||(month=="nov" &&(date<1 ||date>30))||(month=="jan" &&(date<1 ||date>31))||
(month=="mar" &&(date<1 ||date>31))||(month=="may" &&(date<1 ||date>31))||(month=="jul" &&(date<1 ||date>31))||
(month=="aug" &&(date<1 ||date>31))||(month=="oct" &&(date<1 ||date>31))||(month=="dec" &&(date<1 ||date>31))){
    console.log("invalid date in this month");
}
else{

if((date>=21 && month=="mar")||(date<=19 && month=="apr")){
    console.log("Arises (Mesh)♈");
}

else if ((date>=20 && month=="apr")||(date<=20 && month=="may")){
    console.log("Taurus (Vrishabh) ♉ ");
}
else if ((date>=21 && month=="may")||(date<=20 && month=="jun")){
    console.log("Gemini (Mithun)♊ ");}
else if ((date>=21 && month=="jun")||(date<=22 && month=="jul")){
    console.log("Cancer (Kark) ♋");
}
else if ((date>=23 && month=="jul")||(date<=22 && month=="aug")){
    console.log("Leo (Singh)♌ ");
}
else if ((date>=23 && month=="aug")||(date<=22 && month=="sep")){
    console.log("Virgo (Kanya)♍");
}
else if ((date>=23 && month=="sep")||(date<=22 && month=="oct")){
    console.log("Libra (Tula) ♎ ");
}
else if ((date>=23 && month=="oct")||(date<=21 && month=="nov")){
    console.log("Scorpio (Vrishchik)🦂 ");
}
else if ((date>=22 && month=="nov")||(date<=21 && month=="dec")){
    console.log("Sagittarius (Dhanu)♐");
}
else if ((date>=22 && month=="dec")||(date<=19 && month=="jan")){
    console.log("Capricon (Makar)♑");
}
else if ((date>=20 && month=="jan")||(date<=18 && month=="feb")){
    console.log("Aquarius (Kumbh)♒");
}
else if ((date>=19 && month=="feb")||(date<=21 && month=="mar")){
    console.log("Pisces (Meen)♓");
}
else{
    console.log("invalid date and month")
}
}