import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

type PortalProps = {
  children: React.ReactNode
};

function Portal({ children }: PortalProps) {
  const [container] = useState(() => document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, [container]);

  return (ReactDOM.createPortal(children, container));
}

export default Portal;
