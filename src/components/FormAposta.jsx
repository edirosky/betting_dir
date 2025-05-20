import { useState } from 'react';

export default function FormAposta({ onAdd }) {
  const [desc, setDesc] = useState('');
  const [odds, setOdds] = useState('');
  const [stake, setStake] = useState('');
  const [verdade, setVerdade] = useState(true);

  const handleSubmit = e => {
    e.preventDefault();
    if (!desc || !odds || !stake) return;
    onAdd({
      descricao: desc,
      odds: parseFloat(odds),
      stake: parseFloat(stake),
      resultado: verdade
    });
    setDesc(''); setOdds(''); setStake('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Descrição (e.g. Roma x Inter)"
        value={desc} onChange={e => setDesc(e.target.value)}
      />
      <input
        type="number" step="0.01" placeholder="Quota"
        value={odds} onChange={e => setOdds(e.target.value)}
      />
      <input
        type="number" step="0.01" placeholder="Puntata"
        value={stake} onChange={e => setStake(e.target.value)}
      />
      <label>
        <input
          type="radio" checked={verdade}
          onChange={() => setVerdade(true)}
        /> Venceu
      </label>
      <label>
        <input
          type="radio" checked={!verdade}
          onChange={() => setVerdade(false)}
        /> Perdeu
      </label>
      <button type="submit">Registrar</button>
    </form>
  );
}
