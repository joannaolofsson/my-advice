'use client'
import React, { createContext, useContext, useEffect, useState} from 'react';
import { Advice, AdviceContextType } from '../types/types';

const AdviceContext = createContext<AdviceContextType | undefined>(undefined);

export const AdviceProvider = ({ children }: {children: React.ReactNode}) =>{
    const [adviceList, setAdviceList] = useState<Advice[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem("myArray");
        if(stored) {
             setAdviceList(JSON.parse(stored));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("myArray", JSON.stringify(adviceList));
    }, [adviceList]);

    const addAdvice = (advice: Advice) => {
        setAdviceList((prev) => [...prev, advice]);
    };

    const editAdvice = (index: number, newAdvice: Advice) => {
        const updated = [...adviceList];
        updated[index] = newAdvice;
        setAdviceList(updated);
    };

    const deleteAdvice = (index: number) => {
        const updated = adviceList.filter((_, i) =>  i !==index);
        setAdviceList(updated);
    };

    return (
        <AdviceContext.Provider value={{ adviceList, addAdvice, editAdvice, deleteAdvice }}>
            {children}
        </AdviceContext.Provider>
    );
};

export const useAdvice = () => {
    const context = useContext(AdviceContext);
    if(!context) {
        throw new Error("useAdvice must be used within and AdviceProvider");
    }
    return context;
};