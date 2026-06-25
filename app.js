const state = {

salary:7500,

cash:3598,

debts:{
    mashreq:16190,
    mashreqPayment:1500,
    tabby:1426.67
},

fixed:{
    rent:1700,
    gym:529,
    phone:60,
    family:135,
    sister:310.24
},

budget:{
    food:800,
    transport:200,
    dates:300
}

};

function calculateRemaining(){

return state.salary
-state.fixed.rent
-state.fixed.gym
-state.fixed.phone
-state.fixed.family
-state.fixed.sister
-state.debts.mashreqPayment
-state.debts.tabby
-state.budget.food
-state.budget.transport
-state.budget.dates;

}

function dashboard(){

const remaining=calculateRemaining();

return`

<div class="card balance">

<p>Available Cash</p>

<h2>AED ${state.cash.toLocaleString()}</h2>

</div>

<div class="grid">

<div class="card">

<h3>Remaining</h3>

<p>AED ${remaining.toFixed(2)}</p>

</div>

<div class="card">

<h3>Mashreq</h3>

<p>AED ${state.debts.mashreqPayment}</p>

</div>

<div class="card">

<h3>Tabby</h3>

<p>AED ${state.debts.tabby}</p>

</div>

<div class="card">

<h3>Salary</h3>

<p>25th Monthly</p>

</div>

</div>

`;

}

function expenses(){

return`

<div class="card">

<h2>Expenses</h2>

<p>Coming next sprint.</p>

</div>

`;

}

function debts(){

return`

<div class="card">

<h2>Debt Overview</h2>

<p>Mashreq Balance</p>

<h3>AED ${state.debts.mashreq}</h3>

</div>

`;

}

function settings(){

return`

<div class="card">

<h2>Settings</h2>

<p>This page will contain editable values.</p>

</div>

`;

}

function showPage(page){

const content=document.getElementById("content");

switch(page){

case "dashboard":
content.innerHTML=dashboard();
break;

case "expenses":
content.innerHTML=expenses();
break;

case "debts":
content.innerHTML=debts();
break;

case "settings":
content.innerHTML=settings();
break;

}

}

showPage("dashboard");
