import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import { IconType } from "react-icons";

export interface ModalProps {
  actionLabel: string;
  onClose: () => void;
  onSubmit: () => void;
  isOpen?: boolean;
  disabled: boolean;
  title?: string;
  secondaryActionLabel?: string;
  body?: ReactElement;
  footer?: ReactElement;
  secondaryAction?: () => void;
}

export interface ButtonProps {
  label: any;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
  outLine?: boolean;
  small?: boolean;
  icon?: IconType;
}

export interface HeadingProps {
  title?: string;
  subtitle?: string;
  center?: string;
}

export interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatePrice?: boolean;
  required: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}
