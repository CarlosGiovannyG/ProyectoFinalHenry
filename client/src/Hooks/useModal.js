import { useState } from 'react'

const useModal = () => {

  const [isOpen, setisOpen] = useState(null);
  const open = () => setisOpen(true);
  const close = () => setisOpen(false);

  return [isOpen, open, close]
}

export default useModal
