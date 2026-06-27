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
    console.log(" Aries");
}

else if ((date>=20 && month=="apr")||(date<=20 && month=="may")){
    console.log("Taurus ");
}
else if ((date>=21 && month=="may")||(date<=20 && month=="jun")){
    console.log("Gemini ");}
else if ((date>=21 && month=="jun")||(date<=22 && month=="jul")){
    console.log("Cancer");
}
else if ((date>=23 && month=="jul")||(date<=22 && month=="aug")){
    console.log("Leo ");
}
else if ((date>=23 && month=="aug")||(date<=22 && month=="sep")){
    console.log("Virgo ");
}
else if ((date>=23 && month=="sep")||(date<=22 && month=="oct")){
    console.log("Libra ");
}
else if ((date>=23 && month=="oct")||(date<=21 && month=="nov")){
    console.log("Scorpio ");
}
else if ((date>=22 && month=="nov")||(date<=21 && month=="dec")){
    console.log("Sagittarius");
}
else if ((date>=22 && month=="dec")||(date<=19 && month=="jan")){
    console.log("Capricon");
}
else if ((date>=20 && month=="jan")||(date<=18 && month=="feb")){
    console.log("Aquarius");
}
else if ((date>=19 && month=="feb")||(date<=21 && month=="mar")){
    console.log("Pisces");
}
else{
    console.log("invalid date and month")
}
}