import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerChoiceGroupOption = props => {
    return <System.ChoiceGroupOption {...props}></System.ChoiceGroupOption>
}

export const ChoiceGroupOption = withHOC(InnerChoiceGroupOption)

ChoiceGroupOption.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(ChoiceGroupOption, {
    focused: {
        title: "Focused",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    required: {
        title: "Required",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    name: {
        title: "Name",
        type: ControlType.String,
    },
    text: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "text",
    },
    imageSrc: {
        title: "Image src",
        type: ControlType.String,
    },
    imageAlt: {
        title: "Image alt",
        type: ControlType.String,
    },
    selectedImageSrc: {
        title: "Selected image src",
        type: ControlType.String,
    },
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    checked: {
        title: "Checked",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    labelId: {
        title: "Label id",
        type: ControlType.String,
        defaultValue: "labelId",
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
