import React, { useState } from 'react'
import './shop.css'
import { AiFillHeart, AiFillEye, AiOutlineClose} from 'react-icons/ai';
import screwdriver from '../assets/screwdriver.jpg';
import Homeproduct from './home_product'

const Shop = ({shop, Filter, allcatefilter, addtocart}) => {
    // Toggle Product Detail
    const [showDetail, setShowDetail] = useState(false)
    // Detail Page Data
    const [detail, setDetail] = useState([])
    //Showing Detail Box
    const detailpage = (product) => 
    {
        const detaildata = ([{product}])
        const productdetail = detaildata[0]['product']
        // console.log(productdetail)
        setDetail(productdetail)
        setShowDetail(true)
    }
    const closedetail = () => 
    {
        setShowDetail(false)
    }
  return (
    <>
    {
        showDetail ? 
        <>
        <div className='product_detail'>
            <button className='close_btn' onClick={closedetail}><AiOutlineClose /></button>
            <div className='container'>
                <div className='img_box'>
                    <img src={screwdriver} alt=''></img>
                </div>
                <div className='info'>
                    <h4># {detail.cat}</h4>
                    <h2>{detail.Name}</h2>
                    <p>Layar Pencarian yang Dicintai Semua Orang: Apakah keluarga Anda sedang streaming atau melakukan panggilan video dengan teman menggunakan tablet A8...</p>
                    <h3>Rp{detail.price}</h3>
                    <button onClick={() => addtocart (detail)}>Masukan Keranjang</button>
                </div>
            </div>
        </div>
        </>
        : null
    }
    <div className='shop'>
        <h2># shop</h2>
        <p>Halaman . pembelian</p>
        <div className='container'>
            <div className='left_box'>
                <div className='category'>
                    <div className='header'>
                        <h3>Kategori</h3>
                    </div>
                    <div className='box'>
                        <ul>
                            <li onClick={() => allcatefilter ()}># semua</li>
                            <li onClick={() => Filter ("tv")}># tv</li>
                            <li onClick={() => Filter ("laptop")}># laptop</li>
                            <li onClick={() => Filter ("watch")}># Jam</li>
                            <li onClick={() => Filter ("speaker")}># speaker</li>
                            <li onClick={() => Filter ("electronics")}># Elektronik</li>
                            <li onClick={() => Filter ("headphone")}># headphone</li>
                            <li onClick={() => Filter ("phone")}># phone</li>
                        </ul>
                    </div>
                </div>
                <div className='banner'>
                    <div className='img_box'>
                        <img src='image/shop_left.avif' alt=''></img>
                    </div>
                </div>
            </div>
            <div className='right_box'>
                <div className='banner'>
                    <div className='img_box'>
                        <img src='image/shop_top.webp' alt=''></img>
                    </div>
                </div>
                <div className='product_box'>
                    <h2>Produk Toko</h2>
                    <div className='product_container'>
                        {
                            shop.map((curElm) => 
                            {
                                return(
                                    <>
                                    <div className='box'>
                                        <div className='img_box'>
                                            <img src={curElm.image} id="gambarUtama" alt=''></img>
                                            <div className='icon'>
                                               <li><AiFillEye onClick={() => detailpage(curElm)} /></li> 
                                               <li onClick={() => detailpage (curElm)}><AiFillEye /></li> 
                                            </div>
                                        </div>
                                        <div className='detail'>
                                            <h3>{curElm.Name}</h3>
                                            <p>Rp {curElm.price}</p>
                                            <button onClick={() => addtocart (curElm)}>+ Keranjang</button>
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
    </div>
    </>
  )
}

export default Shop