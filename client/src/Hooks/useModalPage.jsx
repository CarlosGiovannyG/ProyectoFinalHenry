import { useModal } from 'react-hooks-use-modal';

const useModalPage = () => {

  const [ModalLogin, openLogin, closeLogin] = useModal('root', { preventScroll: true, closeOnOverlayClick: true });
  const [ModalRegister, openRegister, closeRegister] = useModal('root', { preventScroll: true, closeOnOverlayClick: true });


  
  return [
    ModalLogin,
    openLogin,
    closeLogin,
    ModalRegister,
    openRegister,
    closeRegister
  ]
}

export default useModalPage
