import React from 'react';
import OriginalDocItemContent from '@theme-original/DocItem/Content';
import type DocItemContentType from '@theme/DocItem/Content';
import type {WrapperProps} from '@docusaurus/types';
import {useDoc} from '@docusaurus/plugin-content-docs/client';

type Props = WrapperProps<typeof DocItemContentType>;

export default function DocItemContent(props: Props): React.ReactElement {
  const {frontMatter} = useDoc();
  const description = (frontMatter as {description?: string}).description;

  return (
    <>
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
      <OriginalDocItemContent {...props} />
    </>
  );
}
