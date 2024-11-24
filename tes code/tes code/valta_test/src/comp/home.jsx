import React, { useEffect, useState } from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import Homeproduct from './home_product'
import { AiFillEye, AiFillHeart, AiOutlineShoppingCart} from "react-icons/ai";
import {BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoYoutube} from "react-icons/bi";
import BannerHome from '../assets/Home.png';
import Palu from '../assets/palu.webp';
import Impact from '../assets/Impact.jpeg'
const Home = ({addtocart}) => {
  //box
  // Product category
  const [newProduct, setNewProduct] =  useState([])
  const [featuredProduct, setFeaturdProduct] =  useState([])
  const [topProduct, setTopProduct] =  useState([])
  //Tranding Product
  const [trendingProduct, setTrendingProduct] = useState(Homeproduct)
  // Filter of tranding product
  const filtercate = (x) => 
  {
    const filterproduct = Homeproduct.filter((curElm) => 
    {
      return curElm.type === x
    })
    setTrendingProduct(filterproduct)
  }
  //All Trending Product
  const allTrendingProduct = () =>
  {
    setTrendingProduct(Homeproduct)
  }

  //Product Type
  useEffect(() => 
  {
    productcategory()
  })
  const productcategory = () => 
  {
    // New Product
    const newcategory = Homeproduct.filter((x) => 
    {
      return x.type === 'new'
    })
    setNewProduct(newcategory)

    // Featured Product
    const featuredcategory = Homeproduct.filter((x) => 
    {
      return x.type === 'featured'
    })
    setFeaturdProduct(featuredcategory)
//btn
    // Top Product
    const topcategory = Homeproduct.filter((x) => 
    {
      return x.type === 'top'
    })
    setTopProduct(topcategory)
  }
  return (
    <>
    <div className='home'>
        <div className='top_banner'>
          <div className='top_banner_img'>
            <img src={"../assets/Home.png"} alt='banner'/>
          </div>
            <div className='contant'>
                <h3>Valta</h3>
                <h2>Krissbow Product</h2>
                <p>20% Diskon untuk pembelian pertama</p>
                <Link to='/shop' className='link'>Belanja sekarang</Link>
            </div>
        </div>
        <div className='trending'>
          <div className='container'>
            <div className='left_box'>
              <div className='header'>
                <div className='heading'>
                  <h2 onClick={() => allTrendingProduct ()}>Produk yang trend</h2>
                </div>
                <div className='cate'>
                  <h3 onClick={() => filtercate ('new')}>Baru!</h3>
                  <h3 onClick={() => filtercate ('featured')}>Unggulan!</h3>
                  <h3 onClick={() => filtercate ('top')}>Terlaris!</h3>
                </div>
              </div>
              <div className='products'>
                <div className='container'>
                  {
                    trendingProduct.map((curElm) => 
                    {
                      return(
                        <>
                        <div className='box'>
                          <div className='img_box'>
                            <img src={Impact} id="gambarUtama" alt=''></img>
                            <div className='icon'>
                              <div className='icon_box'>
                                <AiFillEye />
                              </div>    
                              <div className='icon_box'>
                                <AiFillHeart />
                              </div>                        
                            </div>
                          </div>
                          <div className='info'>
                            <h3>{curElm.Name}</h3>
                            <p style={{position: "20vw"}}>Rp{curElm.price}</p>
                            <button className='btn' style={{marginTop: "2vw", marginLeft: "0.8vw"}} onClick={() => addtocart (curElm)}>+ Keranjang</button>
                          </div>
                        </div>
                        </>
                      )
                    })
                  }
                </div>
                <button>Tampilkan lebih banyak</button>
              </div>
            </div>
            <div className='right_box'>
              <div className='right_container'>
                <div className='testimonial'>
                  <div className='head'>
                    <h3>Testimoni dari pelanggan kami!</h3>
                  </div>
                  <div className='detail'>
                    <div className='img_box'>
                      <img src='
                    -[;;/p[;pp-[]
                    \|
                    
                    \' alt='Laz are worse'></img>
                    </div>
                    <div className='info'>
                      <h3>wilson</h3>
                      <h4>web designer</h4>
                      <p>Semua barang yang saya beli sangat bagus dan awet</p>
                    </div>
                  </div>
                </div>
                <div className='newsletter'>
                  <div className='head'>
                    <h3>Buletin</h3>
                  </div>
                  <div className='form'>
                    <p>Bergabunglah dengan daftar email kami</p>
                    <input type='email' placeholder='E-mail' autoComplete='off'></input>
                    <button>Berlangganan!</button>
                    <div className='icon_box'>
                      <div className='icon'>
                        <BiLogoFacebook />
                      </div>
                      <div className='icon'>
                        <BiLogoTwitter />
                      </div>
                      <div className='icon'>
                        <BiLogoInstagram />
                      </div>
                      <div className='icon'>
              
                        <BiLogoYoutube />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='banners'>
          <div className='container'>
            <div className='left_box'>
              <div className='box'>
                <img src={''} alt='banner'></img>
              </div>
              <div className='box'>
                <img src={''} alt='banner'></img>
              </div>
            </div>
            <div className='right_box'>
              <div className='top'>
                <img src='image/Multi-Banner-3.webp' alt=''></img>
                <img src='image/Multi-Banner-4.avif' alt=''></img>
              </div>
              <div className='bottom'>
                <img src='image/Multi-Banner-5.webp' alt=''></img>
              </div>
            </div>
          </div>
        </div>
        <div className='product_type'>
          <div className='container'>
            <div className='box'>
              <div className='header'>
                <h2>Produk Baru</h2>
              </div>
              {
                newProduct.map((curElm) => 
                {
                  return(
                    <>
                    <div className='productbox'>
                      <div className='img-box'>
                        <img src={Impact} alt=''></img>
                      </div>
                      <div className='detail'>
                        <h3>{curElm.Name}</h3>
                        <p style={{marginTop: "-10vm"}}>Rp {curElm.price}</p>
                        <div className='icon'>
                          <button><AiFillEye /></button>
                          <button><AiFillHeart /></button>
                          <button onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></button>
                        </div>
                      </div>
                    </div>
                    </>
                  )
                })
              }
            </div>
            <div className='box'>
              <div className='header'>
                <h2>Produk Unggulan</h2>
              </div>
              {
                featuredProduct.map((curElm) => 
                {
                  return(
                    <>
                    <div className='productbox'>
                      <div className='img-box'>
                        <img src={Impact} alt=''></img>
                      </div>
                      <div className='detail'>
                        <h3>{curElm.Name}</h3>
                        <p>Rp {curElm.price}</p>
                        <div className='icon'>
                          <button><AiFillEye /></button>
                          <button><AiFillHeart /></button>
                          <button onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></button>
                        </div>
                      </div>
                    </div>
                    </>
                  )
                })
              }
            </div>
            <div className='box'>
              <div className='header'>
                <h2>Produk teratas</h2>
              </div>
              {
                topProduct.map((curElm) => 
                {
                  return(
                    <>
                    <div className='productbox'>
                      <div className='img-box'>
                        <img src={Impact} alt=''></img>
                      </div>
                      <div className='detail'>
                        <h3>{curElm.Name}</h3>
                        <p>Rp {curElm.price}</p>
                        <div className='icon'>
                          <button><AiFillEye /></button>
                          <button><AiFillHeart /></button>
                          <button onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></button>
                        </div>
                      </div>
                    </div>
                    </>
                  )
                })
              }
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Home
 