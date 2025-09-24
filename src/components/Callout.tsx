import type { ReactNode } from 'react';

interface CalloutProps {
  type?: 'info' | 'warning' | 'error';
  children: ReactNode;
}

const Callout = ({ type = 'info', children }: CalloutProps) => {
  let bgColor = 'bg-blue-100';
  let textColor = 'text-blue-800';
  let borderColor = 'border-blue-400';

  switch (type) {
    case 'warning':
      bgColor = 'bg-yellow-100';
      textColor = 'text-yellow-800';
      borderColor = 'border-yellow-400';
      break;
    case 'error':
      bgColor = 'bg-red-100';
      textColor = 'text-red-800';
      borderColor = 'border-red-400';
      break;
    case 'info':
    default:
      // Default values already set
      break;
  }

  return (
    <div className={`p-4 my-4 rounded-md border-l-4 ${bgColor} ${borderColor}`}>
      <p className={`font-medium ${textColor}`}>{children}</p>
    </div>
  );
};

export default Callout;