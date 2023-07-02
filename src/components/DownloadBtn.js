import React from 'react'
import { AiFillAndroid, AiFillApple } from "react-icons/ai"

export default function DownloadBtn() {
    return (
        <button className='get-app-btn'>
            <AiFillApple /> <AiFillAndroid /> Get the App
        </button>
    )
}
