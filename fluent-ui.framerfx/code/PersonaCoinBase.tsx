import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerPersonaCoinBase = props => {
    return <System.PersonaCoinBase {...props}></System.PersonaCoinBase>
}

export const PersonaCoinBase = withHOC(InnerPersonaCoinBase)

PersonaCoinBase.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(PersonaCoinBase, {
    text: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "text",
    },
    size: {
        title: "Size",
        type: ControlType.Number,
    },
    imageShouldFadeIn: {
        title: "Image should fade in",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    imageShouldStartVisible: {
        title: "Image should start visible",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    imageUrl: {
        title: "Image url",
        type: ControlType.String,
    },
    imageAlt: {
        title: "Image alt",
        type: ControlType.String,
    },
    imageInitials: {
        title: "Image initials",
        type: ControlType.String,
    },
    allowPhoneInitials: {
        title: "Allow phone initials",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    initialsColor: {
        title: "Initials color",
        type: ControlType.Color,
        defaultValue: "#09F",
    },
    initialsTextColor: {
        title: "Initials text color",
        type: ControlType.Color,
        defaultValue: "#09F",
    },
    presence: {
        title: "Presence",
        type: ControlType.Number,
    },
    presenceTitle: {
        title: "Presence title",
        type: ControlType.String,
        defaultValue: "presenceTitle",
    },
    isOutOfOffice: {
        title: "Is out of office",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    secondaryText: {
        title: "Secondary text",
        type: ControlType.String,
        defaultValue: "secondaryText",
    },
    tertiaryText: {
        title: "Tertiary text",
        type: ControlType.String,
        defaultValue: "tertiaryText",
    },
    optionalText: {
        title: "Optional text",
        type: ControlType.String,
        defaultValue: "optionalText",
    },
    hidePersonaDetails: {
        title: "Hide persona details",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    showSecondaryText: {
        title: "Show secondary text",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    showUnknownPersonaCoin: {
        title: "Show unknown persona coin",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    showInitialsUntilImageLoads: {
        title: "Show initials until image loads",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    coinSize: {
        title: "Coin size",
        type: ControlType.Number,
    },
    primaryText: {
        title: "Primary text",
        type: ControlType.String,
        defaultValue: "primaryText",
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
