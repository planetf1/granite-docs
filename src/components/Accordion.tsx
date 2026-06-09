// SPDX-License-Identifier: Apache-2.0
import React from 'react';

interface AccordionProps {
  title?: string;
  children?: React.ReactNode;
}

export default function Accordion({title, children}: AccordionProps): React.ReactElement {
  return (
    <details className="granite-accordion">
      <summary>{title}</summary>
      <div className="granite-accordion-body">{children}</div>
    </details>
  );
}
