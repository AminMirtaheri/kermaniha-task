import Cart from "../../components/Cart"
import {
    UserOutlined

} from '@ant-design/icons';

const MainPage = () => {
    return (
        <div>
            <div className="header flex xl:flex-row lg:flex-col md:flex-col sm:flex-col justify-evenly items-center px-60 py-20">
                <Cart title={"HOW START YOUR OWN BLOG"} srcImg={'/images/development.jpg'} />
                <div className="flex flex-col gap-8 xl:w-3/12  md:w-full md:m-10 sm:mt-10 ">
                    <h1 className="font-bold text-5xl text-white">Lorem Ipsum Dolor Sit Amet</h1>
                    <p className="text-white">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua arcu risus quis varius quam</p>
                    <input type='email' placeholder="Email Address " className="px-4 py-3 rounded-full" />
                    <button className="rounded-full bg-purple-500 py-3 text-white">Free Download</button>
                </div>


            </div>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e5e7eb" fill-opacity="1" d="M0,96L15,112C30,128,60,160,90,149.3C120,139,150,85,180,74.7C210,64,240,96,270,112C300,128,330,128,360,144C390,160,420,192,450,186.7C480,181,510,139,540,154.7C570,171,600,245,630,240C660,235,690,149,720,122.7C750,96,780,128,810,128C840,128,870,96,900,117.3C930,139,960,213,990,202.7C1020,192,1050,96,1080,90.7C1110,85,1140,171,1170,202.7C1200,235,1230,213,1260,218.7C1290,224,1320,256,1350,245.3C1380,235,1410,181,1425,154.7L1440,128L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z"></path></svg>  */}
            <div className="flex  xl:flex-row lg:flex-col md:flex-col sm:flex-col justify-around w-9/12 m-auto pt-20 gap-8">
                <div className="flex flex-row xl:w-3/12 lg:w-6/12 md:w-6/12 sm:w-6/12 lg:m-auto md:m-auto sm:m-auto my-3">
                    <div className="flex mr-2 rounded-full p-1 bg-sky-600 flex items-center justify-center w-24 h-12"><UserOutlined style={{fontSize:'20px'}} /></div>
                    <div className="flex flex-col">
                        <p className="font-bold text-black">Neque Viverra Justo Nec Ultrices Egestas Revita</p>
                        <span className="text-gray-400">Molestie ac feugiat sed lectus vesti bulum mattis ullamcorper velit etro ultrices neque ornare dentri rem</span>
                    </div>
                </div>
                <div className="flex flex-row xl:w-3/12 lg:w-6/12 md:w-6/12 sm:w-6/12 lg:m-auto md:m-auto sm:m-auto my-3">
                    <div className="flex mr-2 rounded-full p-1 bg-sky-600 flex items-center justify-center w-24 h-12"><UserOutlined style={{fontSize:'20px'}} /></div>
                    <div className="flex flex-col">
                        <p className="font-bold text-black">Neque Viverra Justo Nec Ultrices Egestas Revita</p>
                        <span className="text-gray-400">Molestie ac feugiat sed lectus vesti bulum mattis ullamcorper velit etro ultrices neque ornare dentri rem</span>
                    </div>
                </div>
                <div className="flex flex-row xl:w-3/12 lg:w-6/12 md:w-6/12 sm:w-6/12 lg:m-auto md:m-auto sm:m-auto my-3">
                    <div className="flex mr-2 rounded-full p-1 bg-sky-600 flex items-center justify-center w-24 h-12"><UserOutlined style={{fontSize:'20px'}} /></div>
                    <div className="flex flex-col">
                        <p className="font-bold text-black">Neque Viverra Justo Nec Ultrices Egestas Revita</p>
                        <span className="text-gray-400">Molestie ac feugiat sed lectus vesti bulum mattis ullamcorper velit etro ultrices neque ornare dentri rem</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MainPage