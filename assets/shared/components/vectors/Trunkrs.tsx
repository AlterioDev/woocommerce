import React from 'react'

interface TrunkrsProps {
  variant?: 'default' | 'indigo'
  className?: string
}

const Trunkrs: React.FC<TrunkrsProps> = ({
  variant = 'default',
  className,
}) => (
  <svg className={className} viewBox="0 0 60 38.19">
    <g transform="translate(-238.467 -453.779)">
      <g transform="translate(238.467 453.779)">
        <g transform="translate(0 1.926)">
          <g>
            <g transform="translate(.243)">
              <path
                fill={variant === 'default' ? '#00d163' : '#220C4A'}
                d="M239.9 473.289a.981.981 0 0 0 .663 1.708l17.7-.048a1.56 1.56 0 0 0 1.046-.406l13.191-11.984-19.5.054a3.507 3.507 0 0 0-2.351.912z"
                transform="translate(-239.576 -462.559)"
              />
            </g>
            <path
              d="M296.542 462.586l-21.3.051a1.786 1.786 0 0 0-1.2.47l-12.629 11.57a1.523 1.523 0 0 0-.489 1.121v8.934a.94.94 0 0 1-.932.946l-8.148.02a3.363 3.363 0 0 0-2.27.892l-10.779 9.917a1 1 0 0 0 .662 1.729l20.974-.05a1.275 1.275 0 0 0 .858-.336l12.775-11.7a1.522 1.522 0 0 0 .49-1.12v-8.934a.94.94 0 0 1 .932-.946l8.739-.021a1.841 1.841 0 0 0 1.242-.488l11.606-10.678a.789.789 0 0 0-.531-1.377z"
              fill={variant === 'default' ? '#201047' : '#220C4A'}
              transform="translate(-238.467 -462.58)"
            />
          </g>
        </g>
      </g>
      <g transform="translate(554.613 460.161)">
        <path
          fill={variant === 'default' ? '#1d1047' : '#220C4A'}
          d="M1667.281 484.388a1.928 1.928 0 1 1-1.921-1.876 1.885 1.885 0 0 1 1.921 1.876zm-3.374 0a1.453 1.453 0 0 0 1.464 1.5 1.436 1.436 0 0 0 1.43-1.487 1.448 1.448 0 1 0-2.893-.011zm1.155.983h-.435V483.5a3.792 3.792 0 0 1 .72-.057 1.169 1.169 0 0 1 .652.137.52.52 0 0 1 .183.412.48.48 0 0 1-.389.434v.023a.553.553 0 0 1 .343.457 1.43 1.43 0 0 0 .137.469h-.469a1.613 1.613 0 0 1-.148-.458c-.034-.206-.149-.3-.389-.3h-.206zm.011-1.063h.206c.24 0 .434-.08.434-.275 0-.171-.126-.286-.4-.286a1.049 1.049 0 0 0-.24.023z"
          transform="translate(-1663.427 -482.512)"
        />
      </g>
    </g>
  </svg>
)

export default Trunkrs
