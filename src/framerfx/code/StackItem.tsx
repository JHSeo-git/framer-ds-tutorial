import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerStackItem = props => {
    return <System.StackItem {...props}></System.StackItem>
}

export const StackItem = withHOC(InnerStackItem)

StackItem.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(StackItem, {
    grow: {
        title: "Grow",
        type: ControlType.Enum,
        options: ["initial", "inherit", "unset"],
        optionTitles: ["initial", "inherit", "unset"],
    },
    shrink: {
        title: "Shrink",
        type: ControlType.Enum,
        options: ["initial", "inherit", "unset"],
        optionTitles: ["initial", "inherit", "unset"],
    },
    disableShrink: {
        title: "Disable shrink",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    align: {
        title: "Align",
        type: ControlType.Enum,
        options: ["start", "end", "auto", "center", "stretch", "baseline"],
        optionTitles: ["start", "end", "auto", "center", "stretch", "baseline"],
    },
    verticalFill: {
        title: "Vertical fill",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    order: {
        title: "Order",
        type: ControlType.String,
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
