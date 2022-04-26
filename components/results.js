export default function Results(results) {
  const randomResults = results.results
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);
  return (
    <>
      <h1>You should try </h1>
      {randomResults.map((result) => (
        <div key={result.name}>
          {result.name}: {result.family}
        </div>
      ))}
    </>
  );
}
