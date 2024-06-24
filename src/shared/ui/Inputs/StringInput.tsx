import React, { ChangeEvent, InputHTMLAttributes, useCallback, useEffect, useState, memo } from "react";

interface StringInput extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> {
  value: string;
}

export const StringInput = memo(({
  value,
  onBlur,
}: StringInput) => {
  const [text, setText] = useState<string>(value)

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value
    setText(_ => value)
  }, [])

  useEffect(() => {
    setText(value)
  }, [value])

  return (
    <input
      value={text}
      type='string'
      onChange={onChange}
      onBlur={onBlur}
    />
  )
});
