import React, { ChangeEvent, useState } from 'react'
import InputValidator from '../../lib/InputValidator';

export type FormData = { fname: string, email: string, phone: string, subject: 'For Adoption' | 'For Mating', message: string };
export type FormError = { fname?: string, email?: string, phone?: string, subject?: string, message?: string }

const ContactUsForm = () => {
    const [formData, setFormData] = useState<{ fname: string, email: string, phone: string, subject: 'For Adoption' | 'For Mating', message: string }>({
        fname: '',
        phone: '',
        email: '',
        subject: 'For Adoption',
        message: ''
    });


    const [error, setError] = useState<FormError>({});

    const handeInput = (ev: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const key = ev.target.name;
        if (!Object.hasOwn(formData, key)) {
            return console.error(`'${key}' key is not found in fromData`)
        }
        if (validateInput(key, ev.target.value)) {
            const data = JSON.parse(JSON.stringify(formData));
            data[key] = ev.target.value;
            setFormData(data);
        }
    }

    const validateInput = (key: string, value: any) => {
        const validator = new InputValidator(value);

        if (key === 'email') {
            const res = validator.setConditions([InputValidator.notEmpty(), InputValidator.email()]);
            return set_validation_error(key, res);
        }
        const res = validator.setConditions([InputValidator.notEmpty()]);
        return set_validation_error(key, res);
    }

    const set_validation_error = (key: string, validator: InputValidator) => {
        const res = validator.validate();
        const tempError: any = error;
        if (Object.hasOwn(tempError, key)) {
            if (!res) tempError[key] = validator.error();
            tempError[key] = undefined;
            setError(tempError);
            return res;
        }
        return true;
    }

    const handleSubmit = () => {

    }
    return (
        <div className='md:p-5'>
            <div className='mb-10'><h1 className='text-4xl font-bold'>Contact Us</h1></div>
            <form action="#" className='flex flex-col gap-5'>
                <div className="grid grid-cols-1 gap-5 md:gap-5 md:grid-cols-1">
                    <div className="form-control">
                        <input type="text" name='fname' placeholder="Enter full name" className="input input-bordered" value={formData.fname} onChange={handeInput} required />
                        {
                            error.fname && <label className="label text-error ">
                                <span className="label-text-alt">{error.fname}</span>
                            </label>
                        }
                    </div>

                    <div className="form-control">
                        <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                        {
                            error.email && <label className="label text-error ">
                                <span className="label-text-alt">{error.subject}</span>
                            </label>
                        }
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-5 md:gap-5">
                    <select name='phone' className="select select-bordered w-full" onChange={handeInput}>
                        <option value="For Adoption">For Adoption</option>
                        <option value="For Mating">For Mating</option>
                    </select>

                    <div className="form-control">
                        <input type="text" name="phone" placeholder="Enter your whatsapp no." className="input input-bordered" required />
                        {
                            error.email && <label className="label text-error ">
                                <span className="label-text-alt">{error.phone}</span>
                            </label>
                        }
                    </div>
                </div>

                <div className="form-control">
                        <textarea name="message" placeholder="Enter message" className="input input-bordered h-40" rows={10}  />
                        {
                            error.email && <label className="label text-error ">
                                <span className="label-text-alt">{error.message}</span>
                            </label>
                        }
                    </div>
            </form>

            <div className='flex items-center mt-5 md:mt-10 justify-end'>
                <button className='btn btn-primary'>Send</button>
            </div>
        </div>
    )
}

export default ContactUsForm