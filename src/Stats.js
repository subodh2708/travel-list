export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats"> Start adding some Items to your packing list.</p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;

  const percentage = Math.trunc((numPacked / items.length) * 100);

  return (
    <footer className="stats">
      {percentage === 100 ? (
        <p>You have packed everthing,You are ready to go✈️</p>
      ) : (
        <em>
          You have {numItems} items on your list. You have already packed
          {numPacked} ({percentage}%)
        </em>
      )}
    </footer>
  );
}
