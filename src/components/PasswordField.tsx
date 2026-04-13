import { useState } from 'react';
import type { UseFormRegisterReturn, FieldError } from 'react-hook-form';
import PasswordToggle from './PasswordToggle';
import PasswordStrengthMeter from './PasswordStrengthMeter';

interface PasswordFieldProps {
  id: string;
  label: string;
  placeholder?: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
  value: string;
}

export default function PasswordField({
  id,
  label,
  placeholder,
  registration,
  error,
  value,
}: PasswordFieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  const hasError = Boolean(error);

  const inputCls = [
    'w-full border rounded-lg px-4 py-2.5 pr-12 text-sm transition duration-150',
    'outline-none focus:ring-2 focus:border-transparent',
    'text-gray-900 placeholder-gray-400',
    hasError
      ? 'border-red-400 bg-red-50 focus:ring-red-400'
      : 'border-gray-300 bg-white focus:ring-pink-500',
  ].join(' ');

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        <input
          {...registration}
          id={id}
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${id}-error` : undefined}
          className={inputCls}
        />
        <PasswordToggle
          visible={showPassword}
          onToggle={() => setShowPassword(!showPassword)}
        />
      </div>
      <PasswordStrengthMeter password={value} />
      {hasError && (
        <p id={`${id}-error`} role="alert" className="text-xs text-red-500">
          {error?.message}
        </p>
      )}
    </div>
  );
}
