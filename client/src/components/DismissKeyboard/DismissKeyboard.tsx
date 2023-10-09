import React, {FC, PropsWithChildren} from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

interface DismissKeyboardProps {
  children: React.ReactNode
}

const DismissKeyboard: FC<PropsWithChildren<DismissKeyboardProps>> = ({children} : any) => {

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>
      {children}
    </TouchableWithoutFeedback>
  )
}


export default DismissKeyboard;