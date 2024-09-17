import React, { useState } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('Select option')
  const [searchQuery, setSearchQuery] = useState('')

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionChange = (option: string) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const options = [
    { name: 'GitHub', icon: <GitHubIcon /> },
    { name: 'Instagram', icon: <InstagramIcon /> },
    { name: 'Facebook', icon: <FacebookIcon /> },
    { name: 'Twitter', icon: <TwitterIcon /> },
  ]

  const filteredOptions = options.filter((option) =>
    option.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className='relative'>
      <div onClick={toggleDropdown} className='cursor-pointer'>
        <span>{selectedOption}</span>
        <i>
          <KeyboardArrowDownIcon />
        </i>
      </div>
      {isOpen && (
        <div className='absolute mt-2 bg-white shadow-md rounded-lg py-2 w-48 z-10'>
          <div className='p-2'>
            <input
              type='text'
              value={searchQuery}
              onChange={handleSearch}
              placeholder='Search...'
              className='w-full px-2 py-1 border rounded-md focus:outline-none'
            />
          </div>
          <ul>
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <li
                  key={option.name}
                  className='px-4 py-2 hover:bg-orange cursor-pointer flex items-center'
                  onClick={() => handleOptionChange(option.name)}
                >
                  <i>{option.icon}</i>
                  <span className='ml-2'>{option.name}</span>
                </li>
              ))
            ) : (
              <li className='px-4 py-2 text-gray-500'>No options found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Dropdown
