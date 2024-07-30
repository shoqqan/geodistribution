import React, { forwardRef } from 'react';
import styles from './button.module.scss';

type BaseButtonAttributes = React.ComponentPropsWithoutRef<'button'>;
type Ref = HTMLButtonElement;

interface ButtonProps extends BaseButtonAttributes {
  isLoading?: boolean;
  disabled?: boolean;
  className?:string;
  buttonVariant?: 'primary' | 'secondary';
}
const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
  const {
    type, children, buttonVariant = 'primary', disabled = false, isLoading = false, className = '', ...rest
  } = props;
  return (
    <button
      {...rest}
      ref={ref}
      type={type ? 'submit' : 'button'}
      className={`${styles.button} ${styles[buttonVariant]} ${className}`}
      disabled={disabled || isLoading}
    >
      {!isLoading && children}
    </button>
  );
});

Button.displayName = 'Button';
export default Button;
