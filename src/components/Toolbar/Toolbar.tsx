import { FC } from "react";
import { useTypedDispatch } from "../../hooks/useTypedDispatch";
import { SwitchableButton } from "../ui/SwithableButton/SwitchableButton";
import "./Toolbar.css"
interface IToolbarProps {};

export const Toolbar: FC<IToolbarProps> = (props) => {

    const dispatch = useTypedDispatch();
    return (
        <div className="Toolbar">
            <SwitchableButton cases={[
                {content:"Show hasbands and wifes",action:()=>{
                    dispatch({type:"SwichShowMerrages",payload:true})
                }},
                {content:"Hide hasbands and wifes",action:()=>{
                    dispatch({type:"SwichShowMerrages",payload:false})
                }}
            ]}/>
            <button onClick={()=>{
                dispatch({type:"GenearateDynasty"})
                dispatch({type:"UpdateLinks"})
            }}>GENERATE DYNASTY</button>
            <button onClick={()=>{
                dispatch({type:"CreateNewCharacter"})
                dispatch({type:"UpdateLinks"})
            }}>Generate new</button>
        </div>
    );
}
