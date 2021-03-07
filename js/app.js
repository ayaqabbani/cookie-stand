'use strict';

function list(location) {
    let total = 0;
    let div = document.createElement('div');
    document.body.appendChild(div);
    let p = document.createElement('p');
    div.appendChild(p);
    p.innerText = location;
    p.setAttribute('id', 'p');
    let ul = document.createElement('ul');
    p.appendChild(ul);
    let time = 0;
    let a = 6;
    while (time <= 1) {
        if (a <= 12 && time == 0) {
            var li = document.createElement('li');
            ul.appendChild(li);
            let Cookies = seattle.numOfCookies();
            total += Cookies;
            li.innerHTML = li.innerHTML + a + 'am: ' + Cookies + ' cookies';
            a += 1;
        } else if (a <= 7 && time == 1) {
            var li = document.createElement('li');
            ul.appendChild(li);
            let Cookies = seattle.numOfCookies();
            total += Cookies;
            li.innerHTML = li.innerHTML + a + 'pm: ' + Cookies + ' cookies';
            a += 1;
        } else {
            a = 1;
            time += 1;
        }

        if (time == 2) {
            let li1 = document.createElement('li');
            ul.appendChild(li1);
            li1.innerText = 'total: ' + total;
        }
    }
}

let seattle = {
    name: 'seattle',
    min: 23,
    max: 65,
    avg: 6.3,

    numOfCookies: function () {
        let random = Math.floor(Math.random() * (this.max - this.min)) + this.min;
        return Math.floor(random * this.avg);
    }
};



let tokyo = {
    name: 'tokyo',
    min: 3,
    max: 24,
    avg: 1.2,
    numOfCookies: function () {
        let random = Math.floor(Math.random() * (this.max - this.min)) + this.min;
        return Math.floor(random * this.avg);
    }


};




let dubai = {

    name: 'dubai',
    min: 11,
    max: 38,
    avg: 3.7,
    numOfCookies: function () {
        let random = Math.floor(Math.random() * (this.max - this.min)) + this.min;
        return Math.floor(random * this.avg);

    }
};



let paris = {
    name: 'paris',
    min: 20,
    max: 38,
    avg: 2.3,
    numOfCookies: function () {
        let random = Math.floor(Math.random() * (this.max - this.min)) + this.min;
        return Math.floor(random * this.avg);
    }
};



let lima = {
    name: 'lima',
    min: 2,
    max: 16,
    avg: 4.6,
    numOfCookies: function () {
        let random = Math.floor(Math.random() * (this.max - this.min)) + this.min;
        return Math.floor(random * this.avg);
        
    }

};




list(seattle.name);
list(tokyo.name);
list(dubai.name);
list(paris.name);
list(lima.name);
// let hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
// let main = document.getElementById("demo");
// let seattle = {
//     minCus: 23,
//     maxCus: 65,
//     avg: Math.floor(6.3),
//     sale: 0,

//     perHour: [],
//     getCustomerRandomly:function(){
//         let cus = this.randomCustomer;
//         cus = randomCus(this.min,this.max);
//         return cus;
//     },

//     getavg : function(){
//         for(let i = 0 ;i<15;i++){
//             this.avgPerHour[i]= this.getCustomerRandomly() * this.avg;
//         }
//         return this.avgPerHour;
//     }
// };
// function randomCus (min,mix){
//     return Math.floor(Math.random() * (max - min +1) + min);
// }

// console.log("avg: " + seattle.getavg());
// document.write('<h2></h2>');
// let undorderList = document.createElement('ul');
// let perAve = [];
// let time = [];
// for(let i=0;i<15;i++){
//     perAve[i]=document.createElement('li');
//     time[i]=document.createElement('li');
//     perAve[i].innerText = seattle.avgPerHour[i];
//     hours[i].innerText ;
//     undorderList.appendChild(perAve[i]);

// }

// main.appendChild(undorderList);

//     randomCus: function () {
//         let modAvg = branch1.maxCus - branch1.minCus;
//         let randomnum = Math.random() * modAvg + branch1.minCus;
//         return Math.ceil(randomCus);

//     },
//     cookieCount: function () {
//         let cookienum = Math.ceil(this.avg * this.CusPH())
//         return cookienum;
//     },
//     perHourSale: function () {
//         for (let i = 0; i < hours.length; i++) {
//             let cookienum = Math.ceil(branch1.randomCus() * branch1.avg);
//             branch1.sale += cookienum;
//         }
//     },

//     listing: function () {
//         let container = document.getElementById('content');
//         let h2 = document.createElement('h2');
//         container.appendChild(h2);
//         h2.textContent = 'seattle';
//         container.appendChild(h2);
//         let listed = document.createElement('ul');
//         container.appendChild(listed);
//         for (let i = 0; i < hours.length; i++) {
//             let Listed = document.createElement('li')
//             Listed.textContent = hours[i] + ': ' + branch1.perHour[i] + ' cookies';
//             listed.appendChild(Listed);
//         }
//         let listed = document.createElement('li');
//         listed.textContent = 'total: ' + branch1.sale + ' cookies';
//         Listed.appendChild(Listed);


//     },
// }
// branch1.perHourSale();
// branch1.listing();


// let seattlePerHour = [];
// for (let i = 0; i < hours.length; i++) {
//     seattlePerHour.push(branch1.cookieCount)

// }
// let seattleTotal = 0;
// for (i = 0; i < hours.length; i + 1) {
//     seattleTotal = seattleTotal + seattlePerHour[i]
// }
