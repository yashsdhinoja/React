import {useState} from 'react'
function useToggle()
{
    const[isOn,setIson] = useState(false);

    const toggle=()=>
    {
        setIson(!isOn)
    }
    return {isOn,toggle};
}
export default useToggle