// #if process.env.BUILD_TARGET === 'freeqml'
import fetch from './qmlfetch'
console.log('free')
// #endif

// #if process.env.BUILD_TARGET !== 'freeqml'
import 'core-js/features/promise'
import 'whatwg-fetch'
console.log('not free');
// #endif
