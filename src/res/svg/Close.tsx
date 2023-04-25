import React from 'react';

import { SVGProps } from './SVG.props';

const Close = (props: SVGProps): JSX.Element => {
  const { width, height, fill } = props;
  return (
    <svg
      width={width || '14'}
      height={height || '14'}
      viewBox="0 0 14 14"
      fill={fill || 'none'}
      {...props}
    >
      <path
        d="M8.175 7l5.25-5.242A.837.837 0 0012.24.575L7 5.825 1.758.575A.837.837 0 00.575 1.758L5.825 7l-5.25 5.242a.834.834 0 00.27 1.366.833.833 0 00.913-.183L7 8.175l5.241 5.25a.833.833 0 001.184 0 .834.834 0 000-1.183L8.175 7z"
        fill={fill || '#070550'}
      />
    </svg>
  );
};

export default Close;
