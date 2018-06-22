import { Avaliacao } from './../models/Avaliacao.js'

export class AvaliacoesController {
  getAvaliacaoByForm () {
    document.getElementById('avaliacoes-form').addEventListener('submit', event => {
      let dataAvaliacao = new Date(document.getElementById('mes-avaliacao').value)
      let notaAvaliacao = document.getElementById('nota-avaliacao').value
      let clienteAvaliador = this.getSelectedUser().value
      let feedback = document.getElementById('feedback-avaliacao').value

      let a = new Avaliacao(dataAvaliacao, notaAvaliacao, feedback, clienteAvaliador)
      this.sendAvaliacaoToAPI(a)
      
      console.log(clienteAvaliador)

      event.preventDefault()
    })
  }

  sendAvaliacaoToAPI (a) {
    fetch('http://desafio4devs.forlogic.net/api/evaluations', {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'desafio-4-devs-ed245'
      }),
      body: JSON.stringify({
        'dataAvaliacao': a.dataAvaliacao,
        'notaAvaliacao': a.notaAvaliacao,
        'feedback': a.feedback,
        'clienteAvaliador': a.clienteAvaliador
      })
    }).then((response) => {
      console.log(response)
    })
  }

  getSelectedUser () {
    let e = document.getElementById('select-client')
    return e.options[ e.selectedIndex ]
  }
}
