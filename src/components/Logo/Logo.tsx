import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    <span
      aria-label="ines.me"
      className={clsx(
        'max-w-[9.375rem] w-full h-[34px] flex items-center text-lg font-semibold tracking-wide text-foreground',
        className,
      )}
      data-loading={loading}
      data-priority={priority}
    >
      ines.me
    </span>
  )
}
