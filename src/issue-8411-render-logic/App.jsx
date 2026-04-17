import { useState } from 'react';

// Verification Component for Issue #8411
function Counter({ max }) {
  const [count, setCount] = useState(0);

  // This condition triggers a 'render restart'
  if (count > max) {
    setCount(max);
  }

  return (
    <button 
      onClick={() => setCount(count + 1)}
      style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
    >
      Count is: {count}
    </button>
  );
}

export default function App() {
  return (
    <div style={{ padding: '50px', fontFamily: 'sans-serif', lineHeight: '1.6' }}>
      <h2>Testing Issue #8411</h2>
      <p>
        This test investigates the claim that updating state during render causes an infinite loop. 
        If the documentation is accurate, the browser should hang or crash when <code>count &gt; 5</code>. 
        If the author is correct, React will perform a <strong>settled render restart</strong> and stop at 5.
      </p>

      <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
        <h3>Interactive Test</h3>
        <Counter max={5} />
        <p style={{ fontSize: '0.9em', color: '#666', marginTop: '10px' }}>
          <em>Observation: Note that the count never exceeds 5 in the UI, proving the render cycle stabilises.</em>
        </p>
      </div>
    </div>
  );
}