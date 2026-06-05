import React from 'react';
import * as LucideIcons from 'lucide-react';

type LucideIconName = keyof typeof LucideIcons;

function kebabToPascal(name: string): string {
  return name
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

function parseStyle(style: React.CSSProperties | string | undefined): React.CSSProperties | undefined {
  if (!style || typeof style !== 'string') return style as React.CSSProperties | undefined;
  return Object.fromEntries(
    style.split(';').filter(Boolean).map(decl => {
      const [prop, ...rest] = decl.split(':');
      const camel = prop.trim().replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
      return [camel, rest.join(':').trim()];
    }),
  ) as React.CSSProperties;
}

interface IconProps {
  icon: string;
  size?: number;
  style?: React.CSSProperties | string;
  className?: string;
}

export default function Icon({icon, size = 16, style, className}: IconProps): React.ReactElement | null {
  if (icon.startsWith('/') || icon.startsWith('./') || icon.startsWith('http')) {
    const imgStyle: React.CSSProperties = {
      width: size,
      height: size,
      objectFit: 'contain',
      ...parseStyle(style),
    };
    return <img src={icon} alt="" width={size} height={size} style={imgStyle} className={className} />;
  }

  const pascalName = kebabToPascal(icon) as LucideIconName;
  const LucideIcon = LucideIcons[pascalName] as React.ComponentType<{
    size?: number;
    style?: React.CSSProperties;
    className?: string;
  }> | undefined;

  if (!LucideIcon) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`[Icon] unknown icon name: "${icon}"`);
    }
    return null;
  }

  return (
    <LucideIcon
      size={size}
      style={parseStyle(style)}
      className={className}
    />
  );
}
