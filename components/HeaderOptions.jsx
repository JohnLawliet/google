import {
    DotsVerticalIcon,
    MapIcon,
    NewspaperIcon,
    PhotographIcon,
    PlayIcon,
    SearchIcon
} from '@heroicons/react/outline'
import HeaderOption from './HeaderOption'

const HeaderOptions = () => {
    return (
        <div 
        className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:pl-52 lg:space-x-36 lg:max-w-[935px] lg:justify-between border-b">
            <div className="flex space-x-6">
                <HeaderOption 
                    Icon={SearchIcon}
                    title="All"
                    selected
                />
                <HeaderOption Icon={PhotographIcon} title="All" />
                <HeaderOption Icon={PlayIcon} title="All" />
                <HeaderOption Icon={NewspaperIcon} title="All" />
                <HeaderOption Icon={MapIcon} title="All" />
                <HeaderOption Icon={DotsVerticalIcon} title="All" />
                
            </div>

            <div className="flex space-x-4">
                <p className="link">Settings</p>
                <p className="link">Tools</p>
            </div>
        </div>
    )
}

export default HeaderOptions
