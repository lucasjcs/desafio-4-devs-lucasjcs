import { Cliente } from './../models/Cliente.js'
import { cleanClientesForm } from './../helpers/genericalHelper.js'
/**
 * esta classe é responsavel por controlar tudo o que diz
 * respeito ao cliente e sua interação com a API
 */
export class ClientesController {
  getClientByForm () {
    document.getElementById('formulario-contato').addEventListener('submit', event => {
      let nome = document.getElementById('cliente-nome').value
      let responsavel = document.getElementById('nome-contato').value
      let dateValue = document.getElementById('cliente-data').value
      let dataCad = new Date(dateValue)

      let c = new Cliente(nome, responsavel, dataCad)
      this.sendClientToAPI(c)

      event.preventDefault()
    })
  }

  sendClientToAPI (c) {
    fetch('http://desafio4devs.forlogic.net/api/customers/', {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'desafio-4-devs-ed245'
      }),
      body: JSON.stringify({
        'nome': c.nome,
        'nome_responsavel': c.responsavel,
        'data_cad': c.dataCad
      })
    }).then((response) => {
      if (response.ok) {
        toastr.success('Cliente cadastrado com sucesso!')
        cleanClientesForm()
      } else {
        toastr.error('Não foi possivel cadastrar cliente')
        Promise.reject(response.statusText)
      }
    })
  }

  getAllClientsByAPI () {
    let res = fetch('http://desafio4devs.forlogic.net/api/customers/', {
      headers: new Headers({
        'Authorization': 'desafio-4-devs-ed245'
      })
    })

    return res
  }

}
