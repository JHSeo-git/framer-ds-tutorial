import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerDocumentCardLogo = props => {
    return <System.DocumentCardLogo {...props}></System.DocumentCardLogo>
}

export const DocumentCardLogo = withHOC(InnerDocumentCardLogo)

DocumentCardLogo.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(DocumentCardLogo, {
    logoIcon: {
        title: "Logo icon",
        type: ControlType.String,
    },
    logoName: {
        title: "Logo name",
        type: ControlType.String,
    },
})
