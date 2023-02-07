
import { useEffect } from 'react';
import auto2 from './images/auto2.jpg';
import volt from './images/volt.png';
import auto3 from './images/auto3.jpg';
import auto4 from './images/auto4.jpg';
import auto5 from './images/auto5.jpg';
import militaty from './images/military.jpg';
import service from './images/service.jpg'
import scheme1 from './images/scheme1.jpg'
import scheme2 from './images/scheme2.jpg'
import scheme3 from './images/scheme3.jpg'
import plan1 from './images/plan1.jpg'
import plan2 from './images/plan2.jpg'
import vid1 from './images/vid1.mp4';
import vid2 from './images/vid2.mp4';
import vid3 from './images/vid3.mp4';
import vid4 from './images/vid4.MP4';
import torpedo from './images/torpedo.png'
import Header from './Header';
import Aos from 'aos';
import 'aos/dist/aos.css';
import kulikov from './images/team/kulikov.jpg'
import anton from './images/team/anton.jpg'
import artem from './images/team/artem.jpg'
import nikol from './images/team/nikol.png'
import vlad from './images/team/vlad.jpg'
import viktor from './images/team/viktor.jpg'

import gab1 from './images/gab1.jpg'
import gab2 from './images/gab2.jpg'
import gab3 from './images/gab3.jpg'

import ser1 from './images/ser1.jpg'
import ser2 from './images/ser2.jpg'
import ser3 from './images/ser3.jpg'
import ser4 from './images/ser4.jpg'

import grass from './grass.jpg'

import grdn1 from './images/grdn1.jpg'
import grdn2 from './images/grdn2.jpg'
import grdn3 from './images/grdn3.jpg'
import grdn4 from './images/grdn4.jpg'

import avto1 from './images/avto1.jpg'
import avto2 from './images/avto2.jpg'
import avto3 from './images/avto3.jpg'
import avto4 from './images/avto4.jpg'


import telega from './images/telega.png'
import youtube from './images/youtube.png'

import roadmap from './images/roadmapv1.png'


