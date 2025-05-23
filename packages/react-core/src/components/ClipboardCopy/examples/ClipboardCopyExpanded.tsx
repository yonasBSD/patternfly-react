import { ClipboardCopy, ClipboardCopyVariant } from '@patternfly/react-core';

export const ClipboardCopyExpanded: React.FunctionComponent = () => (
  <ClipboardCopy hoverTip="Copy" clickTip="Copied" variant={ClipboardCopyVariant.expansion}>
    Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting
    expansion.
  </ClipboardCopy>
);
