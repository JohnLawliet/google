import { UserCircleIcon } from "@heroicons/react/solid"

const Avatar = ({url, className}) => {
    console.log("url : ",url)

    return (
        url
        ? <img
            loading="lazy"
            src={url}
            alt="profile pic"
            className={`h-8 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
        />  
        : <UserCircleIcon className={`h-8 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}/>                  
    )
}

export default Avatar