const Main = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <>
            <Header/>
            <div className='flex flex-col bg-black scroll-smooth font-[sans-serif] overflow-hidden'>
                <div className='mt-[100px] flex flex-col justify-center items-center'>
                    <img src={volt} alt='volt' className='w-[200px] mt-[70%] md:mt-[16%]' data-aos='fade'></img>
                    <h1 className='font-bold text-white' data-aos='fade'>Приближаем будущее каждый день</h1>
                </div>
                <div className='mt-[100%] sm:mt-[28%] bg-gradient-to-r from-cyan-500 to-blue-500'>
                    <div className='p-3 flex flex-col justify-center items-center gap-7'>
                        <h1 className='font-bold font-[system-ui] text-[150%] mt-3 text-white'>Чем мы занимаемся?</h1>
                          <div className='bg-white rounded-lg p-3 text-center shadow-blackBg sm:w-[40%]'>
                            <span className='font-[sans-serif] text-[100%] sm:text-[150%] text-center font-bold'>Основная цель - продвинуть электромодули, которые наша команда разработала с целью внедрения электротехнологий в повседневную жизнь</span>
                          </div>
                          <div className='bg-white rounded-lg p-3 text-center mb-3 shadow-blackBg sm:w-[40%]'>
                            <span className='font-[sans-serif] text-[100%] sm:text-[150%] text-center mt-[30px] font-bold'>Электромодульные платформы имеют свои неоспоримые преимущества, которые проявляют себя по-разному в зависимости от применения технологии. Именно поэтому мы проанализировали сферы, где уже сейчас можно и нужно применять данную технологию</span>
                          </div>
                    </div>
                </div>
                <div className='bg-black sm:flex sm:justify-center'>
                    <div className='p-3 flex flex-col justify-center items-center sm:w-[50%]'>
                        <h1 id='mil' className='font-bold font-[sans-serif] text-[150%] text-white'>MILITARY</h1>
                        <div className='p-3 flex flex-col justify-center items-center gap-10'>
                            <div className='flex flex-col gap-3 bg-white p-3 rounded-lg shadow-blackBg' data-aos='fade-up'>
                                <img src={auto3} alt='auto2' className='shadow-blackBg rounded-lg'></img>
                                <span className='font-[sans-serif] text-[140%] text-center font-bold'>Простая конструкция</span>
                                <span className='font-[sans-serif] text-[100%] text-center'>Дешевле за счет модульной унифицированной конструкции и отсутствия сложных для производства деталей, требующих дорогостоящего оборудования (узкопрофильных станков)</span>
                            </div>
                            <div className='flex flex-col gap-3 bg-white p-3 rounded-lg shadow-blackBg' data-aos='fade-up'>
                                <img src={auto4} alt='auto2' className='shadow-blackBg rounded-lg'></img>
                                <span className='font-[sans-serif] text-[120%] text-center font-bold'>Более высокая успешность выполнения поставленных задач</span>
                                <span className='font-[sans-serif] text-[100%] text-center'>Обладает инновационной системой курсовой устойчивости за счет управления каждым мотором на каждое колесо в зависимости от угла поворота руля.</span>
                            </div>
                            <div className='flex flex-col gap-3 bg-white p-3 rounded-lg shadow-blackBg' data-aos='fade-up'>
                                <img src={auto2} alt='auto2' className='shadow-blackBg rounded-lg'></img>
                                <span className='font-[sans-serif] text-[140%] text-center font-bold'>Высокая маневренность</span>
                                <span className='font-[sans-serif] text-[100%] text-center'>Машина обладает более высокой маневренностью среди конкурентов, упрощает маневрирование в ограниченном пространстве.</span>
                            </div>
                            <div className='flex flex-col gap-3 bg-white p-3 rounded-lg shadow-blackBg' data-aos='fade-up'>
                                <img src={auto5} alt='auto2' className='shadow-blackBg rounded-lg'></img>
                                <span className='font-[sans-serif] text-[130%] text-center font-bold'>Возможность внедрения технологии передвижения в водных пространствах</span>
                                <span className='font-[sans-serif] text-[100%] text-center'>Может преодолевать водные преграды за счет возможности использования герметичного корпуса тк нету рулевых тяг и приводов на колеса.</span>
                            </div>
                        </div>
                        <span className='text-white font-bold text-center text-[150%] pt-5 pb-5'>Варианты исполнения на колесном и гусеничном движителе.</span>
                        <div className='flex flex-col gap-7'>
                            <img src={gab1} alt='auto2' className='shadow-blackBg rounded-lg' data-aos='fade-up'></img>
                            <img src={gab2} alt='auto2' className='shadow-blackBg rounded-lg' data-aos='fade-up'></img>
                            <img src={gab3} alt='auto2' className='shadow-blackBg rounded-lg' data-aos='fade-up'></img>
                            <img src={scheme3} alt='auto2' className='shadow-blackBg rounded-lg' data-aos='fade-up'></img>
                        </div>
                        <span className='text-white font-bold text-center text-[150%] pt-5 pb-5'>Бизнес-план</span>
                        <div className='flex flex-col items-center justify-center text-white gap-5 text-center sm:text-[50px] text-[140%]'>
                    <div className='flex flex-col text-black bg-white' data-aos='slide-left'>
                        <div><img src={plan1} alt='auto2' className='w-[100%] m-auto'/></div>
                        <div className='font-bold '>Вложения в производство</div>
                        <div className='text-[70%]'>Примерные цифры для вложения в первую линию производства</div>
                    </div>
                    <div className='flex flex-col bg-white' data-aos='slide-right'>
                        <div><img src={plan2} alt='auto2' className='w-[100%] m-auto'/></div>
                        <div className='font-bold text-black'>Вложения в опытный образец</div>
                        <div className='text-black text-[70%]'>Необходимые расходы, чтобы протестировать первый образец и закончить его окончательный вариант</div>
                    </div>
                    </div>
                    </div>
                </div>
                <div className='bg-black sm:flex sm:justify-center'>
                    <div className='flex flex-col items-center justify-center gap-3 sm:w-[50%]'>
                    <h1 id='ser' className='font-bold font-[sans-serif] text-[150%] text-white text-center p-5'>SERVICE</h1>
                        <img src={ser1} alt='ser' className='w-[90%] rounded-lg'/>
                        <img src={ser2} alt='ser' className='w-[90%] rounded-lg'/>
                        <img src={ser3} alt='ser' className='w-[90%] rounded-lg'/>
                        <img src={ser4} alt='ser' className='w-[90%] rounded-lg'/>

                        <span className='font-[sans-serif] text-[140%] text-justify font-bold pt-5 pb-5  bg-orange-200 text-black w-[90%] p-2' data-aos='slide-left'>Volt Service создан для целей поддержания чистоты и опрятности города. Электромодульные машины с новым продвинутым искуcственным интеллектом будут автоматически убирать улицы от пыли и грязи, а зимой смогут очищасть тратуары и дороги от снега, что сократит множество издержек</span>
                    </div>
                </div>
                <div className="sm:flex sm:justify-center">
                    <div className='flex flex-col items-center justify-center gap-3 sm:w-[50%]'>
                    <h1 id='gar' className='font-bold font-[sans-serif] text-[150%] text-white text-center p-5'>GARDEN</h1>
                        <img src={grdn1} alt='ser' className='w-[90%] rounded-lg'/>
                        <img src={grdn2} alt='ser' className='w-[90%] rounded-lg'/>
                        <img src={grdn3} alt='ser' className='w-[90%] rounded-lg '/>
                        <img src={grdn4} alt='ser' className='w-[90%] rounded-lg'/>

                        <span className='font-[system-ui] text-[140%] text-justify font-bold pt-5 pb-5 p-2 bg-green-300 w-[90%]' data-aos='slide-right'>Volt Garden создан для любителей газонов, помогает в автоматическом или ручном режиме эффективно косить широкие участки газонов, после работы его можно лего подзарядить с помощью электрозарядки</span>
                    </div>
                </div>
                <div className='bg-black sm:flex sm:justify-center'>
                    <div className='flex flex-col items-center justify-center gap-5 sm:w-[50%]'>
                    <h1 id='aut' className='font-bold font-[sans-serif] text-[150%] text-white text-center p-5'>AUTO</h1>
                        <img src={avto3} alt='ser' className='w-[90%] rounded-lg'/>
                        <img src={avto2} alt='ser' className='w-[90%] rounded-lg'/>
                        <img src={avto1} alt='ser' className='w-[90%] rounded-lg'/>
                        <img src={avto4} alt='ser' className='w-[90%] rounded-lg'/>

                        <span className='font-[sans-serif] text-[120%] text-justify font-bold pt-5 pb-5 text-white w-[90%] p-4' data-aos='slide-left'>Volt Auto это автомобиль основанный на нашем электронном модуле и электродвигателях, нужно лишь подзарядить и он готов для разъезда по городу. Дешевле аналогов, легкость смены конструкции дизайна делают эту модель более привлекательной для потребителя</span>
                    </div>
                </div>
                <div className='bg-black sm:flex sm:justify-center'>
                    <div className='flex flex-col items-center justify-center gap-5 sm:w-[50%] pt-5 pb-5'>
                        <img src={roadmap} alt='roadmap' className='w-[90%]'/>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center bg-white'>
                    <span className='text-center text-[130%] pt-[50%] pb-[50%] font-bold'>Мы не просто делаем рендеры, мы делаем уже сейчас опытные образцы</span>
                    <div className='flex flex-col gap-3 text-white text-center items-center'>
                        <video src={vid4} className='w-[100%] h-[100%] sm:w-screen' loop autoPlay muted/>
                    </div>
                    <div className='flex flex-col gap-3 text-white text-center items-center'>
                        <video src={vid2} className='w-[100%] h-[100%] sm:w-screen' loop autoPlay muted/>
                    </div>
                    <div className='flex flex-col gap-3 text-white text-center items-center'>
                        <video src={vid3} className='w-[100%] h-[100%] sm:w-screen' loop autoPlay muted/>
                    </div>
                </div>
                <div className='bg-white border-white'>
                    <div className='flex items-center justify-center'>
                <span className='text-blue-400 font-bold text-center pt-[20%] pb-[20%] text-[170%] bg-white'>Команда</span>
                </div>
                <div className='flex flex-col sm:flex-row justify-center text-center text-black gap-10 mb-[10vh] sm:flex-wrap  bg-white'>
                    <div className='flex flex-col gap-3 items-center' data-aos='fade'>
                        <img src={kulikov} alt='kulikov' className='rounded-full w-[30vh]'/>
                        <div className='font-bold sm:w-[300px]'>Вадим Геннадьевич Куликов</div>
                        <div className='w-[55%] sm:w-[230px]'>Окончил Энергетический факультет МГТУ им. Баумана, является Заслуженным изобретателем России.</div>
                        <a href='https://industrytv.ru/series/vadim_kulikov/' className='w-[55%] sw:w-[230px] text-blue-800'>Интервью</a>
                    </div>
                    <div className='flex flex-col gap-3 items-center' data-aos='fade'>
                        <img src={anton} alt='anton' className='rounded-full w-[30vh]'/>
                        <div className='font-bold sm:w-[300px]'>Троицкий Антон Александрович</div>
                        <div className='w-[55%] sm:w-[230px]'>Окончил факультет специального машиностроения МГТУ им. Баумана, экономический университет им. Г.В Плеханова, является квалифицированным инженером.</div>
                    </div>
                    <div className='flex flex-col gap-3 items-center' data-aos='fade'>
                        <img src={nikol} alt='nikol' className='rounded-full w-[30vh]'/>
                        <div className='font-bold sm:w-[300px]'>Серов Николай Владимирович</div>
                        <div className='w-[55%] sm:w-[230px]'>Специалист программирования на языках близких к железу. Закончил МГТУ "Станкин", MBA Engineering Wilhelm Buchner Hochschule, СберУниверситет.</div>
                    </div>
                    <div className='flex flex-col gap-3 items-center' data-aos='fade'>
                        <img src={artem} alt='artem' className='rounded-full w-[30vh]'/>
                        <div className='font-bold sm:w-[300px]'>Троицкий Артем Александрович</div>
                        <div className='w-[65%] sm:w-[230px]'>Окончил аспирантуру МИРЭА, написал диссератцию на тему «Распознавание изображений в сверхширокополосном радиовидении при обнаружении беспилотных летательных аппаратов», присвоена квалификация «Исследователь. Преподаватель-исследователь».</div>
                    </div>
                    <div className='flex flex-col gap-3 items-center' data-aos='fade'>
                        <img src={vlad} alt='vlad' className='rounded-full w-[30vh]'/>
                        <div className='font-bold sm:w-[300px]'>Кошевой Владимир Николаевич</div>
                        <div className='w-[55%] sm:w-[230px]'>Независимый дизайнер. Окончил университет машиностроения МАМИ по специальности "Дизайн автомобилей". Участник конкурса "Боевой автомобиль XXI века".</div>
                        <a href='https://www.behance.net/koshevoy28c645' className='w-[55%] sw:w-[230px] text-blue-800'>Портфолио</a>
                    </div>
                    <div className='flex flex-col gap-3 items-center' data-aos='fade'>
                        <img src={viktor} alt='viktor' className='rounded-full w-[30vh]'/>
                        <div className='font-bold sm:w-[300px]'>Колесников Виктор Андреевич</div>
                        <div className='w-[55%] sm:w-[230px]'>Студент 4го курса Финансового университета при Правительстве РФ, специализируется на веб-разработке, макроэкономике, цифровых финансах.</div>
                    </div>
                </div>
                <div className='flex flex-row justify-center items-center gap-5 p-5 bg-white'>
                    <a href='https://t.me/fakelEl' className='w-[15%] sm:w-[5%]'><img src={telega} alt='telega'/></a>
                    <a href='https://youtube.com/watch?v=jK46CT5L-Cs&feature=share' className='w-[15%] sm:w-[5%]'><img src={youtube} alt='telega'/></a>
                </div>
                <div className='flex flex-col justify-center items-center gap-5 p-5 bg-white w-[100%]'>
                    <span>anton-troickii@mail.ru</span>
                    <span>+79169715291</span>
                </div>
                <div className='pt-5 pb-5 bg-white'>
                    <a href='https://www.tinkoff.ru/cf/AAJbJSPVF2u'><div className='w-[90%] sm:w-[30%] border-solid border-4 rounded-tl-lg rounded-br-lg border-black text-center justify-center m-auto sm:text-[40px] text-[110%] p-5 cursor-pointer font-bold hover:bg-black hover:text-white'>Инвестировать</div></a>
                </div>
                </div>
            </div>
        </>
    )
}

export default Main;