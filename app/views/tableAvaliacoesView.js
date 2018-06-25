import { AvaliacoesController } from './../controllers/AvaliacoesController.js'
import findClient from './../helpers/findClientsHelper.js'
/**
 * Aqui é realizado o mapeamento dos dados recebidos pela API
 * também é realizada a renderização destes dados no elemento Tbody da tabela no HTML
 */
const jsonToAvaliacoes = (json) => Object.keys(json).map((id, indice) => ({ 'id': id, ...json[id] }))
/**
 * Aqui é realizada uma busca em avaliações e também em clientes
 * como se fosse um 'join' em sql, a fim de retornar o nome do cliente avaliador
 * que no caso, avaliação contém apenas o id deste avaliador.
 * Esta renderização de avaliações pode ser um pouco lenta
 */
const avaliacoesToHTML = (avaliacoes) => avaliacoes
  .map(avaliacao => { 
    let finder = findClient(avaliacao.clienteAvaliador)
    let aux = finder.then(res => {
      return res.map(c => {
        if (c.id === avaliacao.clienteAvaliador) return c.nome
      })
    })
    aux.then(res => {
      res.forEach(item => {  
        if (item !== undefined) {
          let render = `
            <tr ${avaliacao.id}>
                <th scope="row">${item}</th>
                <td>${avaliacao.dataAvaliacao}</td>
                <td>${avaliacao.notaAvaliacao}</td>
                <td>${avaliacao.feedback}</td>
                <td class="trash-icon" name="${avaliacao.id}">X</td>
            </tr>
          `
          document.getElementById('toRenderAval').innerHTML += render.replace(/,/gi, '')
        }
      })
    })
  })

const renderTableAval = () => {
  let con = new AvaliacoesController()
  
  con.getAllAvaliacoesByAPI()
    .then(res => res.json())
    .then(jsonToAvaliacoes)
    .then(avaliacoesToHTML)
    .then(avaliacoes => avaliacoes.join())
    .catch(console.log)
}
export default renderTableAval
