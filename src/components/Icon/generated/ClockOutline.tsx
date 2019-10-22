/* tslint:disable */
import React from 'react'

const SvgClockOutline = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
    <defs>
      <path
        id='clock-outline_svg__a'
        d='M10 0c5.514 0 10 4.486 10 10s-4.486 10-10 10S0 15.514 0 10 4.486 0 10 0zm0 2c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 2.5c.667 0 1 .333 1 1v4.155l2.01 1.996c.435.426.429.872-.02 1.336-.447.465-.922.471-1.426.02l-1.962-1.919c-.246-.26-.407-.48-.483-.663-.077-.182-.117-.437-.119-.767V5.5c0-.667.333-1 1-1z'
      />
    </defs>
    <use transform='translate(2 2)' xlinkHref='#clock-outline_svg__a' />
  </svg>
)

export default SvgClockOutline
