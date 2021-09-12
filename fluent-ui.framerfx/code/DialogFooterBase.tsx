import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerDialogFooterBase = props => {
    return <System.DialogFooterBase {...props}></System.DialogFooterBase>
}

export const DialogFooterBase = withHOC(InnerDialogFooterBase)

DialogFooterBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(DialogFooterBase, {})
