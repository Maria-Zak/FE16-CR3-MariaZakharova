var priceArkona = 50;
var priceStigmata = 40;
var priceZmey = 20;
var priceLouna = 50;
var priceAmatory = 40;
var priceWildways = 20;
var priceWoodscream = 50;
var priceSlaughter = 20;
var priceTeufelstanz = 20;

var fest_day1 = priceArkona + priceLouna + priceWoodscream
var fest_day2 = priceStigmata + priceAmatory + priceSlaughter
var fest_day3 = priceZmey + priceWildways + priceTeufelstanz

console.log('On the first day of the festival, I was lucky to watch bands Arkona, Louna and Woodscream.')
console.log('Then I watched the bands Stigmata, Amatory and Slaughter to Prevail on the second day and it cost me ' + fest_day2 + '€ in total that day.')
console.log('I was a bit tired on the third day but it was so much worth it to watch the bands Zmey Gorynich, Wildways and Teufelstanz and I spent ' + fest_day3 + '€ for the three days of the festival.')

var totalPrice = fest_day1 + fest_day2 + fest_day3
console.log('If I had booked the concert with enough time in advance, it would have cost me a total of ' + (totalPrice - totalPrice * 0.3) + '€ and I would have saved ' + (totalPrice * 0.3) + '€.')