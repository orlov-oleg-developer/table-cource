import { useCallback, useState } from 'react';
import { NumberInput } from '../../../../shared/ui/Inputs/NumberInput'
import { StringInput } from '../../../../shared/ui/Inputs/StringInput'

type ValidatingInputProps<T> = {
  value: T;
  onValidate: (event: React.FocusEvent<HTMLInputElement, Element>) => string | undefined;
  onBlur: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
}

export const ValidatingInput = <T,>({
  value,
  onValidate,
  onBlur,
}: ValidatingInputProps<T>) => {
  const [error, setError] = useState<string | undefined>(undefined);

  const onBlurCb = useCallback((event: React.FocusEvent<HTMLInputElement, Element>) => {
    onBlur(event);
    setError(onValidate(event));
  }, [onBlur, onValidate])

  if (typeof value === 'number') {
    return (
      <NumberInput error={error} value={value} onBlur={onBlurCb} />
    )
  }

  if (typeof value === 'string') {
    return (
      <StringInput error={error} value={value} onBlur={onBlurCb} />
    )
  }
}