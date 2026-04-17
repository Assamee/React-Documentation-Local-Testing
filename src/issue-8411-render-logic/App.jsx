import { useState } from 'react';

// ❌ The code from Issue #8411
function Counter({max}) {
  const [count, setCount] = useState(0);

  if (count > max) {
    setCount(max);
  }

  return (
    <button onClick={() => setCount(count + 1)}>
      Count is: {count}
    </button>
  );
}

export default function Issue8411App() {
  return (
    <div style={{ padding: '50px', fontFamily: 'sans-serif' }}>
      <h2>Testing Issue #8411</h2>
      <p>Click the button. If the docs are right, it will crash. If the author is right, it will stop at 5.</p>
      <Counter max={5} />
    </div>
  );
}