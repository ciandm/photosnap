import React from 'react'
// COMPONENTS
import Nav from '../../components/shared/Nav/Nav';
import Footer from '../../components/shared/Footer/Footer';

// to reuse nav and footer across multiple pages without importing every time
const PageTemplate = ({ children }) => {
  return (
    <>
      <Nav />
      { children}
      <Footer />
    </>
  )
}

export default PageTemplate
