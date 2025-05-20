export function gerarRelatorio(bets) {
  const header = `
    <!DOCTYPE html><html><head><meta charset="UTF-8">
    <title>Relatório Mach 2</title>
    <style>
      body{font-family:sans-serif;margin:2em;}
      table{border-collapse:collapse;width:100%;}
      th,td{border:1px solid #ccc;padding:0.5em;text-align:center;}
      .win{background:#cfc;}.loss{background:#fcc;}
    </style></head><body>
    <h1>Relatório Mach 2 + Masaniello</h1>
    <table>
      <tr><th>#</th><th>Data/Hora</th><th>Descrição</th><th>Odds</th><th>Stake</th><th>R</th></tr>
  `;
  const rows = bets.map((b,i) => {
    const cls = b.resultado ? 'win' : 'loss';
    const time = new Date(b.timestamp).toLocaleString();
    const mark = b.resultado ? '✔️' : '❌';
    return `<tr class="${cls}">
      <td>${i+1}</td><td>${time}</td><td>${b.descricao}</td>
      <td>${b.odds}</td><td>${b.stake}</td><td>${mark}</td>
    </tr>`;
  }).join('\n');
  return header + rows + '</table></body></html>';
}
