import React from 'react';

interface NoteProps {
  children?: React.ReactNode;
}

export default function Note({children}: NoteProps): React.ReactElement {
  return (
    <div className="admonition admonition-note alert alert--secondary">
      <div className="admonition-heading"><span className="admonition-icon"></span><strong>Note</strong></div>
      <div className="admonition-content">{children}</div>
    </div>
  );
}
