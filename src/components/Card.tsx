// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import Link from '@docusaurus/Link';
import Icon from './Icon';

interface CardProps {
  title?: string;
  icon?: string;
  href?: string;
  children?: React.ReactNode;
}

export default function Card({title, icon, href, children}: CardProps): React.ReactElement {
  const content = (
    <div style={{
      border: '1px solid var(--ifm-color-emphasis-300)',
      borderRadius: '8px',
      padding: '1rem',
      marginBottom: '0.5rem',
      display: 'block',
      color: 'inherit',
      height: '100%',
    }}>
      {(icon || title) && (
        <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem'}}>
          {icon && <Icon icon={icon} size={20} style={{flexShrink: 0}} />}
          {title && <strong>{title}</strong>}
        </div>
      )}
      {children}
    </div>
  );

  if (href) {
    return <Link to={href} style={{textDecoration: 'none', display: 'block', height: '100%'}}>{content}</Link>;
  }
  return content;
}
