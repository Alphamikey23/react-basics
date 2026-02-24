export default function RenderingLists() {
    const products = [
        {id: 1,title: 'Cabbage',isFruit: false},
        {id: 2,title: 'Onion',isFruit: false},
        {id: 3,title: 'Apple',isFruit: true}
    ]

    const listItems = products.map(product => 
        <li key={product.id} style={{color: product.isFruit ? 'green' : 'white'}}> {product.title}</li>
    )

    // console.log(products.map(product => <li key={product.id}>{product.title}</li>));

    return(
        <>
        <ul >{listItems}</ul>
        </>
    )
}