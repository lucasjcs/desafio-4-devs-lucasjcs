import { ClientesController } from './controllers/ClientesController.js'
import { AvaliacoesController } from './controllers/AvaliacoesController.js'
import { desableAllHTMLSections } from './helpers/genericalHelper.js'
import renderTable from './views/tableClientView.js'
import renderSelect from './views/selectClientView.js'
import renderTableAval from './views/tableAvaliacoesView.js'

export const app = () => {
  let con = new ClientesController()
  con.getClientByForm()
  renderSelect()
  renderTable()
  
  desableAllHTMLSections()

  $(document).ready(() => {
    $('#menu-cad-clientes').click(() => {
      desableAllHTMLSections()
      $('.cliente').css('display', 'block')
    })

    $('#menu-cad-avaliacoes').click(() => {
      desableAllHTMLSections()
      $('.avaliacoes').css('display', 'block')
    })

    $('#menu-clientes-home').click(() => {
      desableAllHTMLSections()
      $('.lista-clientes').css('display', 'block')
    })

    $('#menu-avalacoes-home').click(() => {
      desableAllHTMLSections()
      $('.lista-avaliacoes').css('display', 'block')
    })
  })
  $('#av-buscar-todos').click(e => {
    renderTableAval()
    e.preventDefault()
  })


}

export const aval = () => {
  let av = new AvaliacoesController()
  av.getAvaliacaoByForm()
  renderTable()
}
