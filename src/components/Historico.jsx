export default function Historico({ bets }) {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th><th>Hora</th><th>Desc</th>
          <th>Odds</th><th>Stake</th><th>✔/❌</th>
        </tr>
      </thead>
      <tbody>
        {bets.map((b, i) => (
          <tr key={b.id} className={b.resultado ? 'win' : 'loss'}>
            <td>{i+1}</td>
            <td>{new Date(b.timestamp).toLocaleTimeString()}</td>
            <td>{b.descricao}</td>
            <td>{b.odds}</td>
            <td>{b.stake}</td>
            <td>{b.resultado ? '✔️' : '❌'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
