import * as React from 'react';

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
};

/**
 * Renders a signature notice.
 *
 * @category Component
 */
export function Signature({
  author,
  children,
  link,
  statement,
  ...props
}: SignatureProps) {
  return (
    <div {...props} data-testid="signature">
      <span>{statement}</span>
      <span>
        {link ? (
          <a href={link} rel="noopener noreferrer" target="_blank">
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
