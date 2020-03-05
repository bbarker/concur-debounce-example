'use strict';

// require('./Main.purs').main();
// import main from './Main';
import * as Main from "../output/Main";

if (module.hot) {
  module.hot.accept();
}

console.log('app starting');

Main.main();
