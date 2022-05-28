var priceArkona = 50;
var priceStigmata = 40;
var priceZmey = 20;
var priceLouna = 50;
var priceAmatory = 40;
var priceWildways = 20;
var priceWoodscream = 50;
var priceSlaughter = 20;
var priceTeufelstanz = 20;

var fest_day1 = 'Arkona, Louna and Woodscream'
var fest_day2 = 'Stigmata, Amatory and Slaughter to Prevail'
var fest_day3 = 'Zmey Gorynich, Wildways and Teufelstanz'

console.log('On the first day of the festival, I was lucky to watch bands ' + fest_day1 + ".")
console.log('Then I watched the bands ' + fest_day2 + ' on the second day and it cost me ' + (priceStigmata + priceAmatory + priceSlaughter) + '€ in total that day.')
console.log('I was a bit tired on the third day but it was so much worth it to watch the bands ' + fest_day3 + ' and I spent ' + (priceZmey + priceWildways + priceTeufelstanz) + '€ for the three days of the festival.')

var totalPrice = priceAmatory + priceArkona + priceLouna + priceSlaughter + priceStigmata + priceTeufelstanz + priceWildways + priceWoodscream + priceZmey
console.log('If I had booked the concert with enough time in advance, it would have cost me a total of ' + (totalPrice - totalPrice * 0.3) + '€ and I would have saved ' + (totalPrice * 0.3) + '€.')