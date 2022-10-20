import type { GetStaticPropsContext, NextPage } from 'next'
import Image from 'next/image';
import Head from 'next/head'
import { Dog, DogApi } from '../../lib/Dogs'
import SectionHeader from '../../components/SectionHeader';
import DogInfoCard, { DogInfoCardProps } from '../../components/DogInfoCard';
import SectionTitle from '../../components/SectionTitle';

const ShowPuppy: NextPage<{ dog: Dog }> = ({ dog }) => {

    // const dogInfo: DogInfoCardProps = {
    //     age: dog.age,
    //     breed: dog.breed,

    // }
    return (
        <>
            <Head>
                <title>Fusion Kennel|Best Place to find you furry freind</title>
            </Head>
            <section role={'banner'}>
                <div className="container mx-auto px-2">
                    <div className='aspect-video relative w-full mb-10'>
                        {
                            dog.intro_video ?
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/_cSNWGmN1KI" title="German Shepherd PUPPIES 8 weeks and DAD Play 2020" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                : <Image src={dog.image} alt={dog.name} layout="fill" objectFit="cover"></Image>
                        }
                    </div>

                    <div className="mb-5"><SectionTitle>{dog.name}</SectionTitle></div>

                    <div className=" md:hidden flex justify-end mb-5">
                        <DogInfoCard {...dog} weight={dog.weight || ''} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div dangerouslySetInnerHTML={{ __html: dog.details || '' }}></div>

                        <div className="hidden md:pl-10 md:flex justify-end">
                            <DogInfoCard {...dog} weight={dog.weight || ''} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
    const allDogs = DogApi.dogsForAdoption();
    const pathsArray = allDogs.map((dog, index) => {
        return { params: { id: dog.id } };
    })
    return {
        paths: pathsArray,
        fallback: false, // can also be true or 'blocking'
    }
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: GetStaticPropsContext) {
    const dogId = context.params?.id;
    const dog = DogApi.findById(dogId as string)

    if (!dog) {
        return {
            notFound: true
        }
    }
    return {
        // Passed to the page component as props
        props: { dog },
    }
}

export default ShowPuppy;