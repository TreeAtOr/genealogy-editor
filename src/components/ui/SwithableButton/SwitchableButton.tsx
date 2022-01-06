import { FC, useState } from "react";
interface ISwitchableButtonProps {
    cases: {content:any,action:()=>void}[]
};

export const SwitchableButton: FC<ISwitchableButtonProps> = (props) => {
    const [status, setStatus] = useState<number>(0);
    
    return (<button onClick={() => {
        props.cases[status].action()
        if(status >= props.cases.length - 1) setStatus(0);
        else setStatus(status + 1)
    }}>{props.cases[status].content}</button>);
}
