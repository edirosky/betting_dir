import { useBets } from './hooks/useBets';
import FormAposta from './components/FormAposta';
import Estatisticas from './components/Estatisticas';
import Historico from './components/Historico';
import ReportButton from './components/ReportButton';

export default function App() {
  const { bets, addBet, clearBets } = useBets();

  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1>Mach 2 + Masaniello</h1>
      <FormAposta onAdd={addBet}/>
      <button onClick={clearBets}>Limpar Tudo</button>
      <Estatisticas bets={bets}/>
      <Historico bets={bets}/>
      <ReportButton bets={bets}/>
    </div>
  );
}
