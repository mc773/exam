import './style.css'

function Container({data}) {

  return (
    <div className='box'>
        <div className='w'>
    <h1>Products</h1>
    <button>Move All To Bag</button>
    </div>
    <div className='container'>
        {
            data.map((value)=>{
                return(
                    <div className='card'>
                        <img src={value.img} alt="" />
                          <div className='border'><p>Add To Cart</p></div>
                          <div className='wrapper'>
                        <h2>{value.name}</h2>
                        <h3>{value.price}</h3>
                        </div>
                      

                    </div>
                )
            })
        }

    </div>

    </div>
  )
}

export default Container