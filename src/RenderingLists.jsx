export default function RenderingLists() {
    const products = [
        {id: 1,title: 'Cabbage'},
        {id: 2,title: 'Onion'},
        {id: 3,title: 'drumstick'}
    ]

    const listItems = products.map(product => 
        <li key={product.id}> {product.title}</li>
    )

    // console.log(products.map(product => <li key={product.id}>{product.title}</li>));

    return(
        <>
        <ul>{listItems}</ul>
        </>
    )
}