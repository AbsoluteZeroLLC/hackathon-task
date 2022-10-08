import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const ShareIcon = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M11.082 8.951v0a9.666 9.666 0 0 0-8.582 9.6v.612h0a11.4 11.4 0 0 1 8.582-4.117v3.227a1.222 1.222 0 0 0 1.979.96l7.99-6.31v0a1.18 1.18 0 0 0 0-1.852l-7.99-6.309v0a1.222 1.222 0 0 0-1.98.96l.001 3.229Z"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default ShareIcon
