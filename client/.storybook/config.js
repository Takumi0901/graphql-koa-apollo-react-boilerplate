import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import requireContext from 'require-context.macro'

const req = requireContext('../src/stories', true, /.(story|stories).tsx$/)

function loadStories() {
  addDecorator(withInfo)
  addDecorator(withKnobs)
  req.keys().forEach(req)
}

configure(loadStories, module)
