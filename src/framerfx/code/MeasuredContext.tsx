import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerMeasuredContext = props => {
    return <System.MeasuredContext {...props}></System.MeasuredContext>
}

export const MeasuredContext = withHOC(InnerMeasuredContext)

MeasuredContext.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(MeasuredContext, {
    isMeasured: {
        title: "Is measured",
        type: ControlType.Boolean,
        defaultValue: false,
    },
})
