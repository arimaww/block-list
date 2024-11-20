import clsx from 'clsx';
import { PropsWithRef, SelectHTMLAttributes, useId } from 'react';

type UiSelectOptions = {
    value: string;
    label: string;
};

type UiSelectFieldProps = {
    className?: string;
    label?: string;
    error?: string;
    selectProps: PropsWithRef<SelectHTMLAttributes<HTMLSelectElement>>;
    options?: UiSelectOptions[];
};

export function UiSelectField({
    className,
    label,
    error,
    selectProps,
    options,
}: UiSelectFieldProps) {
    const id = useId();
    return (
        <div className={clsx(className, 'flex flex-col gap-1')}>
            {label && (
                <label htmlFor={id} className="block">
                    {label}
                </label>
            )}

            <select
                id={id}
                {...selectProps}
                className={clsx(
                    selectProps.className,
                    'rounded border border-slate-300 focus:border-teal-600 px-2 h-10 outline-none'
                )}
            >
                {options?.map((opt, i) => (
                    <option key={i} value={opt.value}>{opt.label}</option>
                ))}
            </select>

            {error && (
                <div className="text-rose-400 text-sm">{error}</div>
            )}
        </div>
    );
}
