import GridDisplay from './grid-display';

export default function Game({ level, size, onComplete, onError, life }) {
  if (level === 0) {
    return null;
  }

  return (
    <section>
      <h3>Level: {level}</h3>

      <GridDisplay
        rows={size.rows}
        cols={size.cols}
        onComplete={onComplete}
        onError={onError}
        disabled={life === 0}
      />

      <p style={{ fontSize: '2rem' }}>Life Left: {life}</p>
    </section>
  );
}
