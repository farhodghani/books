import React, {useEffect, useState} from 'react'
import axios from "axios";
import ContentItem from './ContentItem';
import {useDispatch} from 'react-redux';
import { setProduct } from './redux/actions/productAction';


export default function Content() {
  const dispatch = useDispatch()
  const [book, setBook] = useState('book');
  const [key, setKey] = useState('AIzaSyDGorCvZLJs9nlvFBWbtZtlXdbq6fOSyh0');
  const [maxR, setMaxR] = useState(10);
  const [mydata, setData] = useState([]);
  const [categ, setCateg] = useState("All");
  const [order, setOrder] = useState("relevance");


  function HandlerChange(e){
    const bookName = e.target.value;
    setBook(bookName)
  }
  const Handler = async (e) => {
    try{
        const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book && (book)}subject=${categ}&key=${key}&maxResults=${maxR}&orderBy=${order}`)
        dispatch(setProduct(res.data))
        console.log(res)
    }catch(e){
      console.log(e)
    }
  }  
  useEffect(()=>{
    Handler()
  })

  function Optioned(e){
    setCateg(e.target.value);
  }
  function Ordered(e){
    setOrder(e.target.value)
  }
  console.log(order)

  return (
    <>
        <form>
            <select onChange={Optioned} id='category'>
              <option disabled value="">Category</option>
              <option value="all">All</option>
              <option value="Architecture and the physically handicapped">Architecture</option>
              <option value="biography">Biography</option>
              <option value="computers">Computers</option>
              <option value="history">History</option>
              <option value="medical">Medical</option>
              <option value="poetry">Poetry</option>
            </select>
            <select onChange={Ordered} id='category'>
              <option value="relevance">Relevance</option>
              <option value="newest">Newest</option>
            </select>
            <input onChange={HandlerChange} className='search form-control w-30' type="text" placeholder='search'/>
            <button onClick={Handler} className='btn btn-primary' type='submit'>search</button>
        </form>
        <div className="content ">
            {<ContentItem />}
        </div>
        {
        mydata.length &&
        <div className='more'>
          <button onClick={Handler} className='btn btn-primary'>More books</button>
        </div>
        }
        
    </>
  )
}
