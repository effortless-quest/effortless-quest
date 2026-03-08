const tickers = [
  'WEEKLY QUEST ACTIVE', 'BUSINESS TOURNAMENT OPEN', 'NEW CHARITY MISSION UNLOCKED',
  'LEADERBOARD RESET IN 3 DAYS', 'INVENTION CENTER NOW LIVE', 'LUMA AI INTEGRATION AVAILABLE',
];

export default function XPBanner() {
  const doubled = [...tickers, ...tickers];
  return (
    <div
      className="overflow-hidden py-3 border-y"
      style={{
        background: 'linear-gradient(90deg, rgba(124,58,237,.15), rgba(245,200,66,.1), rgba(6,182,212,.1))',
        borderColor: 'rgba(245,200,66,.2)',
      }}
    >
      <div className="flex gap-12 whitespace-nowrap animate-scroll-banner">
        {doubled.map((t, i) => (
          <span
            key={i}
            className="text-xs font-bold tracking-widest uppercase flex-shrink-0"
            style={{ color: 'var(--gold)', fontFamily: 'var(--font-ui)' }}
          >
            ⚔️ &nbsp;{t}
          </span>
        ))}
      </div>
    </div>
  );
}
