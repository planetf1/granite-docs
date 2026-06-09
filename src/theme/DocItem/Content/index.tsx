// SPDX-License-Identifier: Apache-2.0
import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import Heading from '@theme/Heading';
import MDXContent from '@theme/MDXContent';
import type {Props} from '@theme/DocItem/Content';

function useSyntheticTitle(): string | null {
  const {metadata, frontMatter, contentTitle} = useDoc();
  const shouldRender =
    !frontMatter.hide_title && typeof contentTitle === 'undefined';
  if (!shouldRender) {
    return null;
  }
  return metadata.title;
}

export default function DocItemContent({children}: Props): ReactNode {
  const syntheticTitle = useSyntheticTitle();
  const {frontMatter} = useDoc();
  const description = (frontMatter as {description?: string}).description;

  return (
    <div className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown')}>
      {syntheticTitle && (
        <header>
          <Heading as="h1">{syntheticTitle}</Heading>
        </header>
      )}
      {description && (
        <p style={{
          fontSize: '1.1rem',
          color: 'var(--ifm-color-emphasis-700)',
          marginTop: '-0.5rem',
          marginBottom: '1.5rem',
        }}>
          {description}
        </p>
      )}
      <MDXContent>{children}</MDXContent>
    </div>
  );
}
