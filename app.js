function value(id){

return Number(document.getElementById(id).value)||0;

}

function calculate(){

const salary=value("salary");

const totalExpenses=

value("rent")+
value("mashreq")+
value("tabby")+
value("gym")+
value("phone")+
value("family")+
value("sister")+
value("food")+
value("transport")+
value("date");

const remaining=salary-totalExpenses;

document.getElementById("remaining").innerHTML=
"Remaining Cash: AED "+remaining.toFixed(2);

let recommendation="";

if(remaining<500){

recommendation="⚠ Keep your Mashreq payment lower.";

}

else if(remaining<1000){

recommendation="🙂 You're okay, but avoid extra spending.";

}

else{

recommendation="✅ You're safe this month.";

}

document.getElementById("safe").innerHTML=recommendation;

}

calculate();
