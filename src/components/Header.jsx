import { useState } from "react";
import {Link} from 'react-router-dom';
import logo from './images/ContentLogo.png'

export default function Header() {

    return (
        <div className="w-full  backdrop-blur-sm text-white shadow fixed z-10 font-mono">
            <div className="">
                <div className="flex justify-center items-center">
                    <div className="flex flex-row justify-center items-center md:gap-[150%] gap-9">
                        <Link to="/">
                             <h2 className="text-xl font-bold text-white">Content</h2> 
                        </Link>
                        <img src={logo} className='w-[60px] p-2'/>
                        <a href='https://t.me/contentbotoff'><h2 className="text-xl font-bold text-white">Telegram</h2></a>
                    </div>
                </div>
            </div>
        </div>
    );
}