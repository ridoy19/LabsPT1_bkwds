import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const ChartIconStyles = styled.div`
  svg {
    /* enable-background: new 0 0 ${props => props.width} ${props =>
  props.height}; */
  }
`

const ChartIcon = ({ height = 20, width = 20 }) => (
  <ChartIconStyles>
    <svg
      x="0px"
      y="0px"
      width={width + "px"}
      height={height + "px"}
      viewBox={`0 0 32 32`}
    >
      <g>
        <g id="chartSvg">
          <g>
            <path
              d="M31.834,1.553c0.306-0.461,0.179-1.08-0.282-1.386c-0.462-0.305-1.08-0.179-1.386,0.283l-3.699,5.599
						C26.313,6.024,26.16,6.001,26,6.001c-1.652,0-3,1.347-3,3c0,0.318,0.063,0.619,0.155,0.907l-3.572,4.555
						c-0.461-0.288-1-0.462-1.582-0.462c-1.613,0-2.924,1.283-2.988,2.88l-5.651,3.291C8.812,19.466,7.963,19.001,7,19.001
						c-1.654,0-3,1.347-3,3c0,0.65,0.214,1.25,0.566,1.742l-4.402,6.709c-0.303,0.463-0.175,1.082,0.287,1.385
						c0.169,0.111,0.36,0.164,0.548,0.164c0.326,0,0.646-0.158,0.837-0.451l4.375-6.666C6.464,24.952,6.727,25.001,7,25.001
						c1.613,0,2.924-1.281,2.988-2.881l5.651-3.289c0.549,0.707,1.398,1.17,2.361,1.17c1.654,0,3-1.346,3-3
						c0-0.317-0.062-0.619-0.153-0.906l3.57-4.554c0.461,0.287,1,0.461,1.582,0.461c1.653,0,3-1.346,3-3
						c0-0.767-0.298-1.459-0.771-1.99L31.834,1.553z M7,23.001c-0.552,0-1-0.447-1-1c0-0.551,0.448-1,1-1s1,0.449,1,1
						C8,22.554,7.552,23.001,7,23.001z M18,18.001c-0.552,0-1-0.447-1-1c0-0.551,0.448-1,1-1s1,0.449,1,1
						C19,17.554,18.552,18.001,18,18.001z M26,10.001c-0.552,0-1-0.448-1-1c0-0.551,0.448-1,1-1s1,0.449,1,1
						C27,9.553,26.551,10.001,26,10.001z M6,30.001c-0.553,0-1,0.449-1,1c0,0.553,0.447,1,1,1s1-0.447,1-1
						C7,30.45,6.554,30.001,6,30.001z M11,30.001c-0.553,0-1,0.449-1,1c0,0.553,0.447,1,1,1s1-0.447,1-1
						C12,30.45,11.554,30.001,11,30.001z M16,30.001c-0.553,0-1,0.449-1,1c0,0.553,0.447,1,1,1s1-0.447,1-1
						C17,30.45,16.554,30.001,16,30.001z M21,30.001c-0.553,0-1,0.449-1,1c0,0.553,0.447,1,1,1c0.554,0,1-0.447,1-1
						C22,30.45,21.554,30.001,21,30.001z M26,30.001c-0.553,0-1,0.449-1,1c0,0.553,0.447,1,1,1c0.554,0,1-0.447,1-1
						C27,30.45,26.554,30.001,26,30.001z M31,30.001c-0.553,0-1,0.449-1,1c0,0.553,0.447,1,1,1c0.554,0,1-0.447,1-1
						C32,30.45,31.554,30.001,31,30.001z M1,27.001c0.553,0,1-0.447,1-1c0-0.551-0.447-1-1-1s-1,0.449-1,1
						C0,26.554,0.447,27.001,1,27.001z M1,22.001c0.553,0,1-0.447,1-1c0-0.551-0.447-1-1-1s-1,0.449-1,1
						C0,21.554,0.447,22.001,1,22.001z M1,17.001c0.553,0,1-0.447,1-1c0-0.551-0.447-1-1-1s-1,0.448-1,1
						C0,16.554,0.447,17.001,1,17.001z M1,12.001c0.553,0,1-0.446,1-1c0-0.552-0.447-1-1-1s-1,0.448-1,1
						C0,11.556,0.447,12.001,1,12.001z M1,7.001c0.553,0,1-0.446,1-1c0-0.552-0.447-1-1-1s-1,0.448-1,1C0,6.556,0.447,7.001,1,7.001z
						M1,2.001c0.553,0,1-0.446,1-1c0-0.552-0.447-1-1-1s-1,0.448-1,1C0,1.556,0.447,2.001,1,2.001z"
            />
          </g>
        </g>
      </g>
    </svg>
  </ChartIconStyles>
)

ChartIcon.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number
}

export default ChartIcon