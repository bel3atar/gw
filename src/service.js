class Service {
  constructor (obj) {
    this._id = obj.id
    this._external = obj.external
    this._URLprod = obj.URLprod
    this._URLbeta = obj.URLbeta
    this._micro = obj.micro
  }
  get URL (isBeta) { return isBeta ? this._URLbeta : this._URLprod }
  get micro () { return this._micro }
  get eternal () { return this._external }
}
