import * as React from "react"
import * as System from "office-ui-fabric-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerSuggestions = props => {
    return <System.Suggestions {...props}></System.Suggestions>
}

export const Suggestions = withHOC(InnerSuggestions)

Suggestions.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Suggestions, {
    suggestionsHeaderText: {
        title: "Suggestions header text",
        type: ControlType.String,
        defaultValue: "suggestionsHeaderText",
    },
    mostRecentlyUsedHeaderText: {
        title: "Most recently used header text",
        type: ControlType.String,
        defaultValue: "mostRecentlyUsedHeaderText",
    },
    searchForMoreText: {
        title: "Search for more text",
        type: ControlType.String,
        defaultValue: "searchForMoreText",
    },
    forceResolveText: {
        title: "Force resolve text",
        type: ControlType.String,
        defaultValue: "forceResolveText",
    },
    suggestionsClassName: {
        title: "Suggestions class name",
        type: ControlType.String,
    },
    searchErrorText: {
        title: "Search error text",
        type: ControlType.String,
        defaultValue: "searchErrorText",
    },
    noResultsFoundText: {
        title: "No results found text",
        type: ControlType.String,
        defaultValue: "noResultsFoundText",
    },
    suggestionsItemClassName: {
        title: "Suggestions item class name",
        type: ControlType.String,
    },
    moreSuggestionsAvailable: {
        title: "More suggestions available",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    isLoading: {
        title: "Is loading",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    isSearching: {
        title: "Is searching",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    loadingText: {
        title: "Loading text",
        type: ControlType.String,
        defaultValue: "loadingText",
    },
    searchingText: {
        title: "Searching text",
        type: ControlType.String,
        defaultValue: "searchingText",
    },
    isMostRecentlyUsedVisible: {
        title: "Is most recently used visible",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    isResultsFooterVisible: {
        title: "Is results footer visible",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    resultsMaximumNumber: {
        title: "Results maximum number",
        type: ControlType.Number,
    },
    showRemoveButtons: {
        title: "Show remove buttons",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    suggestionsAvailableAlertText: {
        title: "Suggestions available alert text",
        type: ControlType.String,
        defaultValue: "suggestionsAvailableAlertText",
    },
    suggestionsListId: {
        title: "Suggestions list id",
        type: ControlType.String,
    },
})
