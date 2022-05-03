import React from 'react'
import "./content.css"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ContentItem({i}) {
    const products = useSelector((state) => state.allProducts.products.items);
    console.log(Boolean(products));
    return (
        <>
        {products && products.map(item => (
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={"/detail"} state={{info: item}}>
            <div className='main'>
                <div className='img'>
                    {item.volumeInfo.imageLinks ? <img src={item.volumeInfo.imageLinks.thumbnail}/> : <img height={120} width={120} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"/>}
                </div>
                <div className='desc'>
                    <h4>{item.volumeInfo.title}</h4>
                    <div className='authors'>
                        {item.volumeInfo.authors?.map((author) => (<p>{author}</p>))}
                    </div>
                    {item.volumeInfo.categories?.map(categ => <p><span>Категория: </span>{categ}</p>)}
                    <p>Количество страниц: {item.volumeInfo.pageCount ? item.volumeInfo.pageCount : '-'}</p>
                    <p><span>Дата выпуска: </span>{item.volumeInfo.publishedDate}</p>
                </div>
            </div>
            </Link>
        ))}
        </>
    )
}
