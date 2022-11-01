import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";
import Content from "../lib/Content";
// import CONSTANT from "../lib/constant";
import WhatsappBtn from "./WhatsappBtn";

export type DogInfoCardProps = {
    gender: string,
    age: string,
    breed: string,
    weight: string,
    isForAdoption: boolean,
}


const DogInfoCard = (dogInfo: DogInfoCardProps) => {
    return (
        <div className="max-w-xl w-full h-min p-5 lg:p-10 border border-black bg-white">
            <h1 className="text-3xl">General information</h1>
            <div className=" divider "></div>
            <div className="content text-xl font-light flex flex-col gap-4 ">
                <div className="flex">
                    <p className="uppercase w-full">Gender:</p>
                    <p className="capitalize w-full">{dogInfo.gender}</p>
                </div>
                <div className="flex">
                    <p className="uppercase w-full">Age:</p>
                    <p className="capitalize w-full">{dogInfo.age}</p>
                </div>
                <div className="flex">
                    <p className="uppercase w-full">Breed:</p>
                    <p className="capitalize w-full">{dogInfo.breed}</p>
                </div>
                <div className="flex">
                    <p className="uppercase w-full">Size:</p>
                    <p className="capitalize w-full">{dogInfo.weight}</p>
                </div>
                <div className="flex">
                    <p className="uppercase w-full">For Adoption:</p>
                    <p className={`capitalize w-full ${dogInfo.isForAdoption ? 'text-success' : 'text-red-500'}`}>{dogInfo.isForAdoption ? 'Available' : 'Not Available'}</p>
                </div>
            </div>
            <div className="divider"></div>
            <div className="flex items-center gap-5 mb-5">
                <a href={`mailto:${Content.kennelInfo.email}`} className="btn btn-primary flex-grow"><RiMailSendLine className="text-xl mr-2"/>Email Us</a>
                <a href={`tel:${Content.kennelInfo.phone}`} className="btn btn-primary text-white"><span><FaPhone className="text-xl mr-2" /></span>{`Call Now`}</a>
            </div>
            
            <WhatsappBtn className="btn-block" link={`https://wa.me/${Content.kennelInfo.whatsapp}`} />
        </div>
    )
}

export default DogInfoCard;