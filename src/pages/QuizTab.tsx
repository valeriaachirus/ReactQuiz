import {data} from '../API/data'

const Tab = () => {
    console.log(data)
    return (
        <div className="h-[400px] w-[600px] bg-[#E8B4B8] rounded">
            <div>
                
            <div 
                className="
                    border m-[10px] h-[38px] rounded flex items-center justify-center text-white 
                    bg-[#b48589] border-[#d4c2c4]
                "
            >
                Answer
            </div>       
                
            </div>
        </div>
    )
}

export default Tab

