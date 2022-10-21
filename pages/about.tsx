import {GetStaticProps, NextPage} from 'next';
import Image from 'next/image';

const about:NextPage = () => {
    return (
        <section>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className='relative col-span-2'>
                        <div className="overlay z-30 absolute w-full h-full bg-gradient-to-r from-black/20 to-white"></div>
                        <Image src={'/assets/images/dog-owner.jpg'} alt="dog owner" layout='responsive' width={700} height={393.75}></Image>
                    </div>
                    <div className='flex flex-col items-end'>
                        {/* <div> */}
                        <h1 className='text-4xl font-bold ubuntu' >We love dogs.</h1>
                        <p className='text-base text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum vero alias quisquam pariatur totam eius dolorem esse, expedita, excepturi minima sapiente officiis explicabo dolor quidem. Voluptatum dignissimos in mollitia placeat.</p>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export const getStaticProps:GetStaticProps = async (ctx) => {


    return {
        props:{
            data:{}
        }
    }
}

export default about;