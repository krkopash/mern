import { useState } from 'react';

const ToggleMessage = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        Toggle Message
      </button>
      {show && <p>Hello from React Testing</p>}
    </div>
  );
};

export default ToggleMessage;
