import React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = props => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      d="M4.325 5.317a.64.64 0 01-.442-.184.629.629 0 010-.883l3.025-3.025a.629.629 0 01.884 0 .629.629 0 010 .883L4.767 5.133a.655.655 0 01-.442.184zM15.675 5.317a.618.618 0 01-.442-.184l-3.025-3.025a.629.629 0 010-.883.629.629 0 01.884 0l3.025 3.025a.629.629 0 010 .883.64.64 0 01-.442.184z"
      fill="#fff"
    />
    <Path
      d="M16.842 8.833H3.333c-.583.009-1.25.009-1.733-.475-.383-.375-.558-.958-.558-1.816 0-2.292 1.675-2.292 2.475-2.292h12.966c.8 0 2.475 0 2.475 2.292 0 .866-.175 1.441-.558 1.816-.433.434-1.017.475-1.558.475zM3.517 7.583h13.158c.375.009.725.009.842-.108.058-.058.183-.258.183-.933 0-.942-.233-1.042-1.225-1.042H3.517c-.992 0-1.225.1-1.225 1.042 0 .675.133.875.183.933.117.108.475.108.842.108h.2zM8.133 15.25a.63.63 0 01-.625-.625v-2.958a.63.63 0 01.625-.625.63.63 0 01.625.625v2.958c0 .35-.283.625-.625.625zM11.967 15.25a.63.63 0 01-.625-.625v-2.958a.63.63 0 01.625-.625.63.63 0 01.625.625v2.958c0 .35-.284.625-.625.625z"
      fill="#fff"
    />
    <Path
      d="M12.408 18.958H7.383c-2.983 0-3.65-1.775-3.908-3.316L2.3 8.433a.623.623 0 01.517-.716.623.623 0 01.716.516l1.175 7.2c.242 1.475.742 2.275 2.675 2.275h5.025c2.142 0 2.384-.75 2.659-2.2l1.4-7.291a.614.614 0 01.733-.492.62.62 0 01.492.733l-1.4 7.292c-.325 1.692-.867 3.208-3.884 3.208z"
      fill="#fff"
    />
  </Svg>
)

export default SvgComponent
