import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ClickBait from '../components/ClickBait';
import Memories from '../components/sections/landing-page/Memories';

const about: NextPage = () => {
    return (
        <>
        <Head >
            <title>Fusion Kennel | About Us</title>
        </Head>
        <section>
            <div className="container mx-auto px-5">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className='flex flex-col justify-center items-center'>
                        <div className="max-w-md w-full flex flex-col gap-5">
                            <h1 className='text-4xl font-bold ubuntu '>We love dogs.</h1>
                            <p className='text-base text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum vero alias quisquam pariatur totam eius dolorem esse, expedita, excepturi minima sapiente officiis explicabo dolor quidem. Voluptatum dignissimos in mollitia placeat.</p>
                            <Link href={'/contact-us'}>
                                <a className='btn btn-primary'>Get Callback</a>
                            </Link>
                        </div>
                    </div>
                    <div className='relative'>
                        {/* <div className="overlay z-30 absolute w-full h-full bg-gradient-to-r from-black/20 to-white"></div> */}
                        <Image src={'/assets/images/dog-owner.jpg'} alt="dog owner" layout='responsive' width={700} height={400}></Image>
                    </div>

                </div>
            </div>
        </section>

        <section className='container mx-auto px-5 mb-20'>
            <Memories/>
        </section>
        <ClickBait/>
        </>
    );
}

// export const getStaticProps: GetStaticProps = async (ctx) => {


//     return {
//         props: {
//             data: {}
//         }
//     }
// }

export default about;