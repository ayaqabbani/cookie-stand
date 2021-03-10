'use strict';
function Branch(location, mincustomers, maxcustomers, avgcookies) {
  this.location = location;
  this.mincustomers = mincustomers;
  this.maxcustomers = maxcustomers;
  this.avgcookies = avgcookies;
  this.randomcusomers = [];
  this.cookieaverage = [];
  this.totalrowsum = 0;
};

let hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
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
  totalrow.textContent = 'total of daily cookies';
  table.appendChild(totalrow);
}
tableheader();

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
let locations = [Seattle, Tokyo, Dubai, Paris, Lima];
// function locationsColomnCreater() {
//   for (let i = 0; i < locations.length; i++) {
//     let branch = document.createElement('tr');
//     let td = document.createElement('td');
//     td.textContent = locations[i].location;
//     branch.appendChild(td);
//     table.appendChild(branch);
//   }
// }
// locationsColomnCreater();

Branch.prototype.customerPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.randomcusomers.push(random(this.mincustomers, this.maxcustomers));
  }
}

Branch.prototype.cook = function () {
  this.customerPerHour(); for (let i = 0; i < hours.length; i++) {
    let cookiePerHour = Math.floor(this.randomcusomers[i] * this.avgcookies);
    this.cookieaverage.push(cookiePerHour);
    this.totalrowsum += cookiePerHour;
  }
}

Branch.prototype.render = function () {
  this.cook();
  let tablesRow = document.createElement('tr');
  let td = document.createElement('td');
  td.textContent = this.location;
  tablesRow.appendChild(td);
  for (let i = 0; i < 15; i++) {
    let tableDataElement = document.createElement('td');
    tableDataElement.textContent = this.cookieaverage[i];
    tablesRow.appendChild(tableDataElement);
  }
  table.appendChild(tablesRow);
};
Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();

function footer() {
  let footertotal = document.createElement('th');
  footertotal.textContent = 'totals';
  table.appendChild(footertotal);

}
footer();

function totalsrow() {
  for (let i = 0; i < 15; i++) {
    let cells = document.createElement('th');
    cells.textContent = Branch.totalrow;
    table.appendChild(cells);
  }
}

totalsrow();

// function makeFooterRow() {
//   tableHeader.textContent = 'Hourly Totals for All Locations';
//   tableRow.appendChild(tableHeader);
//   let totalOfTotals = 0;
//   for (let i = 0; i < hours.length; i++) {
//     let hourlyTotal = 0;
//     for (let j = 0; j < locations.length; j++){
//       hourlyTotal += locations[j].cookiesEachHour[i];
//       totalOfTotals += hourlyTotal;
//     }
//     tableHeader = document.createElement('th');
//     tableHeader.textContent = hourlyTotal;
//     tableRow.appendChild(tableHeader);
//   }
//   tableHeader = document.createElement('th');
//   tableHeader.textContent = totalOfTotals;
//   tableRow.appendChild(tableHeader);
//   tableElement.appendChild(tableRow);
// }


 // function totalColomn() {//   for (let i=0;i<5;i++){//     let lastcolomn= document.createElement('tr');//     let td= document.createElement('td');//       td.textContent='totalss';//       lastcolomn.appendChild(td);//       table.appendChild(lastcolomn);  //   }// }// totalColomn();


// function render(location){// let main= document.getElementById('demo');// let header= document.createElement('th');// let tr= document.createElement('tr');// tr.innerText= location; // td.innerText='affjg';// TABLE.innerText='utiugu';// header.innerText='yuglk';// TABLE.appendChild(th);// tr.appendChild(td);// header.appendChild(location);// main.appendChild(TABLE);// };

