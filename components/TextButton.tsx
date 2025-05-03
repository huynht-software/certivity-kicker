import LoadingDiv from '@/components/LoadingDiv'
import { useOutsideClick } from '@/hooks/useOutsideClick'
import { ChevronDownIcon } from 'lucide-react'
import { ReactNode, useState } from 'react'

type Props = {
  buttonText: string
  style?: ButtonStyle | undefined
  onClick: (e?: any) => void
  customStyling?: string
  tooltip?: string
  disabled?: boolean
  icon?: ReactNode
  isLoading?: boolean
  additionalOptions?: {
    icon?: ReactNode
    text: string
    onClick: (e?: any) => void
  }[]
}

type ButtonStyle = 'default' | 'outline' | 'negative'

export default function TextButton(props: Props) {
  const {
    tooltip = 'This button does not have a tooltip yet. Contact the devs if you want to have a better explanation of this button added.',
    style = 'default',
  } = props

  const [showAdditionalOptions, setShowAdditionalOptions] = useState(false)

  const additionalOptionsRef = useOutsideClick(() => {
    setShowAdditionalOptions(false)
  })

  const styleMapping = new Map<ButtonStyle, string>([
    ['default', 'default-button'],
    ['outline', 'ctvtOutlineButton'],
    ['negative', 'ctvtNegativeButton'],
  ])

  const buttonStyle = `${style ? styleMapping.get(style) : ''} ${
    props.customStyling ?? ''
  } ${
    props.disabled ? 'cursor-default opacity-50' : ''
  } flex items-center gap-2 drop-shadow-lg`

  return (
    <>
      {!props.isLoading ? (
        <button className="relative">
          <div className="flex items-center">
            <div
              onClick={(e) => {
                e.preventDefault()
                if (!props.disabled) {
                  props.onClick()
                }
              }}
              style={{
                borderTopRightRadius: !!props.additionalOptions ? '0px' : '6px',
                borderBottomRightRadius: !!props.additionalOptions
                  ? '0px'
                  : '6px',
              }}
              className={buttonStyle}
              title={tooltip}
            >
              {props.icon && props.icon}
              {props.buttonText}
            </div>
            {props.additionalOptions && (
              <>
                <div
                  className={buttonStyle + ' cursor-pointer'}
                  style={{
                    paddingInline: '3px',
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                  }}
                  onClick={() => setShowAdditionalOptions(true)}
                >
                  <ChevronDownIcon className="size-4" />
                </div>
                {showAdditionalOptions && props.additionalOptions && (
                  <div
                    ref={additionalOptionsRef}
                    className="absolute right-0 top-10 z-20 rounded-md border bg-white p-1 text-sm"
                  >
                    {props.additionalOptions.map((option) => {
                      return (
                        <div
                          className="flex cursor-pointer rounded-md p-2 hover:bg-gray-200"
                          onClick={() => {
                            option.onClick()
                            setShowAdditionalOptions(false)
                          }}
                        >
                          {option.icon}
                          {option.text}
                        </div>
                      )
                    })}
                  </div>
                )}
              </>
            )}
          </div>
        </button>
      ) : (
        <div className={`${buttonStyle} flex items-center`}>
          <LoadingDiv size={5} />
        </div>
      )}
    </>
  )
}
