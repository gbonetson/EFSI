import React from 'react'
import fancytoilet from './img/fancytoilet.jpg'
import chairtoilet from './img/chairtoilet.jfif'
import cursedToilet from './img/cursedToilet.png'
import fancyfaucet from './img/fancyfaucet.jpg'
import medievalpaper from './img/medievalpaper.jpg'
import grandmaJodietoilet from './img/grandmaJodiestoilet.jpg'
import giornotoilet from './img/giornotoilet.jpg'
import yomamasink from './img/yomamasink.jpg'


export default function ListaProductos()
{
    let Productos=[
        {
            ventas:100,
            imagen: fancytoilet,
            nombre:"toilette de fantaisie",
            desc:"une toilette très spéciale qui vous essuie le cul sur commande",
            precio: 420.000
        },
        {
            ventas:50,
            imagen: chairtoilet,
            nombre: "DIY toilette",
            desc:"charming do-it-yourself toilette with built-in armrest. ",
            precio: 20.000
        },
        {
            ventas:1,
            imagen: cursedToilet,
            nombre:"💀",
            desc:"Please, take it",
            precio: -1
        },
        {
            ventas:180,
            imagen: fancyfaucet,
            nombre:"Le robinet fantaisie de vos rêves",
            desc:"le robinet le plus délicat et le plus exquis que vous aurez jamais le plaisir d'avoir",
            precio: 69.000
        },
        {
            ventas:120,
            imagen: medievalpaper,
            nombre:"Sir Lancelot's toilet paper holder",
            desc:"Haveth thou ever felteth the need to wipeth thou's behind with such excellent equipment?",
            precio: "10.000 in silver coin or 2.000 gold medallions"
        },
        {
            ventas:5,
            imagen: grandmaJodietoilet,
            nombre:"Your grandma Jodie's toilet",
            desc:"We broke into your grandma's place and got all of her china, if you want to see her again you should enter our facilities' backdoor...",
            precio: 50.000
        },
        {
            ventas:999,
            imagen: giornotoilet,
            nombre:"Giorno Giovanna limited edition toilet",
            desc:"私、ジョルノ・ジョヴァンナには夢がある",
            precio: 69.420
        },
        {
            ventas:2,
            imagen: yomamasink,
            nombre:"Your momma's sink",
            desc:"This time we didn't kidnap her, we just asked nicely...and threatened her with your grandma",
            precio: 12.500
        }
    ]

    return (Productos)
}