// let TABLE= createElement('table');// let row= table.insertRow();// let table= doc.createElement("table");// table.appendChild(branch1); // let branch1 = {//   location: 'seattle',//   min: 23,//   max: 65,//   avg: 6.3,//   sale: [],//   hours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'],//   randomGenerator: function () {//     let avgrandcus = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);//     return avgrandcus; //   },//   cookieAvg: function () { //     let cookAvg = Math.floor(this.avg * this.randomGenerator());//     console.log(cookAvg);//     return cookAvg;//   }, //   render: function () {//     let head = document.createElement('h1');//     let body = document.getElementById("demo");//     let list = document.createElement('ul');//     let total = 0;//     for (let i = 0; i < this.hours.length; i++) {//       this.sale.push(this.cookieAvg());//       let tag = document.createElement('li');//       let avg1 = this.cookieAvg();//       tag.innerHTML = this.hours[i] + avg1;//       total=total+ avg1;//       list.appendChild(tag);//       console.log(this.hours[i] + this.cookieAvg()); //     }//     let totalelement = document.createElement('li');//     totalelement.innerHTML="total = " + total;//     head.innerHTML = this.location;//     body.appendChild(head);//     body.appendChild(list);//     list.appendChild(totalelement);//   }// }// // branch1.location;// branch1.randomGenerator();// branch1.cookieAvg();// branch1.render(); // let branch2 = {//   location: 'Tokyo',//   min: 3,//   max: 24,//   avg: 1.2,//   sale: [],//   hours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'],//   randomGenerator: function () {//     let avgrandcus = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);//     return avgrandcus; //   },//   cookieAvg: function () { //     let cookAvg = Math.floor(this.avg * this.randomGenerator());//     console.log(cookAvg);//     return cookAvg;//   }, //   render: function () {//     let head = document.createElement('h1');//     let body = document.getElementById("demo");//     let list = document.createElement('ul');//     let total = 0;//     for (let i = 0; i < this.hours.length; i++) {//       this.sale.push(this.cookieAvg());//       let tag = document.createElement('li');//       let avg1 = this.cookieAvg();//       tag.innerHTML = this.hours[i] + avg1;//       total=total+ avg1;//       list.appendChild(tag);//       console.log(this.hours[i] + this.cookieAvg()); //     }//     let totalelement = document.createElement('li');//     totalelement.innerHTML="total = " + total;//     head.innerHTML = this.location;//     body.appendChild(head);//     body.appendChild(list);//     list.appendChild(totalelement);//   }// } // // branch2.location();// branch2.randomGenerator();// branch2.cookieAvg();// branch2.render(); // let branch3 = {//   location: 'Dubai',//   min: 11,//   max: 38,//   avg: 3.7,//   sale: [],//   hours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'],//   randomGenerator: function () {//     let avgrandcus = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);//     return avgrandcus; //   },//   cookieAvg: function () { //     let cookAvg = Math.floor(this.avg * this.randomGenerator());//     console.log(cookAvg);//     return cookAvg;//   }, //   render: function () {//     let head = document.createElement('h1');//     let body = document.getElementById("demo");//     let list = document.createElement('ul');//     let total = 0;//     for (let i = 0; i < this.hours.length; i++) {//       this.sale.push(this.cookieAvg());//       let tag = document.createElement('li');//       let avg1 = this.cookieAvg();//       tag.innerHTML = this.hours[i] + avg1;//       total=total+ avg1;//       list.appendChild(tag);//       console.log(this.hours[i] + this.cookieAvg()); //     }//     let totalelement = document.createElement('li');//     totalelement.innerHTML="total = " + total;//     head.innerHTML = this.location;//     body.appendChild(head);//     body.appendChild(list);//     list.appendChild(totalelement);//   } // }// branch3.randomGenerator();// branch3.cookieAvg();// branch3.render(); // let branch4 = {//   location: 'paris',//   min: 20,//   max: 38,//   avg: 2.3,//   sale: [],//   hours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'],//   randomGenerator: function () {//     let avgrandcus = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);//     return avgrandcus; //   },//   cookieAvg: function () { //     let cookAvg = Math.floor(this.avg * this.randomGenerator());//     console.log(cookAvg);//     return cookAvg;//   }, //   render: function () {//     let head = document.createElement('h1');//     let body = document.getElementById("demo");//     let list = document.createElement('ul');//     let total = 0;//     for (let i = 0; i < this.hours.length; i++) {//       this.sale.push(this.cookieAvg());//       let tag = document.createElement('li');//       let avg1 = this.cookieAvg();//       tag.innerHTML = this.hours[i] + avg1;//       total=total+ avg1;//       list.appendChild(tag);//       console.log(this.hours[i] + this.cookieAvg()); //     }//     let totalelement = document.createElement('li');//     totalelement.innerHTML="total = " + total;//     head.innerHTML = this.location;//     body.appendChild(head);//     body.appendChild(list);//     list.appendChild(totalelement);//   } // }// branch4.randomGenerator();// branch4.cookieAvg();// branch4.render(); // let branch5 = {//   location: 'lima',//   min: 2,//   max: 16,//   avg: 4.6,//   sale: [],//   hours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'],//   randomGenerator: function () {//     let avgrandcus = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);//     return avgrandcus; //   },//   cookieAvg: function () { //     let cookAvg = Math.floor(this.avg * this.randomGenerator());//     console.log(cookAvg);//     return cookAvg;//   }, //   render: function () {//     let head = document.createElement('h1');//     let body = document.getElementById("demo");//     let list = document.createElement('ul');//     let total = 0;//     for (let i = 0; i < this.hours.length; i++) {//       this.sale.push(this.cookieAvg());//       let tag = document.createElement('li');//       let avg1 = this.cookieAvg();//       tag.innerHTML = this.hours[i] + avg1;//       total=total+ avg1;//       list.appendChild(tag);//       console.log(this.hours[i] + this.cookieAvg()); //     }//     let totalelement = document.createElement('li');//     totalelement.innerHTML="total = " + total;//     head.innerHTML = this.location;//     body.appendChild(head);//     body.appendChild(list);//     list.appendChild(totalelement);//   } // }// branch5.randomGenerator();// branch5.cookieAvg();// branch5.render();












