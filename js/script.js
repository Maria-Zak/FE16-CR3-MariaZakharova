var priceGroup1 = 50;
var priceGroup2 = 40;
var priceGroup3 = 20;
var priceGroup4 = 40;
var priceGroup5 = 30;
var priceGroup6 = 20;
var priceGroup7 = 50;
var priceGroup8 = 20;
var priceGroup9 = 20;

var fest_day1 = 'Group 1, Group 2 and Group 3';
var fest_day2 = 'Group 4, Group 5 and Group 6';
var fest_day3 = 'Group 7, Group 8 and Group 9';

var day1_price = priceGroup1 + priceGroup2 + priceGroup3;
var day2_price = priceGroup4 + priceGroup5 + priceGroup6;
var day3_price = priceGroup7 + priceGroup8 + priceGroup9;


console.log('On the first day of the festival, I was lucky to watch bands ' + fest_day1 + ".")
console.log('Then I watched the bands ' + fest_day2 + ', on the second day and it cost me ' + (priceGroup4 + priceGroup5 + priceGroup6) + '€ in total that day.')
console.log('I was a bit tired on the third day but it was so much worth it to watch the bands ' + fest_day3 + ' and I spent ' + (priceGroup7 + priceGroup8 + priceGroup9) + '€ for the three days of the festival.')

console.log('Then I watched the bands ' + fest_day2 + ', on the second day and it cost me ' + day2_price + '€ in total that day.')
console.log('I was a bit tired on the third day but it was so much worth it to watch the bands ' + fest_day3 + ' and I spent ' + day3_price + '€ for the three days of the festival.')


var totalPrice = priceGroup1 + priceGroup2 + priceGroup3 + priceGroup4 + priceGroup5 + priceGroup6 + priceGroup7 + priceGroup8 + priceGroup9
var totalPriceAlt = day1_price + day2_price + day3_price
console.log('If I had booked the concert with enough time in advance, it would have cost me a total of ' + (totalPrice - totalPrice * 0.3) + '€ and I would have saved ' + (totalPrice * 0.3) + '€.')