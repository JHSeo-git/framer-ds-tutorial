import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerPrimaryButton = props => {
    return <System.PrimaryButton {...props}></System.PrimaryButton>
}

export const PrimaryButton = withHOC(InnerPrimaryButton)

PrimaryButton.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(PrimaryButton, {
    href: {
        title: "Href",
        type: ControlType.String,
        defaultValue: "https://framer.com",
    },
    primary: {
        title: "Primary",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    uniqueId: {
        title: "Unique id",
        type: ControlType.String,
    },
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    allowDisabledFocus: {
        title: "Allow disabled focus",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    primaryDisabled: {
        title: "Primary disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    checked: {
        title: "Checked",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    toggle: {
        title: "Toggle",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    text: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "text",
    },
    split: {
        title: "Split",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    secondaryText: {
        title: "Secondary text",
        type: ControlType.String,
        defaultValue: "secondaryText",
    },
    buttonType: {
        title: "Button type",
        type: ControlType.Number,
    },
    toggled: {
        title: "Toggled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    menuTriggerKeyCode: {
        title: "Menu trigger key code",
        type: ControlType.Number,
    },
    persistMenu: {
        title: "Persist menu",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    renderPersistedMenuHiddenOnMount: {
        title: "Render persisted menu hidden on mount",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    description: {
        title: "Description",
        type: ControlType.String,
        defaultValue: "description",
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
