import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerRating = props => {
    return <System.Rating {...props}></System.Rating>
}

export const Rating = withHOC(InnerRating)

Rating.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Rating, {
    rating: {
        title: "Rating",
        type: ControlType.Number,
    },
    min: {
        title: "Min",
        type: ControlType.Number,
    },
    max: {
        title: "Max",
        type: ControlType.Number,
    },
    allowZeroStars: {
        title: "Allow zero stars",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    icon: {
        title: "Icon",
        type: ControlType.String,
    },
    unselectedIcon: {
        title: "Unselected icon",
        type: ControlType.String,
    },
    size: {
        title: "Size",
        type: ControlType.Number,
    },
    readOnly: {
        title: "Read only",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    checked: {
        title: "Checked",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
