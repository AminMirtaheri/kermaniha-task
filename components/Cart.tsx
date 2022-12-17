import { NextComponentType } from 'next';
import { ReactNode } from 'react';
import Image from 'next/image'
import {
    CloudDownloadOutlined,
    FileMarkdownOutlined,
    LinkedinOutlined,
    FileTextOutlined

} from '@ant-design/icons';

interface CartProps {
    title: string,
    image?: ReactNode | string,
    srcImg?: string
}
const Cart = (props: CartProps) => {
    const iconSize = { fontSize: '27px', color: 'gray' };

    return (
        <div className=" inline-block xl:w-3/12 lg:w-5/12   rounded-xl shadow-2xl bg-gray-100 flex flex-col ">
            <span className="z-10 p-5">
                <CloudDownloadOutlined style={iconSize} />
            </span>
            <div className="w-full bg-sky-400  relative h-60 flex justify-end">
                {props.srcImg && <Image
                    src={props.srcImg}
                    alt="dev"
                    width={270}
                    height={270}
                    className='rounded-full imgDevelop absolute topSize'
                />}
                {props.image && props.image}

            </div>
            <span className='font-bold text-lg bg-slate-700 px-4 py-4 z-20 text-white'>{props.title}</span>
            <div className='flex justify-around items-center py-5'>
                <span className='h-0 w-32 border-2 border-2'></span>
                <div className='flex flex-row'>
                    <FileMarkdownOutlined className='mx-1' style={iconSize} />
                    <LinkedinOutlined className='mx-1' style={iconSize} />
                    <FileTextOutlined className='mx-1' style={iconSize}/>

                </div>
            </div>
        </div>
    )
}

export default Cart