import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerDocumentCardLocation = props => {
    return <System.DocumentCardLocation {...props}></System.DocumentCardLocation>
}

export const DocumentCardLocation = withHOC(InnerDocumentCardLocation)

DocumentCardLocation.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(DocumentCardLocation, {
    location: {
        title: "Location",
        type: ControlType.String,
    },
    locationHref: {
        title: "Location href",
        type: ControlType.String,
    },
})
