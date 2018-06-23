import { ClientesController } from './../controllers/ClientesController.js'
/**
 * Aqui é realizado o mapeamento dos dados recebidos pela API
 * também é realizada a renderização destes dados no elemento Tbody da tabela no HTML
 */
const jsonToClientes = (json) => Object.keys(json).map((id, indice) => ({ 'id': id, ...json[id] }))
const clientesToTrHTML = (clientes) => clientes
  .map(cliente => `
                <tr id ="${cliente.id}" >
                    <th scope="row">${cliente.id}</th>
                    <td>${cliente.nome}</td>
                    <td>${cliente.data_cad}</td>
                    <td>${cliente.nome_responsavel}</td>
                    <td class="trash-icon" name="${cliente.id}">X</td>
                </tr>
       `)

const renderTable = () => {
  let con = new ClientesController()
  con.getAllClientsByAPI()
    .then(res => res.json())
    .then(jsonToClientes)
    .then(clientesToTrHTML)
    .then(clientes => clientes.join())
    .then(tr => {
      document.getElementById('toRender').innerHTML = tr.replace(/,/gi, '')
    })
    .catch(console.log)

}
export default renderTable
