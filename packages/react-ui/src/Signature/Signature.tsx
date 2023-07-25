import * as React from 'react';
import { classNames, ClassNames } from '..';

/**
 * The props types for component {@link Signature}
 */
export type SignatureProps = React.ComponentProps<'div'> & {
  /**
   * The signature author.
   */
  author: string;
  /**
   * The signature author link.
   */
  link?: string;
  /**
   * The copyright statement (e.g. Powered by).
   */
  statement: string;
} & ClassNames;

/**
 * Renders a signature notice.
 *
 * @category Component
 */
export function Signature({
  author,
  children,
  className,
  link,
  statement,
  ...props
}: SignatureProps) {
  return (
    <div
      {...props}
      className={classNames('signature', className)}
      data-testid="signature"
    >
      <span className="signature-statement">{statement}</span>
      <span className="signature-author">
        {link ? (
          <a
            className="signature-link"
            href={link}
            rel="noopener noreferrer"
            target="_blank"
          >
            {author}
          </a>
        ) : (
          author
        )}
      </span>
      {children}
    </div>
  );
}
