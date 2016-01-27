var moment = require('moment');

var now = moment();
// now.subtract(1, 'year');
// now.add();
// console.log(now.format());
// console.log(now.format('MMM Do YY h:mma'));


// console.log(now.format('X'));
// console.log(now.format('x'));
// console.log(now.unix());

now.valueOf();
var timestamp = 1453915654897;
var timestampMoment = moment.utc(timestamp);
// timestampMoment.utcOffset(60); == .local()

console.log(timestampMoment.local().format());