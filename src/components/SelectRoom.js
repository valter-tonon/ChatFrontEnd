import React, {Component} from 'react'

class SelectRoom extends Component{
    render(){
        return(
            <div className="room">
            <div className="messages">
              <div className="message"><span className="author">Selecione a Sala para começar </span><br/><span className="msg-body">Seja Bem Vindo!</span></div>
            </div>
            <div className="new-message-form w-form">
              <form className="form">
                <textarea id="field" name="field" maxLength="5000" placeholder="Digite sua mensagem e pressione &lt;Enter&gt;" autoFocus={true} className="msg w-input"></textarea>
                <button type="button" className="send-audio w-button">Enviar<br/>Áudio</button>
              </form>
            </div>
          </div>
        )
    }
}

export default SelectRoom