// sales: function(){//   for(let i=0;< this.hours;i++){//     this.sale.push(this.cookieavg()); //   }// }   // function list(location) {//     let total = 0;//     let div = document.createElement('div');//     document.body.appendChild(div);//     let p = document.createElement('p');//     div.appendChild(p);//     p.innerText = location;//     p.setAttribute('id', 'p');//     let ul = document.createElement('ul');//     p.appendChild(ul);//     let time = 0;//     let a = 6;//     while (time <= 1) {//         if (a <= 12 && time == 0) {//             var li = document.createElement('li');//             ul.appendChild(li);//             let Cookies = seattle.numOfCookies();//             total += Cookies;//             li.innerHTML = li.innerHTML + a + 'am: ' + Cookies + ' cookies';//             a += 1;//         } else if (a <= 7 && time == 1) {//             var li = document.createElement('li');//             ul.appendChild(li);//             let Cookies = seattle.numOfCookies();//             total += Cookies;//             li.innerHTML = li.innerHTML + a + 'pm: ' + Cookies + ' cookies';//             a += 1;//         } else {//             a = 1;//             time += 1;//         } //         if (time == 2) {//             let li1 = document.createElement('li');//             ul.appendChild(li1);//             li1.innerText = 'total: ' + total;//         }//     }// } // let seattle = {//     name: 'seattle',//     min: 23,//     max: 65,//     avg: 6.3, //     numOfCookies: function () {//         let random = Math.floor(Math.random() * (this.max - this.min)) + this.min;//         return Math.floor(random * this.avg);//     }// };

// let tokyo = {//     name: 'tokyo',//     min: 3,//     max: 24,//     avg: 1.2,//     numOfCookies: function () {//         let random = Math.floor(Math.random() * (this.max - this.min)) + this.min;//         return Math.floor(random * this.avg);//     } // };


// let dubai = { //     name: 'dubai',//     min: 11,//     max: 38,//     avg: 3.7,//     numOfCookies: function () {//         let random = Math.floor(Math.random() * (this.max - this.min)) + this.min;//         return Math.floor(random * this.avg); //     }// };

// let paris = {//     name: 'paris',//     min: 20,//     max: 38,//     avg: 2.3,//     numOfCookies: function () {//         let random = Math.floor(Math.random() * (this.max - this.min)) + this.min;//         return Math.floor(random * this.avg);//     }// };

// let lima = {//     name: 'lima',//     min: 2,//     max: 16,//     avg: 4.6,//     numOfCookies: function () {//         let random = Math.floor(Math.random() * (this.max - this.min)) + this.min;//         return Math.floor(random * this.avg); //     } // };


