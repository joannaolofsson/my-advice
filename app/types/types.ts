export type Advice = {
    title: string;
    text: string;
};

export type AdviceContextType = {
    adviceList: Advice[];
    addAdvice: (advice: Advice) => void;
    editAdvice: (index: number, newAdvice: Advice) => void;
    deleteAdvice: (index: number) => void;
};

//export type AdviceProps = {
  //  adviceArray: string[],
//}