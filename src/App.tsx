import { FormEvent, useCallback, useRef } from 'react';
import Modal, { ModalHandles } from './components/Modal'
import Input  from './components/Input'

function App() {
  const nameInputRef = useRef<HTMLInputElement>(null)
  const acceptTermsRef = useRef({ value: false })
  const modalRef = useRef<ModalHandles>(null)

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault()
  }, [])

  const handleAcceptTerms = useCallback(() => {
    acceptTermsRef.current.value = !acceptTermsRef.current.value
  }, [])

  const handleOpenModal = useCallback(() => {
    modalRef.current?.openModal()
  }, [])

  return (
    <div>
      <form >
        <Input
          type="text"
          placeholder="Digite seu nome"
          name="name"
          label="Nome completo"
          ref={nameInputRef}
        />

        <button type="button" onClick={handleAcceptTerms}>
          Aceitar termos
        </button>

        <button type="submit" onClick={handleSubmit}>Enviar</button>
      </form>
      
      <br />
      <br />

      <button onClick={handleOpenModal}>Abrir modal</button>
      <Modal ref={modalRef} />
    </div>
  );
}

export default App;
