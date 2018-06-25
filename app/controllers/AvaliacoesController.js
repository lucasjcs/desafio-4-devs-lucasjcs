import { Avaliacao } from './../models/Avaliacao.js'
import { cleanAvaliacaoForm } from './../helpers/genericalHelper.js'

export class AvaliacoesController {
  getAvaliacaoByForm() {
    document.getElementById('formulario-aval').addEventListener('submit', event => {

      let dataAvaliacao = new Date(document.getElementById('mes-avaliacao').value)
      let notaAvaliacao = document.getElementById('nota-avaliacao').value
      let clienteAvaliador = this.getSelectedUser().value
      let feedback = document.getElementById('feedback-avaliacao').value

      let a = new Avaliacao(dataAvaliacao, notaAvaliacao, feedback, clienteAvaliador)
      this.sendAvaliacaoToAPI(a)


      event.preventDefault()
    })
  }

  sendAvaliacaoToAPI(a) {
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
      if (response.ok) {
        toastr.success('Avaliação cadastrada com sucesso!')
        cleanAvaliacaoForm()
      } else {
        Promise.reject(response.statusText)
        toastr.error('Não foi possivel cadastrar avaliação')
      }
    })
      .catch(console.log())
  }

  getAllAvaliacoesByAPI () {
    let res = fetch('http://desafio4devs.forlogic.net/api/evaluations/', {
      headers: new Headers({
        'Authorization': 'desafio-4-devs-ed245'
      })
    })
    return res
  }

  deleteAvaliacaoById (id) {
    let res = fetch('http://desafio4devs.forlogic.net/api/evaluations/' + id, {
      method: 'delete',
      headers: new Headers({
        'Authorization': 'desafio-4-devs-ed245'
      })
    })
    return res
  }

  getSelectedUser () {
    let e = document.getElementById('select-client')
    return e.options[e.selectedIndex]
  }
}
