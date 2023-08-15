import classNames, { Argument } from 'classnames';

export { classNames };

/**
 * The props types for classnames.
 */
export interface ClassNames {
  /**
   * The element className.
   */
  className?: Argument;
}

/**
 * The props types for a label without labelledby.
 */
export interface LabelType {
  labelledby?: never;
  /**
   * The label of the navigation.
   */
  label: string;
}

/**
 * The props types for a labelledby without label.
 */
export interface LabelledbyType {
  label?: never;
  /**
   * The id of the element which label the navigation.
   */
  labelledby: string;
}

/**
 * The props types for a label or a labelledby.
 */
export type Labelled = LabelType | LabelledbyType;
