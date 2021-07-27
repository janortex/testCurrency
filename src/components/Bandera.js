import React, { Component } from 'react';

import MensajeEstatico from './MensajeEstatico';

class Bandera extends Component {

    render() {
        return (
            <div>
                <h4>Soy componente Bandera</h4>
                <MensajeEstatico></MensajeEstatico>
            </div>
        )
    }

}

export default Bandera;