import React, {Component} from 'react'
import api from "../../services/api"

export default class Main extends Component {
    state = {
        products : [],
    }
    //Componente que gera uma ação logo quando o componente é exibido em tela
    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () => {
        try {
            const response = await api.get('/products')

            this.setState({ products: response.data.docs })    
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        
        const {products} = this.state

        return (
            <div className="product-list">
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <a href="">acessar</a>
                    </article>
                ))}
            </div>
        )
    }
}