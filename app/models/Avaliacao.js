export class Avaliacao {
  constructor (dataAvaliacao, notaAvaliacao, feedback, clienteAvaliador) {
    this._dataAvalicao = dataAvaliacao
    this._notaAvaliacao = notaAvaliacao
    this._clienteAvaliador = clienteAvaliador
    this._feedback = feedback
  }

  get dataAvaliacao () {
    return this._dataAvalicao
  }
  get notaAvaliacao () {
    return this._notaAvaliacao
  }
  get clienteAvaliador () {
    return this._clienteAvaliador
  }
  get feedback () {
    return this._feedback
  }
}
