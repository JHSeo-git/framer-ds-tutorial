import * as React from 'react'
import * as System from 'office-ui-fabric-react'
import { ControlType, PropertyControls, addPropertyControls } from 'framer'
import { withHOC } from './withHOC'

const InnerActionButton = (props) => {
  return <System.ActionButton {...props}></System.ActionButton>
}

export const ActionButton = withHOC(InnerActionButton)

ActionButton.defaultProps = {
  width: 150,
  height: 50,
}

addPropertyControls(ActionButton, {
  href: {
    title: 'Href',
    type: 'string',
    defaultValue: 'https://framer.com',
  },
  primary: {
    title: 'Primary',
    type: 'boolean',
    defaultValue: false,
  },
  uniqueId: {
    title: 'Unique id',
    type: 'string',
  },
  disabled: {
    title: 'Disabled',
    type: 'boolean',
    defaultValue: false,
  },
  allowDisabledFocus: {
    title: 'Allow disabled focus',
    type: 'boolean',
    defaultValue: false,
  },
  primaryDisabled: {
    title: 'Primary disabled',
    type: 'boolean',
    defaultValue: false,
  },
  checked: {
    title: 'Checked',
    type: 'boolean',
    defaultValue: false,
  },
  toggle: {
    title: 'Toggle',
    type: 'boolean',
    defaultValue: false,
  },
  text: {
    title: 'Text',
    type: 'string',
    defaultValue: 'text',
  },
  split: {
    title: 'Split',
    type: 'boolean',
    defaultValue: false,
  },
  secondaryText: {
    title: 'Secondary text',
    type: 'string',
    defaultValue: 'secondaryText',
  },
  buttonType: {
    title: 'Button type',
    type: 'number',
  },
  toggled: {
    title: 'Toggled',
    type: 'boolean',
    defaultValue: false,
  },
  menuTriggerKeyCode: {
    title: 'Menu trigger key code',
    type: 'number',
  },
  persistMenu: {
    title: 'Persist menu',
    type: 'boolean',
    defaultValue: false,
  },
  renderPersistedMenuHiddenOnMount: {
    title: 'Render persisted menu hidden on mount',
    type: 'boolean',
    defaultValue: false,
  },
  description: {
    title: 'Description',
    type: 'string',
    defaultValue: 'description',
  },
  placeholder: {
    title: 'Placeholder',
    type: 'string',
    defaultValue: 'placeholder',
  },
})
