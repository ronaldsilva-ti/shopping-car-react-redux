import React from 'react';
import { useSelector } from 'react-redux';


const Message = () => {
    const isShow = useSelector((state) => state.layout.ShowMessage)
    return(
      <>
        {isShow ? (
              <div className="container">
              <div className="alert alert-success mt-3">
                  Cadastrado com Sucesso!!            
              </div> 
  
          </div>
        ) : null }
      </>
    )
}

export default Message;