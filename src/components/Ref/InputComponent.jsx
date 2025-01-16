import {forwardRef} from "react";

export default forwardRef(function InputComponent(props, ref) {
  return <input ref={ref} />;
});