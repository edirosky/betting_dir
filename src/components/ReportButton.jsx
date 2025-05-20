import { gerarRelatorio } from '../utils/reportGenerator';

export default function ReportButton({ bets }) {
  const handleExport = () => {
    const html = gerarRelatorio(bets);
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'relatorio-mach2.html';
    a.click();
    URL.revokeObjectURL(url);
  };

  return <button onClick={handleExport}>Exportar HTML</button>;
}
