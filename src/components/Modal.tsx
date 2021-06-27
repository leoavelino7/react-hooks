import { forwardRef, useCallback, useState, useImperativeHandle } from "react"

export interface ModalHandles {
  openModal: () => void
}

const Modal: React.ForwardRefRenderFunction<ModalHandles> = (props, ref) => {
  const [visible, setVisible] = useState(true)
  
  const openModal = useCallback(() => {
    setVisible(true)
  }, [])
  
  const handleCloseModal = useCallback(() => {
    setVisible(false)
  }, [])
  
  useImperativeHandle(ref, () => {
    return {
      openModal
    }
  })

  if(!visible) {
    return null
  }

  return (
    <div>
      Modal aberto

      <button onClick={handleCloseModal}>Fechar modal</button>
    </div>
  )
}

export default forwardRef(Modal)