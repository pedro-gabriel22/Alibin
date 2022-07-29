import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import "./style.css"
const  Example= ()=> {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const [displayColuna, setDisplayColuna] = useState(true)
const [hidden, setHidden] = useState('')
    const  myfunction= () =>{
        if(displayColuna === true){
            setDisplayColuna(false)
        }else{
            setDisplayColuna(true)
        }
        
    }

    if(displayColuna === true){
        setHidden('hidden')
    }else{
        setHidden('')
    }
  return (
    <>
      <button variant="primary" onClick={handleShow} className="button-modal">
        ...
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Colunas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p> <input type="checkbox" name='nome' checked={displayColuna} onClick={myfunction} className="btn" /><label for="nome" > nome</label></p>
        <p> <input type="checkbox" name='email' checked={displayColuna} onClick={myfunction}/><label for="email"> email</label></p>
        <p> <input type="checkbox" name='empresa' checked={displayColuna} onClick={myfunction}/><label for="empresa"> nome da empresa</label></p>
        <p> <input type="checkbox" name='acesso' checked={displayColuna} onClick={myfunction}/><label for="acesso"> perfil de acesso</label></p>
        </Modal.Body>
        <Modal.Footer>
        
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example