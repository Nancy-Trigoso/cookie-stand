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
const tokyo = new Location("Tokio", 3, 24, 1.2, []);
const dubai = new Location("Dubai", 11, 38, 3.7, []);
const paris = new Location("Paris", 20, 37, 2.3, []);
const lima = new Location("Lima", 2, 16, 4.6, []);

const hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
