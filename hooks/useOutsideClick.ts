import { useEffect, useRef } from 'react'

// This hook returns a ref object, which needs to be attached an html element via its "ref" attribute.
//
// e.g.
// const outsideClickRef = useOutsideClick(someCallBackFunction)
// <div ref={outsideClickRef}>foo bar </div>
//
// If there is a click outside of this html element, the callback will fire.

export const useOutsideClick = (callback: () => void) => {
  const ref = useRef<any>(null)

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback()
      }
    }

    document.addEventListener('click', handleClick, true)

    return () => {
      document.removeEventListener('click', handleClick, true)
    }
  }, [ref])

  return ref
}
