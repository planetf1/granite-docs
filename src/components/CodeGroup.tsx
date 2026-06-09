// SPDX-License-Identifier: Apache-2.0
import React from 'react';

interface CodeGroupProps {
  children?: React.ReactNode;
}

// Renders all contained code blocks sequentially.
// A follow-up issue should convert these to native Docusaurus <Tabs> for tab UX.
export default function CodeGroup({children}: CodeGroupProps): React.ReactElement {
  return <div className="granite-codegroup">{children}</div>;
}
