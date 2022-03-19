import React, {useState, useEffect} from 'react';
import './search.styles.scss'

export default function Search(props) {

    const [value, setValue] = useState('');
    const [result, setResult] = useState([]);

    useEffect(() => {
        if(value.length > 0){
            fetch('https://hanashi-store-default-rtdb.asia-southeast1.firebasedatabase.app/books/holder.json').then(
                response => response.json()
            ).then(responseData => {
                setResult([]);
                let searchQuery = value.toLowerCase();
                for(const key in responseData) {
                    let fruit = responseData[key].name.toLowerCase();
                    if(fruit.slice(0, searchQuery.length).indexOf(searchQuery) !== -1) {
                        setResult(prevResult => {
                            return[...prevResult, responseData[key].name]    
                        });
                    }
                }
            }).catch(error => {
                console.log(error);
            })
        }else{
            setResult([]);
        }
    }, [value])


    return (
        <div className='bar'>
                <input type='text'
                className='searchBar'
                placeholder="Search.."
                onChange={(event) => setValue(event.target.value)}
                value={value}
                />
                <div className="searchBack">
                    {result.map((result, index) => (
                        <a href="/shop" key={index}>
                            <div className="searchEntry">
                                {result}
                            </div>
                        </a>
                    ))}
                </div>
        </div>
    );
}