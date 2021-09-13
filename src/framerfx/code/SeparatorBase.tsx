import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSeparatorBase = props => {
    return <System.SeparatorBase {...props}></System.SeparatorBase>
}

export const SeparatorBase = withHOC(InnerSeparatorBase)

SeparatorBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(SeparatorBase, {
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
