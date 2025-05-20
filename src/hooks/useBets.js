import { useState, useEffect } from 'react';

export function useBets() {
  const [bets, setBets] = useState(() => {
    const saved = localStorage.getItem('bets');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('bets', JSON.stringify(bets));
  }, [bets]);

  function addBet({ descricao, odds, stake, resultado }) {
    setBets(prev => [
      ...prev,
      { id: Date.now(), descricao, odds, stake, resultado, timestamp: new Date() }
    ]);
  }

  function clearBets() {
    setBets([]);
  }

  return { bets, addBet, clearBets };
}
