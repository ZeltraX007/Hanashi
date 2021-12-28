import React, {useState, useRef} from 'react'
import './slidedown.styles.scss'

export default function Slidedown(props) {
    const [isOpen, setIsOpen] = useState(false);
    const parentRef = useRef();


    return (
        <div className='collapsible'>
            <button className='toggle' onClick={() => setIsOpen(!isOpen)}>
                {props.label}
            </button>
            <div 
                className='content-parent' 
                ref={parentRef} 
                style={isOpen ? {
                    height: parentRef.current.scrollHeight + "px",
                } : {
                    height: "0px",
                }
                }>
                <div className='content'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}