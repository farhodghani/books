import React from 'react'
import { useLocation } from 'react-router-dom'
import './detail.css'

export default function Detail() {
    const location = useLocation()
    const data = location.state.info.volumeInfo;
    return (
        <div className='full'> 
            <div className='img'>
                <img src={data.imageLinks.smallThumbnail}/> 
            </div>
            <div className='desc'>
                <h4>{data.title}</h4>
                <p>Авторы: {data.authors.map(item =>  <span> {item},</span>)}</p>
                {data.categories.map(item => <p>Категория: <span> {item}</span></p>)}
                <p>Издатель: <span>{data.publisher}</span></p>
                <p>Язык: <span className='lang'>{data.language}</span></p>
                <p>Дата выпуска: <span>{data.publishedDate}</span></p>
                <div className='buttons'>
                    <a className='buy' href={data.infoLink}>Купить</a>
                    <a className='read' href={data.previewLink}>Читать</a>
                </div>
                
                <p className='desc'>{data.description}</p>
            </div>
        </div>
    )
}
