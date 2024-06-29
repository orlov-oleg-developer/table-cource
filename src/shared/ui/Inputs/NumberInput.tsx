import React, { ChangeEvent, InputHTMLAttributes, useCallback, useEffect, useState, memo } from "react";

interface StringInput extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> {
  value: number;
  error?: string;
}

export const NumberInput = memo(({
  value,
  onBlur,
  error,
}: StringInput) => {
  const [text, setText] = useState<number>(value)

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = +event.currentTarget.value
    setText(_ => value)
  }, [])

  useEffect(() => {
    setText(value)
  }, [value])

  return (
    <input
      style={{ backgroundColor: error ? 'pink' : 'white' }}
      title={error ?? ''}
      value={text}
      type='number'
      onChange={onChange}
      onBlur={onBlur}
    />
  )
});
