import { ArrowPathIcon } from '@heroicons/react/24/outline'
import { useMemo } from 'react'

type Props = {
  size?: number
}

export default function LoadingDiv(props: Props) {
  const { size = 10 } = props

  const dimensionStyles = useMemo(() => {
    if (!size) return 'h-10 w-10'

    switch (size) {
      case 2:
        return 'h-2 w-2'
      case 5:
        return 'h-5 w-5'
      case 6:
        return 'h-6 w-6'
      case 7:
        return 'h-7 w-7'
      case 8:
        return 'h-8 w-8'
      case 9:
        return 'h-9 w-9'
      case 10:
        return 'h-10 w-10'
      case 16:
        return 'h-16 w-16'
    }
  }, [size])

  return (
    <div className="flex items-center justify-center max-full-screen:mt-10">
      <ArrowPathIcon className={`animate-spin ${dimensionStyles}`} />
    </div>
  )
}
