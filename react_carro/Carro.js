import React from 'react'

export default class Carro extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
        this.modelo = 'Golf'
        this.state = {
            ligado:false,
            velAtual:0,
        } 
        this.ld = this.ligarDesligar.bind(this)
    }
    ligarDesligar(){
        //this.state.ligado = true
        //this.setState({ligado:!this.state.ligado})
        this.setState(
            (state)=>(
                {ligado:!state.ligado}
            )
        )   }                                  // os 2 state funciona normal
    
   /* acelerar(){
        this.setState(
            (state,props)=>({velAtual: state.velAtual + this.props.fator}) )
    }*/
    acelerar(){
        this.setState(
         {velAtual: this.state.velAtual + this.props.fator} )
    }


    componentDidMount(){
        console.log(' o carro foi criado')
    }
    componentDidUpdate(){
        console.log('o carro foi atualizado')
    }
    componentWillUnmount(){
        console.log('o carro foi removido')
    }

    
    render(){
        return(
            <div>
                <h1>Primeiro  componete de classe </h1>
                <p>modelo : {this.modelo}</p>
                <p>Ligado : {this.state.ligado ? 'sim' : 'nao'}</p>
                <p>velAtual : {this.state.velAtual}</p>
                <button onClick = {this.ld}> 
                {this.state.ligado ? 'desligar carro' : 'ligar carro '} 
                </button>
                
                <button onClick = {() => this.acelerar ()}>
                acelerar 
                </button>

                
                
            </div>
        ) 
    }
} 
  