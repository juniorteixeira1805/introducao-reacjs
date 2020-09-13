import React, {Component} from 'react'
import api from "../../services/api"

export default class Main extends Component {
    //Componente que gera uma ação logo quando o componente é exibido em tela
    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products')

        console.log(response.data.docs)
    }

    render() {
        return <h1>Olá Devorion</h1>
    }
}