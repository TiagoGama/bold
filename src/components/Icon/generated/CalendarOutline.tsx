import React from 'react'

const SvgCalendarOutline = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <path d='M16 2c.619 0 .95.27.995.812l.005.13V4h1c1.273 0 1.938.607 1.996 1.822L20 6v14c0 1.273-.607 1.938-1.822 1.996L18 22H6c-1.273 0-1.938-.607-1.996-1.822L4 20V6.004c0-1.275.607-1.942 1.822-2L6 4h1V3c-.002-.667.33-1 1-1 .621 0 .954.287.998.862L9.004 3v1H15V2.941c0-.627.333-.941 1-.941zm2 8H6v10h12V10zm-8.998 6H10c.667 0 1 .333 1 1 0 .619-.287.95-.862.995L10 18H9c-.667.001-1-.332-1-1 0-.62.289-.952.864-.995L9.002 16H10zM15 16c.667 0 1 .333 1 1s-.333 1-1 1h-1c-.667.001-1-.332-1-1 0-.668.335-1.001 1.002-1zm-5-4c.667 0 1 .333 1 1 0 .619-.287.95-.862.995L10 14H9c-.667.001-1-.332-1-1 0-.62.289-.952.864-.995L9.002 12H10zm5 0c.667 0 1 .333 1 1 0 .619-.287.95-.862.995L15 14h-1c-.667.001-1-.332-1-1 0-.62.289-.952.864-.995l.138-.005H15zm3-6H6v2h12V6z' />
  </svg>
)

export default SvgCalendarOutline