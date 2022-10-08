import * as React from "react"
import Svg, { Path, G, ClipPath, Defs } from "react-native-svg"

const HomeIcon = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)" stroke="#fff" strokeWidth={1.5}>
      <Path d="m19.842 8.299-6-4.667a3 3 0 0 0-3.684 0l-6 4.667A2.998 2.998 0 0 0 3 10.667V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-7.333c0-.926-.427-1.8-1.158-2.368Z" />
      <Path d="M9 17h6" strokeLinecap="round" strokeLinejoin="round" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default HomeIcon
