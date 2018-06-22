import { ClientesController } from './controllers/ClientesController.js'
import { AvaliacoesController } from './controllers/AvaliacoesController.js'
import { desableAllHTMLSections } from './helpers/hide-sections-helper.js'
import renderSelect from './views/selectView.js'

export const app = () => {
  let con = new ClientesController()
  con.getClientByForm()
  renderSelect()
  desableAllHTMLSections()

  $('#menu-cad-clientes').click(() => {
    desableAllHTMLSections()
    $('.cliente').css('display', 'block')
  })

  $('#menu-cad-avaliacoes').click(() => {
    desableAllHTMLSections()
    $('.avaliacoes').css('display', 'block')
  })
}

export const aval = () => {
  let av = new AvaliacoesController()
  av.getAvaliacaoByForm()
}
