import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerDatePicker = props => {
    return <System.DatePicker {...props}></System.DatePicker>
}

export const DatePicker = withHOC(InnerDatePicker)

DatePicker.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(DatePicker, {
    label: {
        title: "Label",
        type: ControlType.String,
        defaultValue: "label",
    },
    isRequired: {
        title: "Is required",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    disabled: {
        title: "Disabled",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    underlined: {
        title: "Underlined",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    isMonthPickerVisible: {
        title: "Is month picker visible",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    showMonthPickerAsOverlay: {
        title: "Show month picker as overlay",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    allowTextInput: {
        title: "Allow text input",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    disableAutoFocus: {
        title: "Disable auto focus",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
    firstDayOfWeek: {
        title: "First day of week",
        type: ControlType.Number,
    },
    highlightCurrentMonth: {
        title: "Highlight current month",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    highlightSelectedMonth: {
        title: "Highlight selected month",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    showWeekNumbers: {
        title: "Show week numbers",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    firstWeekOfYear: {
        title: "First week of year",
        type: ControlType.Number,
    },
    showGoToToday: {
        title: "Show go to today",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    borderless: {
        title: "Borderless",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    allFocusable: {
        title: "All focusable",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    showCloseButton: {
        title: "Show close button",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    tabIndex: {
        title: "Tab index",
        type: ControlType.Number,
    },
})
