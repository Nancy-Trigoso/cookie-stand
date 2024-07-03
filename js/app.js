'use strict';

function Location(
    locationName,
    minClientPerHour,
    maxClientPerHour,
    agvCookiePerSale,
    cookieEachHour,
){
    this.locationName = locationName;
    this.minClientPerHour = minClientPerHour;
    this.maxClientPerHour = maxClientPerHour;
    this.agvCookiePerSale = agvCookiePerSale;
    this.cookieEachHour = cookieEachHour;
}

Location.prototype.estimate = function(){
    this.cookieEachHour = estimateSale(this);
};

const seattle = new Location("Seattle", 23, 65, 6.3, []);
const tokyo = new Location("Tokyo", 3, 24, 1.2, []);
const dubai = new Location("Dubai", 11, 38, 3.7, []);
const paris = new Location("Paris", 20, 37, 2.3, []);
const lima = new Location("Lima", 2, 16, 4.6, []);


const hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
const stores=[seattle, tokyo, dubai, paris, lima];



function random(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}
function estimateSale(store){
    const sale=[];
    for(let i=0;i<hours.length;i++){
        const numCustomers=random(store.minClientPerHour,store.maxClientPerHour);
        const hoursSale=Math.ceil(numCustomers*store.agvCookiePerSale);
        sale.push(hoursSale);
    }
    return sale;
}

seattle.estimate();
tokyo.estimate();
dubai.estimate();
paris.estimate();
lima.estimate();

function render(store){
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    tdName.textContent = store.locationName;
    tr.appendChild(tdName);
    let total = 0;
    for(let i = 0;i<hours.length;i++){
        const td = document.createElement('td');
        td.textContent = store.cookieEachHour[i];
        tr.appendChild(td);
        total += store.cookieEachHour[i];
    }
    const td = document.createElement('td');
    td.textContent = total;
    tr.appendChild(td);
    return tr;

}

function runSales(){
    const root = document.getElementById('root');
    const table = document.createElement('table');
    const trHeader = document.createElement('tr');
    const thName = document.createElement('th');
    thName.textContent = 'Locations';
    trHeader.appendChild(thName);
    for(let i =0;i< hours.length;i++){
        const th = document.createElement('th');
        th.textContent = hours[i];
        trHeader.appendChild(th);
    }
    const thTotal = document.createElement('th');
    thTotal.textContent = 'Location Totals';
    trHeader.appendChild(thTotal);
    table.appendChild(trHeader);
    for(let i =0;i< stores.length;i++){
        stores[i].estimate();
        const tr = render(stores[i]);
        table.appendChild(tr);
    }
    if (root){
        root.appendChild(table);
    }

}

runSales();


const data = [
    ["Location", "Dirección", "Horario de Apertura","Información de contacto"],
    ["Seatle", "2901 3rd Ave #300 Seattle, WA 98121","6am - 7pm", "123-456-7890"],
    ["Tokyo", "1 Chome-1-2 Oshiage, Sumida City, Tokyo 131-8634", "6am - 7pm", "222-222-2222"],
    ["Dubai","1 Sheikh Mohammed bin Rashid Blvd - Dubai","6am - 7pm", "333-333-3333"],
    ["Paris","Champ de Mars, 5 Avenue Anatole France, 75007 Paris","6am - 7pm", "444-444-4444"],
    ["Lima","Ca. Gral. Borgoño cuadra 8, Miraflores 15074","6am - 7pm", "555-555-5555"],
];

// Función para crear y agregar la tabla al contenedor
function createTable(data) {
    const tableContainer = document.getElementById('table-container');
    const table = document.createElement('table');


    data.forEach((row, rowIndex) => {
        const tr = document.createElement('tr');
        row.forEach((cell, cellIndex) => {
            const cellElement = rowIndex === 0 ? document.createElement('th') : document.createElement('td');
            cellElement.textContent = cell;
            tr.appendChild(cellElement);
        });
        table.appendChild(tr);
    });

    tableContainer.appendChild(table);
}


createTable(data);

