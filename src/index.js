// #if process.env.BUILD_TARGET === 'freeqml'
import fetch from './qmlfetch'
console.log('free')
// #endif

// #if process.env.BUILD_TARGET !== 'freeqml'
import 'core-js/features/promise'
import 'whatwg-fetch'
console.log('not free');
// #endif
/* il va falloir traiter 4 cas:
 * 1) pas de MSD
 * 2) erreur TVI Pass
 * 3) abonné (OK)
 * 4) abonné mais pas de droit (UPSELLING)
 */
import DB from './database'
export default function findService(saccess, msd) {
  // Cas 1: si pas d'msd que faire?
  const entryPoint = db.findEntrydById(saccess)
  const parseTviPassResponse = response => {
    return {
      micros: [],
      isBeta: true
    }
  }
  const URL_TVIPASS = 'https://tvipass.biz/lecture_droits.phpml'

  fetch(`${URL_TVIPASS}?msd=${msd}`)
    .then(res => {
      if (res.status >= 200 && res.status < 300) return res
      else throw 'Erreur TVI PASS'
    })
    .then(res => res.json())
    .then(parseTviPassResponse)
    .then(info => {
      if (info.micros.includes(
    })
    .catch(() => undefined) // Cas 2
}


