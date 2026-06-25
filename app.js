let state=JSON.parse(localStorage.getItem('debtzero'))||{
salary:7500,cash:3598,
expenses:[]
};
let page='home';
function save(){localStorage.setItem('debtzero',JSON.stringify(state));}
function render(){
const c=document.getElementById('content');
if(page==='home'){
let spent=state.expenses.reduce((a,b)=>a+b.amount,0);
c.innerHTML=`<div class="card"><h2>Cash</h2><h1>AED ${state.cash-spent}</h1></div>
<div class="card"><b>Total Expenses:</b> AED ${spent}</div>`;
}else if(page==='expenses'){
let rows=state.expenses.map(e=>`<li>${e.category}: AED ${e.amount} - ${e.note}</li>`).join('');
c.innerHTML=`<div class="card">
<input id="amt" type="number" placeholder="Amount">
<select id="cat"><option>Food</option><option>Transport</option><option>Date</option><option>Other</option></select>
<input id="note" placeholder="Description">
<button onclick="addExpense()">Add Expense</button>
</div>
<div class="card"><ul>${rows||'<li>No expenses yet</li>'}</ul></div>`;
}else{
c.innerHTML=`<div class="card">
<label>Salary</label><input id="sal" value="${state.salary}">
<label>Cash</label><input id="cash" value="${state.cash}">
<button onclick="saveSettings()">Save</button></div>`;
}}
function addExpense(){
const e={amount:Number(amt.value),category:cat.value,note:note.value};
if(!e.amount)return;
state.expenses.push(e);save();render();
}
function saveSettings(){
state.salary=Number(sal.value);state.cash=Number(cash.value);save();page='home';render();
}
render();
