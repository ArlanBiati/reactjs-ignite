import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">+ R$ 1.000,00</td>
            <td>Desenvolvimento</td>
            <td>03/08/2021</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 500,00</td>
            <td>Casa</td>
            <td>01/08/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}