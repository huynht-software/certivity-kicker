import LoadingDiv from '@/components/LoadingDiv'
import { ReactNode } from 'react'

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

  const styleMapping = new Map<ButtonStyle, string>([
    ['default', 'default-button'],
    ['outline', 'ctvtOutlineButton'],
    ['negative', 'negative-button'],
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
