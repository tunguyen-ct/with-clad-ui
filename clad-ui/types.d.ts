/**
 * Reusable custom types for whole project
 */
import { MouseEvent, MouseEventHandler } from 'react';

/**
 * The interface of an `<a>` tag or CustomLink component expected by
 * [`next/link`](https://nextjs.org/docs/api-reference/next/link) wrapper
 */
export type NextLink = {
  href?: string;
  onClick?: MouseEventHandler | ((event: MouseEvent, value: any) => void);
  ref?: any;
};
