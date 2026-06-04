import React from 'react';

interface CardGroupProps {
  cols?: number; // accepted for back-compat with existing MDX; layout is auto-fit
  children?: React.ReactNode;
}

export default function CardGroup({children}: CardGroupProps): React.ReactElement {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
      gap: '1rem',
      marginBottom: '1rem',
    }}>
      {children}
    </div>
  );
}
