/**
 * Este documento contem algumas funções auxiliares para o projeto
 */
export const desableAllHTMLSections = () => {
  $('.cliente').css('display', 'none')
  $('.avaliacoes').css('display', 'none')
  $('.lista-clientes').css('display', 'none')
  $('.lista-avaliacoes').css('display', 'none')

}

export const cleanAvaliacaoForm = () => {
  $('#mes-avaliacao').val('')
  $('#nota-avaliacao').val('')
  $('#feedback-avaliacao').val('')
}

export const cleanClientesForm = () => {
  $('#cliente-nome').val('').focus()
  $('#nome-contato').val('')
  $('#cliente-data').val('')
}

