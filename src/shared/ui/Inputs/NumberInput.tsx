import React, { ChangeEvent, InputHTMLAttributes, useCallback, useEffect, useState, memo } from "react";

interface StringInput extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> {
  value: number;
}

export const NumberInput = memo(({
  value,
  onBlur,
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
      value={text}
      type='number'
      onChange={onChange}
      onBlur={onBlur}
    />
  )
});
