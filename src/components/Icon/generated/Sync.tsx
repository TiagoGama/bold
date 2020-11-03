import React from 'react'

const SvgSync = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path
      clipRule='evenodd'
      d='M7.423 16c1 1.194 2.535 1.999 4.607 1.998 3.553-.002 5.53-2.37 5.926-5.003.05-.329.208-.995 1.07-.995.862 0 .983.666.943.991A8.002 8.002 0 016 17.258v1.813a1 1 0 11-2 0V15a1 1 0 011-1h4.073a1 1 0 010 2h-1.65zm9.188-7.929c-.997-1.233-2.553-2.07-4.665-2.069-3.553.002-5.53 2.37-5.926 5.003-.05.329-.208.995-1.07.995-.863 0-.983-.666-.943-.991a8.001 8.001 0 0114.066-4.153V5a1 1 0 012 0v4.071a1 1 0 01-1 1H15a1 1 0 110-2h1.611z'
    />
  </svg>
)

export default SvgSync
