import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSeparator = props => {
    return <System.Separator {...props}></System.Separator>
}

export const Separator = withHOC(InnerSeparator)

Separator.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Separator, {
    vertical: {
        title: "Vertical",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    alignContent: {
        title: "Align content",
        type: ControlType.Enum,
        options: ["start", "end", "center"],
        optionTitles: ["start", "end", "center"],
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
