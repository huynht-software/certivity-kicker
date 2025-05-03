'use client'

import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import { Check, ChevronsUpDown } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'

export type SimpleSelectProps<T> = {
  options: readonly T[] | T[]
  onSelection: (selection: T) => void
  currentSelection: T | undefined
  icon?: React.ReactNode
  searchable?: boolean
  placeholder?: string
  disabled?: boolean
  required?: boolean
  validate?: boolean
  render?: (option: T) => React.ReactNode
  triggerNode?: React.ReactNode
  width?: string
}

export function DropdownInput<T>(props: SimpleSelectProps<T>) {
  const triggerRef = useRef<HTMLButtonElement>(null)
  const triggerWidth = useMemo(() => {
    return triggerRef.current ? triggerRef.current.offsetWidth : 0
  }, [triggerRef.current])

  const [open, setOpen] = useState(false)
  const [valid, setValid] = useState(true)

  useEffect(() => {
    if (!props.validate) {
      return
    }

    if (
      props.required &&
      (props.currentSelection === undefined ||
        props.currentSelection === null ||
        props.currentSelection === '')
    ) {
      setValid(false)
    }
  }, [props.validate])

  const displayValue = useMemo(() => {
    if (!props.currentSelection)
      return <span className="text-gray-500">{props.placeholder}</span>

    if (props.render) return props.render(props.currentSelection)

    return String(props.currentSelection)
  }, [props.currentSelection, props.placeholder, props.render])

  return (
    <Popover
      open={open}
      onOpenChange={(_open) => {
        if (props.disabled) return
        setOpen(_open)

        if (!_open && props.required && !props.currentSelection) {
          setValid(false)
        }
      }}
    >
      <div className="w-full">
        <PopoverTrigger
          ref={triggerRef}
          asChild
          className={cn(
            props.disabled
              ? 'cursor-not-allowed opacity-50 hover:bg-white'
              : '',
            valid ? '' : 'border-red-500'
          )}
        >
          {props.triggerNode ?? (
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full"
            >
              <div className="mr-auto flex items-center gap-2">
                {props.icon} {displayValue}
              </div>
              {!valid && (
                <ExclamationCircleIcon className="mx-1 size-5 text-red-500" />
              )}
              <ChevronsUpDown className={`ml-1 h-4 w-4 shrink-0 opacity-50`} />
            </Button>
          )}
        </PopoverTrigger>
        {props.required && !valid && (
          <div className="flex text-xs text-red-500">
            <div className="ml-1 mt-1">This field is required</div>
          </div>
        )}
      </div>
      <PopoverContent
        align="start"
        className="p-0"
        style={{
          width: props.width ?? triggerWidth + 'px',
        }}
      >
        <Command>
          {props.searchable && <CommandInput placeholder="Search..." />}
          <CommandEmpty>No entries found.</CommandEmpty>
          <CommandList>
            <CommandGroup>
              {props.options.map((option, index) => (
                <CommandItem
                  key={index}
                  className="cursor-pointer"
                  onClick={(e) => e.stopPropagation()}
                  onSelect={(selection) => {
                    const newSelection =
                      selection === props.currentSelection ? undefined : option

                    props.onSelection(option)

                    if (newSelection !== undefined) {
                      setValid(true)
                    }

                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      option === props.currentSelection
                        ? 'opacity-100'
                        : 'opacity-0'
                    )}
                  />
                  {props.render ? props.render(option) : String(option)}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
