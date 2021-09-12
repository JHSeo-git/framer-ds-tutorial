import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerTagPickerBase = props => {
    return <System.TagPickerBase {...props}></System.TagPickerBase>
}

export const TagPickerBase = withHOC(InnerTagPickerBase)

TagPickerBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(TagPickerBase, {
    name: {
        title: "Name",
        type: ControlType.String,
    },
})
