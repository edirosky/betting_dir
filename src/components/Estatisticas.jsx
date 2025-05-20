export default function Estatisticas({ bets }) {
  const total = bets.length;
  const wins = bets.filter(b => b.resultado).length;
  const pct = total ? ((wins/total)*100).toFixed(2) : '0.00';

  // Calcular cassa e magazzino
  let cassa = 100, magazzino = 0;
  bets.forEach(b => {
    if (b.resultado) {
      const profit = b.stake * (b.odds - 1);
      cassa += profit;
      magazzino += profit / 2;
    } else {
      cassa -= b.stake;
    }
  });

  return (
    <div>
      <p>Total: {total} | Vitórias: {wins} | Derrotas: {total-wins} | Win%: {pct}%</p>
      <p>Cassa atual: {cassa.toFixed(2)} | Magazzino: {magazzino.toFixed(2)}</p>
    </div>
  );
}
