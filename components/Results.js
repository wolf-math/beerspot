export default function Results(results) {
  const randomResults = results.results
    .sort(() => Math.random() - 0.5)
    .slice(0, 20);
  return (
    <>
      <h1>You could try </h1>
      {randomResults.map((result) => (
        <div key={result.name}>
          {result.name || result}
          {result.family && ':'} {result.family}
        </div>
      ))}
    </>
  );
}
