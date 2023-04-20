import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className='container'>
      <footer className='row row-col-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top'>
        <div className='col mb-3'>
          <a className=''>
            <img src='/logo192.png' className='bi me-2' width={80} height={80}>
            </img>
          </a>
          <p>
            1000 мелочей - надежный друг
          </p>
        </div>
        <div className='col mb-3'>

        </div>
        <div className='col mb-4'>
          <h5>Компания</h5>
          <ul className='nav flex-column'>
            <li className='nav-item mb-3'>
              <a className='nav-link p-0 text-muted'>Все услуги</a>
            </li>
            <li className='nav-item mb-3'>
              <a className='nav-link p-0 text-muted'>Способы доставки и лимиты</a>
            </li>
            <li className='nav-item mb-3'>
              <a className='nav-link p-0 text-muted'>Правовая информация</a>
            </li>
          </ul>
        </div>

        <div className='col mb-4'>
          <h5>Полезная информация</h5>
          <ul className='nav flex-column'>
            <li className='nav-item mb-3'>
              <a className='nav-link p-0 text-muted'>Ограничения</a>
            </li>
            <li className='nav-item mb-3'>
              <a className='nav-link p-0 text-muted'>Часто задаваемые вопросы</a>
            </li>
            <li className='nav-item mb-3'>
              <a className='nav-link p-0 text-muted'>Способы оплаты</a>
            </li>
          </ul>
        </div>

        <div className='col mb-4'>
          <h5>Помощь</h5>
          <ul className='nav flex-column'>
            <li className='nav-item mb-3'>
              <a className='nav-link p-0 text-muted'>Способы оплаты</a>
            </li>
            <li className='nav-item mb-3'>
              <a className='nav-link p-0 text-muted'>Ситуации с посылками</a>
            </li>
            <li className='nav-item mb-3'>
              <a className='nav-link p-0 text-muted'>Калькулятор доставки</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer