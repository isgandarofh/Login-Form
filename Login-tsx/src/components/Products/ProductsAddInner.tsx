import { useSelectorCustom } from "../../store/store"
import StepTwo from "./StepTwo";
import StepOne from "./StepOne"


export default function ProductsAddInner() {
    const { step } = useSelectorCustom((state) => state.products)
    switch(step){
        case 0:
            return <StepOne/>;
            case 1: 
            return <StepTwo/>
        ;
        default : <StepOne/>
    }
    return (
    <>
        
    </>
  )
}
