"use client";

import { cn, focusRing } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import type { BriefingFormValues } from "@/lib/formulario/constants";

type FieldWrapperProps = {
  label: string;
  required?: boolean;
  error?: string;
  htmlFor?: string;
  children: React.ReactNode;
  className?: string;
};

export function FieldWrapper({
  label,
  required,
  error,
  htmlFor,
  children,
  className,
}: FieldWrapperProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <label
        htmlFor={htmlFor}
        className="block font-mono text-[11px] uppercase tracking-[0.12em] text-muted"
      >
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </label>
      {children}
      <AnimatePresence mode="wait">
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="text-sm text-red-400"
            role="alert"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputBase = cn(
  "w-full rounded-sm border bg-surface px-4 py-3 text-base text-foreground",
  "placeholder:text-muted-foreground transition-colors",
  "border-border focus:border-accent/50",
  focusRing,
);

type TextInputProps = {
  id: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: "text" | "email";
  error?: boolean;
  autoComplete?: string;
};

export function TextInput({
  id,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
  autoComplete,
}: TextInputProps) {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      autoComplete={autoComplete}
      aria-invalid={error || undefined}
      className={cn(inputBase, error && "border-red-500/70 ring-red-500/30")}
    />
  );
}

type TextAreaProps = {
  id: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  error?: boolean;
};

export function TextArea({
  id,
  value,
  onChange,
  placeholder,
  rows = 4,
  error,
}: TextAreaProps) {
  return (
    <textarea
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      aria-invalid={error || undefined}
      className={cn(inputBase, "resize-y min-h-[120px]", error && "border-red-500/70")}
    />
  );
}

type CheckboxGroupProps = {
  name: string;
  options: readonly string[];
  value: string[];
  onChange: (value: string[]) => void;
  error?: boolean;
};

export function CheckboxGroup({ name, options, value, onChange, error }: CheckboxGroupProps) {
  const toggle = (option: string) => {
    if (value.includes(option)) {
      onChange(value.filter((v) => v !== option));
    } else {
      onChange([...value, option]);
    }
  };

  return (
    <div
      className={cn("space-y-2", error && "rounded-sm ring-1 ring-red-500/50 p-2 -m-2")}
      role="group"
      aria-label={name}
    >
      {options.map((option) => {
        const checked = value.includes(option);
        const id = `${name}-${option.replace(/\s+/g, "-").toLowerCase()}`;
        return (
          <label
            key={option}
            htmlFor={id}
            className={cn(
              "flex cursor-pointer items-start gap-3 rounded-sm border px-4 py-3 transition-colors",
              checked
                ? "border-accent/40 bg-accent/5"
                : "border-border bg-surface hover:border-border-strong",
              focusRing,
            )}
          >
            <input
              id={id}
              type="checkbox"
              checked={checked}
              onChange={() => toggle(option)}
              className="mt-1 h-4 w-4 shrink-0 accent-[#C6FF00]"
            />
            <span className="text-sm leading-relaxed text-foreground">{option}</span>
          </label>
        );
      })}
    </div>
  );
}

type RadioGroupProps = {
  name: string;
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
};

export function RadioGroup({ name, options, value, onChange, error }: RadioGroupProps) {
  return (
    <div
      className={cn("space-y-2", error && "rounded-sm ring-1 ring-red-500/50 p-2 -m-2")}
      role="radiogroup"
      aria-label={name}
    >
      {options.map((option) => {
        const checked = value === option;
        const id = `${name}-${option.replace(/\s+/g, "-").toLowerCase()}`;
        return (
          <label
            key={option}
            htmlFor={id}
            className={cn(
              "flex cursor-pointer items-start gap-3 rounded-sm border px-4 py-3 transition-colors",
              checked
                ? "border-accent/40 bg-accent/5"
                : "border-border bg-surface hover:border-border-strong",
              focusRing,
            )}
          >
            <input
              id={id}
              type="radio"
              name={name}
              checked={checked}
              onChange={() => onChange(option)}
              className="mt-1 h-4 w-4 shrink-0 accent-[#C6FF00]"
            />
            <span className="text-sm leading-relaxed text-foreground">{option}</span>
          </label>
        );
      })}
    </div>
  );
}

type ConditionalFieldProps = {
  show: boolean;
  children: React.ReactNode;
};

export function ConditionalField({ show, children }: ConditionalFieldProps) {
  return (
    <AnimatePresence initial={false}>
      {show && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <div className="pt-4">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export type FormUpdater = <K extends keyof BriefingFormValues>(
  key: K,
  value: BriefingFormValues[K],
) => void;
