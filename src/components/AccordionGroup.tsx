// SPDX-License-Identifier: Apache-2.0
import React from 'react';

interface AccordionGroupProps {
  children?: React.ReactNode;
}

export default function AccordionGroup({children}: AccordionGroupProps): React.ReactElement {
  return <div className="granite-accordion-group">{children}</div>;
}
