import * as React from "react"
import { ClipPath, Defs, G, Path, Svg } from "react-native-svg"

const SaveIcon = (props) => (
  <Svg
    width={24}
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
      <Path d="M12 17V3m9 14a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4" />
      <Path d="m17 12-5.001 5.001-5-5.001" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default SaveIcon
