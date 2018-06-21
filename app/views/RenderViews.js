import { ClientesController } from './../controllers/ClientesController.js'
/**
   * Esta classe é responsável pela renderização de html da aplicação 
   */
export class RenderViews {
  /**
   * Este Método renderiza na tela os clientes cadastrados na api
   */
  renderSelect (promise) {
    let con = new ClientesController()
    let cli = con.getAllClientsByAPI()
    let select = document.getElementById('select-client')
    cli.then(res => {
      res.json().then(data => {
        var res = Object.values(data)
        for (var i = 0; i < res.length; i++) {
          var node = document.createElement('option')
          node.innerHTML = `<option value="valor1">${res[i]} - ${res[i].nome}</option>`
          select.appendChild(node)
          console.log(res[i])
        }
      })
    })
      .catch(err => console.log(err))
  }
}
