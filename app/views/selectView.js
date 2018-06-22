import { ClientesController } from './../controllers/ClientesController.js'

/**
 * Aqui é realizado o mapeamento dos dados recebidos pela API
 * também é realizado a renderização dos dados no elemento Select do HTML
 */

const jsonToClientes = (json) => Object.keys(json).map((id, indice) => ({'id': id, ...json[id]}))
const clientesToOptionHtml = (clientes) => clientes.map(cliente => `<option value="${cliente.id}">${cliente.nome}</option>`)
const insertInSelect = (options) => { document.getElementById('select-client').innerHTML = options }

const renderSelect = () => {
  let con = new ClientesController()
  con.getAllClientsByAPI()
    .then(res => res.json())
    .then(jsonToClientes)
    .then(clientesToOptionHtml)
    .then(options => options.join())
    .then(insertInSelect)
    .catch(console.log)
}

export default renderSelect
