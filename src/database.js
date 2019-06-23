class Database {
  constructor (db) {
    this._entries = db.entries.map(x => new Entry(x))
    this._services = db.services.map(x => new Service(x))
    this.db = db
  }
  get entries() { return this._entries }
  findServiceById (id) { return this.db.services.find(x => x.id === id) }
}

