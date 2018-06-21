import { ClientesController } from './controllers/ClientesController.js'
import { Cliente } from './models/Cliente.js'
import { RenderViews } from './views/RenderViews.js'
export class App {
  constructor () {
    let rend = new RenderViews()
    let con = new ClientesController()
    rend.renderSelect()
    con.getSelectedUser()
  }
}
