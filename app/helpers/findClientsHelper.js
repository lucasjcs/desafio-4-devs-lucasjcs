import { ClientesController } from './../controllers/ClientesController.js'

const jsonToClientes = (json) => Object.keys(json).map((id, indice) => ({ 'id': id, ...json[id] }))

export const findClient = (id) => {
  let con = new ClientesController()
  let finder = con.getAllClientsByAPI()
    .then(res => res.json())
    .then(jsonToClientes)
    .then(clientes => clientes)

  return finder
}
export default findClient
