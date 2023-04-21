'use client';

import axios from "axios";
import { useState } from 'react';
import {FieldValues,SubmitHandler,useForm} from 'react-hook-form'

import useRegisterModal from '@/app/hook/useRegisterModal';

import Modal from "./Modal";
import { toast } from 'react-hot-toast';

const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const [isLoading,setIsLoading]=useState(false);
    const {register,handleSubmit,formState:{errors,}}=useForm<FieldValues>({
        defaultValues:{
            name:'',
            email:'',
            password:''
        }
    });
    const onSubmit:SubmitHandler<FieldValues>=(data)=>{
        setIsLoading(true);

        axios.post('/api/register', data)
        .then(()=>{
            toast.success('Registered')
            registerModal.onClose();
        })
        .catch((error)=>{
            toast.error(error)
        })
        .finally(()=>{
            setIsLoading(false)
        })
    }

    return ( 
        <Modal disabled={isLoading} isOpen={registerModal.isOpen} onClose={registerModal.onClose} title="Register" actionLabel="Continue" onSubmit={handleSubmit(onSubmit)} />
     );
}
 
export default RegisterModal;