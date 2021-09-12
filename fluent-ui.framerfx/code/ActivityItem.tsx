import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerActivityItem = props => {
    return <System.ActivityItem {...props}></System.ActivityItem>
}

export const ActivityItem = withHOC(InnerActivityItem)

ActivityItem.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(ActivityItem, {
    activityDescription: {
        title: "Activity description",
        type: ControlType.String,
        defaultValue: "activityDescription",
    },
    activityDescriptionText: {
        title: "Activity description text",
        type: ControlType.String,
        defaultValue: "activityDescriptionText",
    },
    activityIcon: {
        title: "Activity icon",
        type: ControlType.String,
    },
    comments: {
        title: "Comments",
        type: ControlType.String,
    },
    commentText: {
        title: "Comment text",
        type: ControlType.String,
        defaultValue: "commentText",
    },
    isCompact: {
        title: "Is compact",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    timeStamp: {
        title: "Time stamp",
        type: ControlType.String,
    },
    beaconColorOne: {
        title: "Beacon color one",
        type: ControlType.Color,
        defaultValue: "#09F",
    },
    beaconColorTwo: {
        title: "Beacon color two",
        type: ControlType.Color,
        defaultValue: "#09F",
    },
    animateBeaconSignal: {
        title: "Animate beacon signal",
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
