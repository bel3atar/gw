import DB from './database'
export default class EntryPoint {
  #id
  #targets
  constructor ({id, ok, norights, prospect, nomsd, error}) {
    this.#id = id
    this.#targets = { ok, norights, prospect, nomsd, error }
  }
  get micro () { return this.entry.micro }
  get getTargetOfType (type) { return DB.findServiceById(this.#targets[type]) }
}

