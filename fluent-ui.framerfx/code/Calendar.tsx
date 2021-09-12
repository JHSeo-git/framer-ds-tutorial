import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerCalendar = props => {
    return <System.Calendar {...props}></System.Calendar>
}

export const Calendar = withHOC(InnerCalendar)

Calendar.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Calendar, {
    isMonthPickerVisible: {
        title: "Is month picker visible",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    isDayPickerVisible: {
        title: "Is day picker visible",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    showMonthPickerAsOverlay: {
        title: "Show month picker as overlay",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    firstDayOfWeek: {
        title: "First day of week",
        type: ControlType.Number,
    },
    dateRangeType: {
        title: "Date range type",
        type: ControlType.Number,
    },
    autoNavigateOnSelection: {
        title: "Auto navigate on selection",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    showGoToToday: {
        title: "Show go to today",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    shouldFocusOnMount: {
        title: "Should focus on mount",
        type: ControlType.Boolean,
        defaultValue: false,
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
    showSixWeeksByDefault: {
        title: "Show six weeks by default",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    selectDateOnClick: {
        title: "Select date on click",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    showCloseButton: {
        title: "Show close button",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    allFocusable: {
        title: "All focusable",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    yearPickerHidden: {
        title: "Year picker hidden",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    placeholder: {
        title: "Placeholder",
        type: ControlType.String,
        defaultValue: "placeholder",
    },
})
