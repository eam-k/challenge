import { useState } from 'react'

export default function Dropdown({ listOfOptions, title, clickHandler }) {
  const [show, setShow] = useState(false)

  function dropDownHandler(e) {
    setShow(!show)
    clickHandler(e)
  }
  function showHandler() {
    setShow(!show)
  }
  return (
    <div className={`dropdown${show ? ' show' : ''}`}>
      <button
        onChange={showHandler}
        onClick={showHandler}
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenu2"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {title}
      </button>
      <div
        onClick={dropDownHandler}
        onKeyPress={dropDownHandler}
        tabIndex={0}
        role="button"
        className={`dropdown-menu${show ? ' show' : ''}`}
        aria-labelledby="dropdownMenu2"
      >
        {listOfOptions.map((opt, i) => {
          return (
            <button
              key={i}
              data-option={opt}
              className="dropdown-item"
              type="button"
            >
              {opt}
            </button>
          )
        })}
      </div>
    </div>
  )
}
