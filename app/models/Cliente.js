/*
* Modelo do Cliente
*/
export class Cliente {
  constructor (nome, responsavel, dataCad) {
    this._nome = nome
    this._responsavel = responsavel
    this._dataCad = dataCad
  }

  get nome () {
    return this._nome
  }

  get responsavel () {
    return this._responsavel
  }

  get dataCad () {
    return this._dataCad
  }
}
