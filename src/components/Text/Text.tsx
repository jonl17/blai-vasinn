import { createElement, ElementType, ReactNode } from 'react'
import {
  GraebenbachMonoRegular,
  GraebenbachRegular,
  GraebenbachRegularItalic,
  ClarendonBold,
  ClarendonRegular,
} from '@src/pages/_app'

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
  style?: React.CSSProperties
}

const sizes: Record<keyof typeof variants, string> = /*tw*/ {
  /*
   * Define mobile and desktop text sizes
   */
  large: 'text-50/52',
  medium: 'text-29/32',
  small: 'text-18/20.5',
  dynamicLarge: 'text-3vw/1',
}

export type GetTextStylesProps = Pick<ITextProps, 'variant'>

const variants = {
  large: `${ClarendonRegular.className} uppercase`,
  medium: GraebenbachRegular.className,
  small: GraebenbachMonoRegular.className,
  dynamicLarge: `${ClarendonRegular.className} uppercase`,
}

export const getTextStyles = (
  { variant = 'medium' }: GetTextStylesProps,
  className = ''
) => cn(sizes[variant], variants[variant], className)

export const Text = ({
  as = 'p',
  className,
  variant,
  style,
  ...restProps
}: ITextProps) =>
  createElement(as, {
    className: getTextStyles({ variant }, className),
    style,
    ...restProps,
  })

export default Text
