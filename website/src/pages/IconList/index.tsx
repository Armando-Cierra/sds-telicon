import { useState, useEffect, ChangeEvent, MouseEvent } from 'react'
import { Telicon, AvailableTelicon } from '@sipster/react-telicon'
import { Text } from '@sipster/react-text'
import { TextInput } from '@sipster/react-text-input'
import { Toast, toastSubtleTrigger } from '@sipster/react-toast'
import teliconList from '@sipster/telicon/telicon-list.json'
import { ActivePage } from '@/types'
import 'react-toastify/dist/ReactToastify.css'
import './icon-list.scss'

type Props = {
  setActivePage: (e: ActivePage) => void
}

export function IconList({ setActivePage }: Props) {
  setActivePage('IconList')

  const [search, setSearch] = useState<string>('')
  const [filteredList, setFilteredList] = useState(
    teliconList as AvailableTelicon[] | []
  )

  useEffect(() => {
    setFilteredList(
      teliconList.filter((icon) => icon.indexOf(search.toLowerCase()) > -1) as
        | AvailableTelicon[]
        | []
    )
  }, [search])

  function captureData(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
  }

  function copyText(e: MouseEvent<HTMLDivElement>) {
    const value = e.currentTarget.getAttribute('data-clipboard-text')
    navigator.clipboard.writeText(value as string)
    toastSubtleTrigger({
      content: 'Icon Name Copied Successfully!',
      icon: 'copy--line'
    })
  }

  return (
    <>
      <Toast variant="subtle" />
      <main className="iconList">
        <div className="searchBar">
          <div className="container">
            <Text.H2 typeset="title2">Icon Reference Sheet</Text.H2>
            <TextInput.Control
              placeholder="Search Here..."
              icon="magnifying-glass--fill"
              onChange={captureData}
              hasClearAction
            />
          </div>
        </div>
        <div className="container">
          <div className="list">
            {filteredList.map((icon: AvailableTelicon, index: number) => (
              <div
                className="card"
                key={index}
                data-clipboard-text={icon}
                onClick={copyText}
              >
                <Telicon iconName={icon} size="default" />
                <span>{icon}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
