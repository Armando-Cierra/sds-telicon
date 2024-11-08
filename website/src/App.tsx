import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Toolbar } from '@/components'
import { Home, IconList, Error } from '@/pages'
import { ActivePage } from '@/types'

export default function App(): JSX.Element {
  const [activePage, setActivePage] = useState<ActivePage>('Home')

  return (
    <Router>
      <Toolbar activePage={activePage} />
      <Routes>
        <Route path="/" element={<Home setActivePage={setActivePage} />} />
        <Route
          path="/icon-list"
          element={<IconList setActivePage={setActivePage} />}
        />
        <Route path="*" element={<Error setActivePage={setActivePage} />} />
      </Routes>
    </Router>
  )
}
