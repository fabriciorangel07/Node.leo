import React, {Component} from "react";
import './calculadora.css'
import Botao from "./components/Botao";
import Display from "./components/Display";

const estadoInicial = {
    valorDisplay: '0',
    limparDisplay: false,
    operacao: null,
    valores: [0,0],
    atual: 0

}

class Calculadora extends Component{

    state = {
        ...estadoInicial
    }

    limparMemoria(){
        console.log('limpar')
    }

    setOperacao(op){
        console.log(op)
    }

    addDigito(dig){
        console.log(dig)
    }

    render(){

        const setOperacao = op => this.setOperacao(op)
        const addDigito = dig => this.addDigito(dig)

        return(
            <>
                <h2>Calculadora</h2>
                <div className='calculadora'>
                    <Display valor={this.state.valorDisplay}/>
                    <Botao label='AC' click={() => this.limparMemoria()} triplo/>
                    <Botao label='/' click={setOperacao} operacao/>
                    <Botao label='7' click={addDigito}/>
                    <Botao label='8' click={addDigito}/>
                    <Botao label='9' click={addDigito}/>
                    <Botao label='x' click={setOperacao} operacao/>
                    <Botao label='4' click={addDigito}/>
                    <Botao label='5' click={addDigito}/>
                    <Botao label='6' click={addDigito}/>
                    <Botao label='-' click={setOperacao} operacao/>
                    <Botao label='1' click={addDigito}/>
                    <Botao label='2' click={addDigito}/>
                    <Botao label='3' click={addDigito}/>
                    <Botao label='+' click={setOperacao} operacao/>
                    <Botao label='0' click={addDigito} dobro/>
                    <Botao label='.' click={addDigito}/>
                    <Botao label='=' click={setOperacao} igual/>

                </div>
            </>

        )
    }
}

export default Calculadora