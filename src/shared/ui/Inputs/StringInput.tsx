import React, { ChangeEvent, InputHTMLAttributes, useCallback, useEffect, useState, memo } from "react";

interface StringInput extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> {
  value: string;
  error?: string;
}

export const StringInput = memo(({
  value,
  onBlur,
  error,
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
      style={{backgroundColor: !!error ? 'pink' : 'white'}}
      title={error ?? ''}
      value={text}
      type='string'
      onChange={onChange}
      onBlur={onBlur}
    />
  )
});
