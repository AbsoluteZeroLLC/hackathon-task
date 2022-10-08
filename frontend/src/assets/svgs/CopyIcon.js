import * as React from "react"
import Svg, { Path, G, ClipPath, Defs } from "react-native-svg"

const CopyIcon = (props) => (
  <Svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G
      clipPath="url(#a)"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M16.763 13.421H9.29a2 2 0 0 1-2-2V8.684" />
      <Path d="M11.5 18h-6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1" />
      <Path d="M11.5 11V8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-3" />
      <Path d="m14.868 15.316 1.895-1.895-1.895-1.895" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(.5)" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default CopyIcon
