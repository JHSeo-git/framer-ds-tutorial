import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerTagItemBase = props => {
    return <System.TagItemBase {...props}></System.TagItemBase>
}

export const TagItemBase = withHOC(InnerTagItemBase)

TagItemBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(TagItemBase, {
    enableTagFocusInDisabledPicker: {
        title: "Enable tag focus in disabled picker",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    title: {
        title: "Title",
        type: ControlType.String,
        defaultValue: "title",
    },
    index: {
        title: "Index",
        type: ControlType.Number,
    },
    selected: {
        title: "Selected",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    checked: {
        title: "Checked",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
