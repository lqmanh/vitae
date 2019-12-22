import 'bootstrap/dist/css/bootstrap.min.css'

import Head from 'next/head'
import styled from 'styled-components'
import TopBar from './topbar'

const Layout = (props) => (
  <>
    <Head>
      <title>Vitae</title>
    </Head>
    <TopBar />
    <div className={props.className}>{props.children}</div>
  </>
)

export default styled(Layout)`
  margin-top: 48px;
`
