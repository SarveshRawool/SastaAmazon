import './product.css'
function ProductComponent() {
    const products=[
        {Pname:'Jacket',
         Price:4500,
         img:'shop-1.jpg'},
         
         {Pname:'Purse',
         Price:2000,
         img:'shop-2.jpg'},
         
         {Pname:'Dress',
         Price:10000,
         img:'shop-3.jpg'},
        
         {Pname:'Denim',
         Price:5000,
         img:'shop-4.jpg'},

         {Pname:'Boots',
         Price:8000,
         img:'shop-5.jpg'},

         {Pname:'Bag',
         Price:9000,
         img:'shop-6.jpg'},
    ];
    return ( 
        <>
        <div className='products-container'>
            {
                products.map((product)=>{
                    return(
                         <div className="mx-5 p-4 col-md-6 col-lg-3 product-cart">
                         <div className='product-img'>
                         <img src={require('../../Images/'+product.img)}></img>
                         </div>
                         <div className='myproduct'>
                             <h5><a href='#'>{product.Pname}</a></h5>
                             <p>{product.Price}rs</p>
                             <div className='product-star'>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                             </div>
                         </div>
                      </div>
                    )
                })
            }
            </div>
        </>
     );
}

export default ProductComponent;