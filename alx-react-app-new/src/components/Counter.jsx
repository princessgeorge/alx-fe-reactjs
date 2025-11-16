import { useState } from 'react';

const Counter = () => {
  // Initialize state
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '50px',
        padding: '20px',
        border: '2px solid gray',
        borderRadius: '10px',
        width: '250px',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#f5f5f5',
      }}
    >
      <h2>Simple Counter</h2>
      <p style={{ fontSize: '20px', margin: '20px 0' }}>Current Count: {count}</p>
      <div>
        <button
          onClick={() => setCount(count + 1)}
          style={{ margin: '5px', padding: '10px 15px' }}
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          style={{ margin: '5px', padding: '10px 15px' }}
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(0)}
          style={{ margin: '5px', padding: '10px 15px' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
