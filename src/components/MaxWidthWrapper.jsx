import { cn } from '@/lib/utils'
import React from 'react'

const MaxWidthWrapper = ({className = "", children}) => {
  return (
    <div className={cn('max-w-screen ', className)}>
        {children}
    </div>
  )
}

export default MaxWidthWrapper