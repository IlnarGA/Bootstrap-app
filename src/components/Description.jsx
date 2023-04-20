import React from 'react'
import { motion } from 'framer-motion'
import '../App.css'

const Description = () => {
  return (
    <div>

      <motion.div id='div1'

        initial={{
          opacity: 0,
          // scale: 0.5
        }}
        animate={{
          scale: 1,
          opacity: 1
        }}
        transition={{
          duration: 2
        }}>
        "1000 мелочей" - это интернет-магазин, который предлагает широкий ассортимент товаров. Здесь вы найдете все разрешенные товары - от бытовой химии и косметики до электроники и домашнего текстиля. Магазин заботится о своих клиентах и предоставляет только качественные товары от проверенных поставщиков.
        <br />
        <br />
        В магазине "1000 мелочей" вы найдете все необходимые товары для дома, работы и отдыха. Здесь представлены товары для ухода за собой и своим домом, а также товары для здоровья и красоты. Вы можете выбрать нужный вам товар из широкого ассортимента, и мы доставим его прямо к вам домой.
        <br />
        <br />
        Наши консультанты всегда готовы помочь вам с выбором товара и ответить на все ваши вопросы. Мы ценим каждого клиента и всегда стремимся предоставить лучший сервис и самые выгодные предложения. Благодаря нашему интернет-магазину "1000 мелочей" вы можете с легкостью купить все необходимые товары, не выходя из дома.
      </motion.div>

      {/* <motion.div id='div2'
        initial={{
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          delay: 1,
          duration: 2
        }}>
        <motion.img
          src='logo192.png'
          className='banner'
          width={850}

          animate={{ rotate: 360 }}

          initial={{
            opacity: 0.6
          }}

          transition={{
            duration: 5
          }}

          whileTap={{ rotate: 360 }} />

      </motion.div> */}

      {/* <motion.p
        initial={{
          x:-1000,
          opacity:0
        }}

        animate={{
            x: 500,
            opacity: 1
        }}
        transition={{
          delay:1,
          duration: 2,
          type:'tween'
        }}
        >
            Какой-то текст 
        </motion.p> */}
    </div>
  )
}

export default Description