// list(seattle.name);// list(tokyo.name);// list(dubai.name);// list(paris.name);// list(lima.name);// let hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];// let main = document.getElementById("demo");// let seattle = {//     minCus: 23,//     maxCus: 65,//     avg: Math.floor(6.3),//     sale: 0, //     perHour: [],//     getCustomerRandomly:function(){//         let cus = this.randomCustomer;//         cus = randomCus(this.min,this.max);//         return cus;//     }, //     getavg : function(){//         for(let i = 0 ;i<15;i++){//             this.avgPerHour[i]= this.getCustomerRandomly() * this.avg;//         }//         return this.avgPerHour;//     }// };// function randomCus (min,mix){//     return Math.floor(Math.random() * (max - min +1) + min);// } // console.log("avg: " + seattle.getavg());// document.write('<h2></h2>');// let undorderList = document.createElement('ul');// let perAve = [];// let time = [];// for(let i=0;i<15;i++){//     perAve[i]=document.createElement('li');//     time[i]=document.createElement('li');//     perAve[i].innerText = seattle.avgPerHour[i];//     hours[i].innerText ;//     undorderList.appendChild(perAve[i]); // } // main.appendChild(undorderList); //     randomCus: function () {//         let modAvg = branch1.maxCus - branch1.minCus;//         let randomnum = Math.random() * modAvg + branch1.minCus;//         return Math.ceil(randomCus); //     },//     cookieCount: function () {//         let cookienum = Math.ceil(this.avg * this.CusPH())//         return cookienum;//     },//     perHourSale: function () {//         for (let i = 0; i < hours.length; i++) {//             let cookienum = Math.ceil(branch1.randomCus() * branch1.avg);//             branch1.sale += cookienum;//         }//     }, //     listing: function () {//         let container = document.getElementById('content');//         let h2 = document.createElement('h2');//         container.appendChild(h2);//         h2.textContent = 'seattle';//         container.appendChild(h2);//         let listed = document.createElement('ul');//         container.appendChild(listed);//         for (let i = 0; i < hours.length; i++) {//             let Listed = document.createElement('li')//             Listed.textContent = hours[i] + ': ' + branch1.perHour[i] + ' cookies';//             listed.appendChild(Listed);//         }//         let listed = document.createElement('li');//         listed.textContent = 'total: ' + branch1.sale + ' cookies';//         Listed.appendChild(Listed); //     },// }// branch1.perHourSale();// branch1.listing(); // let seattlePerHour = [];// for (let i = 0; i < hours.length; i++) {//     seattlePerHour.push(branch1.cookieCount) // }// let seattleTotal = 0;// for (i = 0; i < hours.length; i + 1) {//     seattleTotal = seattleTotal + seattlePerHour[i]// } //   getData:function(){//       let customer1 =this.hours[0]+ randomCus;//       let customer2 =this.hours[1]+ randomCus;//       let customer3 =this.hours[2]+ randomCus;//       let customer4 =this.hours[3]+ randomCus;//       let customer5 =this.hours[4]+ randomCus;//       let customer6 =this.hours[5]+ randomCus;//       let customer7 =this.hours[6]+ randomCus;//       let customer8 =this.hours[7]+ randomCus;//       let customer9 =this.hours[8]+ randomCus;//       let customer10 =this.hours[9]+ randomCus;//       let customer11 =this.hours[10]+ randomCus;//       let customer12 =this.hours[11]+ randomCus;//       let customer13 =this.hours[12]+ randomCus;//       let customer14 =this.hours[13]+ randomCus;//       let customer15 =this.hours[14]+ randomCus; //   },//   let main=document.getElementById('demo');//   let a=document.createElement('ul');//   let b=document.createElement('li');//   let c=document.createElement('li');//   let d=document.createElement('li');//   let e=document.createElement('li');//   let f=document.createElement('li');//   let g=document.createElement('li');//   let h=document.createElement('li');//   let i=document.createElement('li');//   let j=document.createElement('li');//   let k=document.createElement('li');//   let l=document.createElement('li');//   let m=document.createElement('li');//   let n=document.createElement('li');//   let o=document.createElement('li');//   let p=document.createElement('li'); //   b.innerText=customer1;//   c.innerText=customer2;//   d.innerText=customer3;//   e.innerText=customer4;//   f.innerText=customer5;//   g.innerText=customer6;//   h.innerText=customer7;//   i.innerText=customer8;//   j.innerText=customer9;//   k.innerText=customer10;//   l.innerText=customer11;//   m.innerText=customer12;//   n.innerText=customer13;//   o.innerText=customer14;//   p.innerText=customer15;

//   }//   list();     // customerPerHour=randomGenerator(23,65);    // return customerPerHour;    // customerPerHour:function(){    //     let cus = this.saleCus;    //     cus=random(this.min,this.max);    // //     return cus;    // },    // avgcus: function(){    //     return this.customerPerHour() * this.avg;    // }     // };

    // getData:function(){    //   let bmwType=this.type;    //   let bmwModel=this.model;    //   return bmwType+':'+bmwModel;    // } Sent from Mail for Windows 10 




