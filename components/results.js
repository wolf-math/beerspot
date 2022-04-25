export default function Results(results) {
  console.log(results.results.ma);
  return (
    <>
      <h1>Your results</h1>
      {results.results.map((result) => (
        <div key={result.name}>
          {result.name}: {result.family}
        </div>
      ))}
    </>
  );
}
