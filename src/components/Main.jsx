import Aos from 'aos';
import { useEffect } from 'react';
import Header from './Header';

import posting from './images/posting.gif'
import posting2 from './images/posting2.gif'
import howitworks from './images/howitworks.png'
import ava from './images/ava.png'
import ava2 from './images/ava2.png'
import ava3 from './images/ava3.png'
import last from './images/last.png'

const Main = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <>
            <Header/>
            <div className='scroll-smooth flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-[#231b19] to-black font-mono'>
                <div className='pt-[120px] flex flex-col justify-center items-center'>
                    <div className='text-4xl sm:text-[500%] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-rose-500 to-rose-400 sm:pb-9'>
                        Автоматизируй
                    </div>
                    <div className='text-4xl sm:text-[500%] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-rose-300 to-orange-400 sm:pb-9'>
                        Актуализируй
                    </div>
                    <div className='text-4xl sm:text-[500%] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-rose-400 to-rose-300 sm:pb-9'>
                        Оптимизируй
                    </div>
                    <div className='text-4xl sm:text-[500%] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-orange-300 sm:pb-9'>
                        Контент
                    </div>
                    <div className='w-[110%]'>
                        <img src={posting} className='w-[150%] hidden p-6 pt-12 sm:block'/>

                        <img src={posting2} className='sm:hidden pt-12 pb-6'/>
                    </div>

                        <div className='text-4xl font-bold text-white pb-9 pt-3'>
                            Преимущества
                        </div>



                        <div className='flex flex-col justify-center items-center w-[100%] gap-9'>
                            <div className='bg-gradient-to-r from-zinc-700 rounded-lg w-[90%] sm:w-[60%] flex flex-col'>
                                <div className='p-4 flex flex-col gap-3'>
                                    <div className='text-orange-300 font-bold text-3xl'>
                                        Автоматизация
                                    </div>
                                    <div className='text-white'>
                                        Бот автоматически будет постить в ваши каналы контент, а также сможет опционально переписывать текст, используя chat GPT, поэтому не придеться нанимать контентщика или тратить время самому.
                                    </div>
                                </div>
                            </div>
                            <div className='bg-gradient-to-r from-zinc-700 rounded-lg w-[90%] sm:w-[60%] flex flex-col'>
                                <div className='p-4 flex flex-col gap-3'>
                                    <div className='text-orange-500 font-bold text-3xl'>
                                        Оптимизация
                                    </div>
                                    <div className='text-white'>
                                        Вы сможете лично настраивать время постинга, с каких каналов брать посты, какую вотермарку/подпись снизу поста ставить, выбирать диапазон актуальности постов и многое другое.
                                    </div>
                                </div>
                            </div>
                            <div className='bg-gradient-to-r from-zinc-700 rounded-lg w-[90%]  sm:w-[60%] flex flex-col'>
                                <div className='p-4 flex flex-col gap-3'>
                                    <div className='text-rose-500 font-bold text-3xl'>
                                        Актуализация
                                    </div>
                                    <div className='text-white'>
                                        Больше не придеться волноваться об актуальности ваших постов, ведь бот автоматически будет брать посты за тот диапазон времени, который укажите вы сами, тогда они будут всегда актуальны.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='text-4xl font-bold text-white pb-8 pt-8'>
                            Как это работает?
                        </div>
                        <div className='w-[100%] flex flex-col items-center justify-center'>
                            <img src={howitworks} className='sm:w-[50%]'/>
                        </div>

                        <div className='text-4xl font-bold text-white p-8'>
                            Команда
                        </div>

                        <div className='flex flex-col justify-center items-center w-[100%]'>
                            <div className='flex flex-col justify-center items-center w-[80%]'>
                                <img src={ava} className='p-8 pb-3'/>
                                <div className='text-white font-bold'>
                                    Victor "frontrunner"
                                </div>
                                <div className='text-white w-[90%] text-center'>
                                    Founder
                                </div>
                            </div>

                            <div className='flex flex-col justify-center items-center w-[80%]'>
                                <img src={ava2} className='p-8 pb-3'/>
                                <div className='text-white font-bold'>
                                    Andrey "Slon"
                                </div>
                                <div className='text-white w-[90%] text-center'>
                                    Java Developer
                                </div>
                            </div>

                            <div className='flex flex-col justify-center items-center w-[80%]'>
                                <img src={ava3} className='p-8 pb-3'/>
                                <div className='text-white font-bold'>
                                    Artem "Adonis"
                                </div>
                                <div className='text-white w-[90%] text-center'>
                                    Bizdev Sales
                                </div>
                            </div>

                        </div>

                        <div className='pt-24 pb-20'>
                           <a href='https://t.me/contentbotoff'><div className=' text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-300 border-solid border-2 rounded-lg border-orange-400 text-center justify-center text-2xl pl-10 pr-10 p-3 cursor-pointer font-bold hover:bg-white hover:text-white hover:border-white'>Telegram Bot</div></a>
                        </div>

                        <div>
                            <img src={last}/>
                        </div>



                </div>
            </div>
 

        </>
    )
}

export default Main;