import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerOverflowSetBase = props => {
    return <System.OverflowSetBase {...props}></System.OverflowSetBase>
}

export const OverflowSetBase = withHOC(InnerOverflowSetBase)

OverflowSetBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(OverflowSetBase, {
    vertical: {
        title: "Vertical",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    overflowSide: {
        title: "Overflow side",
        type: ControlType.Enum,
        options: ["start", "end"],
        optionTitles: ["start", "end"],
    },
    doNotContainWithinFocusZone: {
        title: "Do not contain within focus zone",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    role: {
        title: "Role",
        type: ControlType.String,
    },
    keytipSequences: {
        title: "Keytip sequences",
        type: ControlType.Array,
    },
})
