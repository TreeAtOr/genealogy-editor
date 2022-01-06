import { AnyAction } from "redux"
import Id from "../../types/Id"


/**
 * @param payload Id if selected character
 */
interface ISelectCharacter extends AnyAction{
    type: "SelectCharacter",
    payload?:Id
}

interface ISwitchEditCharacter extends AnyAction{
    type: "SwitchEditCharacter",
    payload?:boolean
}
interface ISwitchShowMerrages extends AnyAction{
    type: "SwichShowMerrages",
    payload?:boolean
}

type IApplicationAction = ISelectCharacter | ISwitchEditCharacter | ISwitchShowMerrages
export default IApplicationAction
