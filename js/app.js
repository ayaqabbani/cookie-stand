'use strict';
function Branch(location, mincustomers, maxcustomers, avgcookies){
this.location = location;
this.mincustomers = mincustomers;
this.maxcustomers = maxcustomers;
this.avgcookies = avgcookies;
this.randomcusomers = [];
this.cookieaverage = [];
this.totalrowsum = 0;
};

let hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
let hoursTotal=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let Seattle = new Branch('Seattle', 23, 65, 6.3);
let Tokyo = new Branch('Tokyo', 3, 24, 1.2);
let Dubai = new Branch('Dubai', 11, 38, 3.7);
let Paris = new Branch('paris', 20, 38, 2.3);
let Lima = new Branch('lima', 2, 16, 4.6);
let table = document.getElementById('table');

function tableheader() {
let th = document.createElement('th');
table.appendChild(th);
for (let i = 0; i < hours.length; i++) {
  let workingHours = document.createElement('th');
  workingHours.textContent = hours[i];
  table.appendChild(workingHours);
}
let totalrow = document.createElement('th');
totalrow.textContent = 'total of daily cookies';
table.appendChild(totalrow);
}
tableheader();

function random(min, max) {
return Math.floor(Math.random() * (max - min) + min);
}
let locations = [Seattle, Tokyo, Dubai, Paris, Lima];
Branch.prototype.customerPerHour = function () {
for (let i = 0; i < hours.length; i++) {
  this.randomcusomers.push(random(this.mincustomers, this.maxcustomers));
}
}

Branch.prototype.cook = function () {
this.customerPerHour();
  for (let i = 0; i < hours.length; i++) {
  let cookiePerHour = Math.floor(this.randomcusomers[i] * this.avgcookies);
  this.cookieaverage.push(cookiePerHour);
}
}

Branch.prototype.render = function () {
this.cook();
let tablesRow = document.createElement('tr');
let td = document.createElement('td');
td.textContent = this.location;
tablesRow.appendChild(td);
let total = 0;
for (let i = 0; i < 14; i++) {
  let tableDataElement = document.createElement('td');
  tableDataElement.textContent = this.cookieaverage[i];
  tablesRow.appendChild(tableDataElement);
  total += this.cookieaverage[i];
  hoursTotal[i]+=this.cookieaverage[i];
}
let daySummary= document.createElement('td');
daySummary.textContent= total;
hoursTotal[hoursTotal.length-1]+=total;
tablesRow.appendChild(daySummary);
table.appendChild(tablesRow);
};
Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();

function totalsrow() {
let lastRow=document.createElement('tr')
let footertotal = document.createElement('th');
footertotal.textContent = 'totals';
lastRow.appendChild(footertotal);
for (let i = 0; i < 15; i++) {
  let cell = document.createElement('th');
  cell.textContent = hoursTotal[i];
  lastRow.appendChild(cell);
}
table.appendChild(lastRow);

}




let form=document.getElementById("enter");
form.addEventListener('submit',function(event){
event.preventDefault();
let shop= event.target.Branch.value; 
let min= event.target.Minimum.value; 
let max= event.target.Maximum.value;
let avg= event.target.Average.value;
let newBranch=new Branch(shop,min,max,avg);
locations.push(newBranch);
table.removeChild(table.lastElementChild);
newBranch.render();
totalsrow();
console.table(newBranch);
}
)
totalsrow();
console.log(table.lastElementChild);