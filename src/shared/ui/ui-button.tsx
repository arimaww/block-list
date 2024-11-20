import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

type UiButtonVariant = 'primary' | 'secondary' | 'outlined';
type UiButtonProps = {
    variant: UiButtonVariant;
    className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function UiButton({ className, variant, ...props }: UiButtonProps) {
    return (
        <button
            {...props}
            className={clsx(
                className,
                'px-4 h-10 rounded cursor-pointer flex justify-center gap-2 items-center',
                {
                    primary:
                        'text-white bg-teal-500 hover:bg-teal-600 disabled:opacity-50 shadow shadow-teal-500/30',
                    secondary:
                        'text-white bg-rose-500 hover:bg-rose-600 disabled:opacity-50 shadow shadow-rose-500/30',
                    outlined:
                        'border border-slate-300 hover:border-slate-500 disabled:opacity-50 shadow',
                }[variant]
            )}
        />
    );
}
