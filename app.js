let state=JSON.parse(localStorage.getItem("debtzero"))||{
 salary:7500,cash:3598,
 debts:{mashreq:16190,mashreqPayment:1500,tabby:1426.67},
 fixed:{rent:1700,gym:529,phone:60,family:135,sister:310.24},
 budget:{food:800,transport:200,dates:300}
};
function save(){localStorage.setItem("debtzero",JSON.stringify(state));}
function remaining(){
 return state.salary-state.fixed.rent-state.fixed.gym-state.fixed.phone-state.fixed.family-state.fixed.sister-state.debts.mashreqPayment-state.debts.tabby-state.budget.food-state.budget.transport-state.budget.dates;
}
function dashboard(){
return `<div class="card balance"><small>Available Cash</small><h2>AED ${state.cash.toLocaleString()}</h2></div>
<div class="grid">
<div class="card"><h3>Remaining</h3><p>AED ${remaining().toFixed(2)}</p></div>
<div class="card"><h3>Mashreq</h3><p>AED ${state.debts.mashreqPayment}</p></div>
<div class="card"><h3>Tabby</h3><p>AED ${state.debts.tabby}</p></div>
<div class="card"><h3>Salary</h3><p>AED ${state.salary}</p></div>
</div>`;
}
function settings(){
return `<div class="card">
<label>Salary</label><input id="salary" value="${state.salary}">
<label>Cash</label><input id="cash" value="${state.cash}">
<button class="save" onclick="saveSettings()">Save</button></div>`;
}
function saveSettings(){
state.salary=Number(document.getElementById('salary').value);
state.cash=Number(document.getElementById('cash').value);
save();
showPage('dashboard');
}
function debts(){return `<div class="card"><h2>Mashreq</h2><p>AED ${state.debts.mashreq}</p></div>`;}
function expenses(){return `<div class="card"><h2>Expenses</h2><p>Coming in v0.4</p></div>`;}
function showPage(p){
const c=document.getElementById('content');
if(p==='dashboard') c.innerHTML=dashboard();
if(p==='settings') c.innerHTML=settings();
if(p==='debts') c.innerHTML=debts();
if(p==='expenses') c.innerHTML=expenses();
}
showPage('dashboard');
