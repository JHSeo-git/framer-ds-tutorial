import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerDocumentCard = props => {
    return <System.DocumentCard {...props}></System.DocumentCard>
}

export const DocumentCard = withHOC(InnerDocumentCard)

DocumentCard.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(DocumentCard, {
    type: {
        title: "Type",
        type: ControlType.Number,
    },
    onClickHref: {
        title: "On click href",
        type: ControlType.String,
    },
    onClickTarget: {
        title: "On click target",
        type: ControlType.String,
    },
    role: {
        title: "Role",
        type: ControlType.String,
    },
    accentColor: {
        title: "Accent color",
        type: ControlType.Color,
        defaultValue: "#09F",
    },
    children: {
        title: "Children",
        type: ControlType.String,
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
