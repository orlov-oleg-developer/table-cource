type ButtonType = 'add' | 'delete';

type ActionButtonProps = {
  type: ButtonType,
  id: string,
  cb: (id: string) => void;
}

const buttonSymbols: Record<ButtonType, string> = {
  'add': '+',
  'delete': '-',
}

export const ActionButton = ({
  type,
  id,
  cb,
}: ActionButtonProps) => {

  const onClick = () => {
    cb(id)
  }

  return (
    <button onClick={onClick}>
      {buttonSymbols[type]}
    </button>
  )
}