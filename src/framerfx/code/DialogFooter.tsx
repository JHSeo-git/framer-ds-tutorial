import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerDialogFooter = props => {
    return <System.DialogFooter {...props}></System.DialogFooter>
}

export const DialogFooter = withHOC(InnerDialogFooter)

DialogFooter.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(DialogFooter, {})
