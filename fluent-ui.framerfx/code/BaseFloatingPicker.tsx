import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerBaseFloatingPicker = props => {
    return <System.BaseFloatingPicker {...props}></System.BaseFloatingPicker>
}

export const BaseFloatingPicker = withHOC(InnerBaseFloatingPicker)

BaseFloatingPicker.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(BaseFloatingPicker, {
    resolveDelay: {
        title: "Resolve delay",
        type: ControlType.Number,
    },
    searchingText: {
        title: "Searching text",
        type: ControlType.String,
        defaultValue: "searchingText",
    },
    calloutWidth: {
        title: "Callout width",
        type: ControlType.Number,
    },
})
