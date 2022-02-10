import * as util from './util';

console.log(util.add(12, 12));
console.log(util.subtract(12, 12));
console.log(util.PI);

import { toLower, toUpper } from './stringutils';

toLower('Hello');
toUpper('Hello');

import split from './stringutils';
split('hello');

import Header from './Header';
new Header().render();