const Footer = () => {
    return (
        <div className="flex flex-col fixed bottom-0 inset-x-0">
            <div className="bg-gray-100 flex px-7 py-3 border-b border-gray-200">
                <span className="text-sm text-gray-800">India</span>
                {/*add geolocation here*/}
            </div>
            <div className="bg-gray-100 flex justify-between px-7 py-3">
                <div className="flex space-x-6">
                    <span className="text-sm text-gray-800">About</span>
                    <span className="text-sm text-gray-800">Advertising</span>
                    <span className="text-sm text-gray-800">Business</span>
                    <span className="text-sm text-gray-800">How Search Works</span>
                </div>
                <div className="flex space-x-6">
                    <span className="text-sm text-gray-800">Privacy</span>
                    <span className="text-sm text-gray-800">Terms</span>
                    <span className="text-sm text-gray-800">Settings</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
