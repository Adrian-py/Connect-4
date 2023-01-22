interface propsAttribute {
  newWinner: string;
  handleChangePhase: () => void;
}

export default function EndMenu({
  newWinner,
  handleChangePhase,
}: propsAttribute) {
  return (
    <main>
      <h1>{newWinner} wins!</h1>
      <button onClick={handleChangePhase}>play again</button>
    </main>
  );
}
