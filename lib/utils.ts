import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

function exhaustiveGuard(x: never) {
  console.error(
    "Didn't expect to get here. One of your exhaustive switch statements seems to be incomplete.",
    x
  )
}

function formatDate(date: Date): string {
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0') // Month is 0-indexed
  const year = date.getFullYear()

  return `${day}.${month}.${year}`
}

function formatTime(date: Date): string {
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')

  return `${hours}:${minutes}`
}

export const Util = {
  exhaustiveGuard,
  formatDate,
  formatTime,
}
