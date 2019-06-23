export default class EntryPoint {
  #id
  constructor (entry) { this.#id = entry.id }
  get micro () { return this.entry.micro }
}

