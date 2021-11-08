const tail = require('../tail');
const assertEqual = require('../assertEqual');


assertEqual(tail([1,2,3]).length, 2);
assertEqual(tail(['one', 'bear', 'headache'])[1], 'headache');