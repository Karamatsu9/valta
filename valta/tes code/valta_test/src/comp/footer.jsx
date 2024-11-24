import React from 'react'
import './footer.css'
import { FaPiggyBank, FaShippingFast, FaHeadphonesAlt, FaWallet} from 'react-icons/fa';
import logo from '../assets/Logo_2.png'; 
const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='container'>
            <div className='left-box'>
                <div className='box'>
                    <div className='icon_box'>
                        <FaPiggyBank />
                    </div>
                    <div className='detail'>
                        <h3>Great Saving</h3>
                        <p>Produk kami berkualitas dan dipastikan tahan lama</p>
                    </div>
                </div>
                    <div className='box'>
                    <div className='icon_box'>
                        <FaShippingFast />
                    </div>
                    <div className='detail'>
                        <h3>Safe delivery</h3>
                        <p>Menjamin barang aman hingga ke tangan konsumen.</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon_box'>
                        <FaHeadphonesAlt />
                    </div>
                    <div className='detail'>
                        <h3>Always ready to support</h3>
                        <p>Customer service yang siap melayani</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon_box'>
                        <FaWallet />
                    </div>
                    <div className='detail'>
                        <h3>Money back</h3>
                        <p>Uang kembali jikalau barang rusak *syarat ketentuan berlaku</p>
                    </div>
                </div>
            </div>
            <div className='right_box'>
                <div className='header'>
                    <img src='logo_2.png' alt=''></img>
                    <p>We always happy to accompany your needs. please know us more!</p>
                </div>
                <div className='bottom'>
                    <div className='box'>
                        <h3>Akun anda</h3>
                        <ul>
                            <li>Tentang kami</li>
                            <li>Akun</li>
                            <li>Pembayaran</li>
                            <li>Penjualan</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h3>Produk</h3>
                        <ul>
                            <li>Pengantaran</li>
                            <li>Lacak pesanan</li>
                            <li>Produk baru</li>
                            <li>Produk lama</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h3>Kontak kami</h3>
                        <ul>
                            <li>4109, Jl.Kjerang barat no 19</li>
                            <li>+(62)82631458950</li>
                            <li>ValtaCORP@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Footer