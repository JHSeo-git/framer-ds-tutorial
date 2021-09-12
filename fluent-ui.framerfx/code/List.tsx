import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerList = props => {
    return <System.List {...props}></System.List>
}

export const List = withHOC(InnerList)

List.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(List, {
    renderedWindowsAhead: {
        title: "Rendered windows ahead",
        type: ControlType.Number,
    },
    renderedWindowsBehind: {
        title: "Rendered windows behind",
        type: ControlType.Number,
    },
    startIndex: {
        title: "Start index",
        type: ControlType.Number,
    },
    renderCount: {
        title: "Render count",
        type: ControlType.Number,
    },
    usePageCache: {
        title: "Use page cache",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    role: {
        title: "Role",
        type: ControlType.String,
    },
    ignoreScrollingState: {
        title: "Ignore scrolling state",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
