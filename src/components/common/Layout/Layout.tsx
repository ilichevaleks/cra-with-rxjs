import React, { FC } from 'react'
import Header from '../Header'
import Footer from '../Footer'

const Layout: FC = ({ children }) => (
    <div className="layout">
      <Header />
      <div className="layout-content">
        {children}
      </div>
      <Footer />
    </div>
)

export default Layout
