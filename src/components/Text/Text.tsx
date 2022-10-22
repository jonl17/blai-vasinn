import { createElement, ElementType, ReactNode } from 'react'

import cn from 'classnames'

export interface ITextProps {
  /**
   * Type of element to render.
   */
  as?: ElementType
  /**
   * Predefined text appearance.
   */
  variant?: keyof typeof variants
  children?: ReactNode
  className?: string
}

const sizes: Record<keyof typeof variants, string> = /*tw*/ {
  /**
   * Define mobile and desktop text sizes
   */
  large: 'text-50/52',
  medium: 'text-29/32',
  small: 'text-18/20.5',
}

export type GetTextStylesProps = Pick<ITextProps, 'variant'>

const variants = {
  large: '',
  medium: '',
  small: '',
}

export const getTextStyles = (
  { variant = 'medium' }: GetTextStylesProps,
  className = ''
) => cn(sizes[variant], variants[variant], className)

export const Text = ({
  as = 'p',
  className,
  variant,
  ...restProps
}: ITextProps) =>
  createElement(as, {
    className: getTextStyles({ variant }, className),
    ...restProps,
  })

export default Text
