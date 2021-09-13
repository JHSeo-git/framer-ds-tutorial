import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerBaseExtendedPicker = props => {
    return <System.BaseExtendedPicker {...props}></System.BaseExtendedPicker>
}

export const BaseExtendedPicker = withHOC(InnerBaseExtendedPicker)

BaseExtendedPicker.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(BaseExtendedPicker, {
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    itemLimit: {
        title: "Item limit",
        type: ControlType.Number,
    },
    currentRenderedQueryString: {
        title: "Current rendered query string",
        type: ControlType.String,
    },
})
