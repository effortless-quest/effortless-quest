export default function StarField() {
  return (
    <>
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 10%, rgba(124,58,237,.08) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 80% 80%, rgba(6,182,212,.05) 0%, transparent 50%),
            radial-gradient(ellipse 40% 60% at 50% 50%, rgba(168,85,247,.04) 0%, transparent 70%)
          `
        }}
      />
      <div className="star-field" />
    </>
  );
}
