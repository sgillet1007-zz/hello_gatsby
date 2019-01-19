import React from 'react'
import PageHeader from './page_header'
import PageFooter from './page_footer'

export default ({ children }) => (
    <div>
        <PageHeader />
        {children}
        <PageFooter />
    </div>
)
