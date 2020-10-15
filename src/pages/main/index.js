import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css"

export default class Main extends Component {
    state = {
        products: []
         productInfo: {},
         page: 1,
    };

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get("/products");

    const { docs, ...productInfo } = response.data      // pegando todo o resto de products.data menos 'docs' 

        this.setState({ products: response.data.docs });
    };

    prevPage = () => {}

    nextPage = () => {

    }

    render() {
        const { products } = this.state;    // buscando a variável do obj state

        return (
            <div className="product-list">
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>

                        <a href="">Acessar</a>
                    </article>
                ))}
                <div className="actions"> 
                    <button onClick={this.prevPage}>Anterior</button>    {/*chamando a fun prevPage - página anterior */}
                    <button onClick={this.nextPage}>Próxima</button>     {/*chamando a fun nextPage página posterior */}           
                </div>
            </div>
        )
    }
}




// comentário em JSX =   {/* xxxx */}