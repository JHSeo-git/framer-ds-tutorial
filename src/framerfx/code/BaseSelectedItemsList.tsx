import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerBaseSelectedItemsList = props => {
    return <System.BaseSelectedItemsList {...props}></System.BaseSelectedItemsList>
}

export const BaseSelectedItemsList = withHOC(InnerBaseSelectedItemsList)

BaseSelectedItemsList.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(BaseSelectedItemsList, {})
