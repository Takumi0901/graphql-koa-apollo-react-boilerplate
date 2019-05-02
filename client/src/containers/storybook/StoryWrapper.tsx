import * as React from 'react'
import { ThemeProvider, theme } from 'src/styles'
import { BrowserRouter as Router } from 'react-router-dom'
import BaseStyle from 'src/styles/base'

const StoryWrapper: React.FC<{}> = ({ children }) => {
  return (
    <React.Fragment>
      <BaseStyle theme={theme} />
      <ThemeProvider theme={theme}>
        <Router>
          <div className="u-pt-32 u-pr-32 u-pb-32 u-pl-32">{children}</div>
        </Router>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default StoryWrapper
