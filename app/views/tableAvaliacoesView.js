import { AvaliacoesController } from './../controllers/AvaliacoesController.js'

/**
 * Aqui é realizado o mapeamento dos dados recebidos pela API
 * também é realizada a renderização destes dados no elemento Tbody da tabela no HTML
 */
const jsonToAvaliacoes = (json) => Object.keys(json).map((id, indice) => ({ 'id': id, ...json[id] }))
const avaliacoesToHTML = (avaliacoes) => avaliacoes
  .map(avaliacao => `
                <tr ${avaliacao.id}>
                    <th scope="row">${avaliacao.clienteAvaliador}</th>
                    <td>${avaliacao.dataAvaliacao}</td>
                    <td>${avaliacao.notaAvaliacao}</td>
                    <td>${avaliacao.feedback}</td>
                    <td class="trash-icon" name="${avaliacao.id}">X</td>
                </tr>
       `)

const renderTableAval = () => {
  let con = new AvaliacoesController()
  con.getAllAvaliacoesByAPI()
    .then(res => res.json())
    .then(jsonToAvaliacoes)
    .then(avaliacoesToHTML)
    .then(avaliacoes => avaliacoes.join())
    .then(tr => {
      document.getElementById('toRenderAval').innerHTML = tr.replace(/,/gi, '')
    })
    .catch(console.log)
}
export default renderTableAval
