import { ButtonHTMLAttributes, CSSProperties, FC, ReactNode } from 'react';

import { CustonButton } from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  textContent?: string;
  textContentSize?: 'small' | 'medium' | 'large';
  textBolder?: boolean;
  icon?: ReactNode;
  extraStyles?: CSSProperties;
  variant?:
  | 'primary'
  | 'secundary'
  | 'success'
  | 'danger'
  | 'alert'
  | 'info'
  | 'dark';
}

const Button: FC<ButtonProps> = ({
  textContent,
  extraStyles,
  icon,
  ...rest
}) => {
  return (
    <CustonButton style={extraStyles} {...rest}>
      {icon && icon}
      {textContent}
    </CustonButton>
  );
};

export default Button;
