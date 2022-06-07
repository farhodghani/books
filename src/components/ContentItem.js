import React from 'react'
import "./content.css"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ContentItem({i}) {
    const products = useSelector((state) => state.allProducts.products.items);
    return (
        <>
        {products && Object.entries(products).map((item, index) => (
            <Link key={index} style={{ color: 'inherit', textDecoration: 'inherit'}} to={"/detail"} state={{info: item[1]}}>
                <div className='main'>
                    <div className='img'>
                        {item[1].volumeInfo.imageLinks ? <img src={item[1].volumeInfo.imageLinks.thumbnail}/> : <img height={120} width={120} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"/>}
                    </div>
                    <div className='desc'>
                        <h4>{item[1].volumeInfo.title ? item[1].volumeInfo.title : 'неизвестно'}</h4>
                        <div className='authors'>
                            {item[1].volumeInfo.authors ? item[1].volumeInfo.authors.map((author) => (<p key={Math.random()}>{author}</p>)) : <p>Автоо неизвестен</p>}
                        </div>
                        <p>Количество страниц: {item[1].volumeInfo.pageCount ? item[1].volumeInfo.pageCount : '-'}</p>
                        <p><span>Дата выпуска: </span>{item[1].volumeInfo.publishedDate ? item[1].volumeInfo.publishedDate : 'нет'}</p>
                    </div>
                </div>
            </Link>
        ))}
        </>
    )
}
