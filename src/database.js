import Entry from './entrypoint'
import Service from './service'
export default class Database {
  #entries
  #services
  constructor (db) {
    this.#entries = db.entries.map(x => new Entry(x))
    this.#services = db.services.map(x => new Service(x))
  }
  get entries() { return this.#entries }
  findServiceById (id) { return this.db.services.find(x => x.id === id) }
  findEntryById (id) { return this.db.services.find(x => x.id === id) }
}

