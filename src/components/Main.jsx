import Aos from 'aos';
import { useEffect } from 'react';
import logo from './images/logo.jpg'
import logo2 from './images/logo2.png'
import firstpic from './images/firstpic.png'
import secondpic from './images/secondpic.png'
import qrcode from './images/qrcode.png'

const Main = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <>
    
            <div className='scroll-smooth flex flex-col justify-center items-center overflow-hidden font-mono bg-[#F5F5F6]'>
                <div className='flex flex-row justify-center sm:text-center items-center bg-[#4aa9ff] text-white text-2xl font-sans w-[100%] p-3 sm:text-4xl sm:gap-3 gap-5'>
                    <img src={logo} className='sm:w-[5%] w-[20%]'/> День рождения Модульбухгалтерии!
                </div>
                <div className='flex flex-col justify-center items-center pt-5 gap-5 w-[100%] pt-5'>

                        <img src={firstpic} className='sm:w-[20%] w-[50%]'/>
                        <h1 className='text-black font-sans sm:text-6xl text-4xl pt-3 pb-3'>10 лет с вами!</h1>
                    
                    <div className='flex flex-col justify-center text-center items-center bg-white rounded-lg sm:w-[50%] w-[80%]'>
                      <div className='sm:w-[50%] p-3 text-xl'>Приглашаем вас принять участие в неформальной встрече в честь дня рождения Модульбухгалтерии.</div>
                      <div className='sm:w-[50%] p-3 text-xl'>Мы стали старше и опытнее, достигали первых мест и набивали шишки. Благодаря вам мы смогли встретить первый круглый юбилей.</div>
                    </div>

                        <div className='font-sans text-md sm:text-xl pt-3 pr-3 pl-3'>22 ноября в 00:00 ждём вас здесь:</div>

                        <div className='flex sm:flex-row flex-col justify-center items-center'>
                            <img src={qrcode} className='w-[40%] sm:w-[30%]'/>
                            <div className='sm:text-xl text-md font-sans pt-3 sm:pt-0 sm:pl-6'>До скорой встречи!</div>
                        </div>

                        <div className='flex flex-row items-center justify-center gap-3 pt-8 pb-8'>
                            <img src={logo2} className='w-[80px]'/>
                            <div className='flex flex-col font-sans text-xl'>
                              <div>Программа</div>
                              <div>Мероприятия</div>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center items-center bg-white rounded-lg sm:w-[50%] w-[80%]'>
                      <div className='sm:w-[50%] p-3 text-xl' data-aos="fade">➤ <span className='text-[#4aa9ff]'>Встречаем гостей</span> в <span className='font-sans'>00:00</span> по адресу Космодамианская наб. 2, ресторан «Community».</div>
                      <div className='sm:w-[50%] p-3 text-xl' data-aos="fade">➤ В <span className='font-sans'>01:00</span> генеральный директор Никита Константинов откроет <span className='text-[#4aa9ff]'>официальную часть.</span></div>
                      <div className='sm:w-[50%] p-3 text-xl' data-aos="fade">➤ Перейдем к <span className='text-[#4aa9ff]'>неформальной части</span> в <span className='font-sans'>02:00</span>, чтобы ближе пообщаться с менеджментом компании, правлением Модульбанка и всеми гостями вечера.</div>
                      <div className='sm:w-[50%] p-3 text-xl' data-aos="fade">➤ В <span className='font-sans'>03:00</span> подведём итоги и <span className='text-[#4aa9ff]'>попрощаемся</span>, чтобы вы смогли добраться домой без пробок.</div>
                    </div>

                    <img src={secondpic} className='sm:w-[20%] w-[50%] pb-5'/>

                </div>
            </div>
 

        </>
    )
}

export default Main;

