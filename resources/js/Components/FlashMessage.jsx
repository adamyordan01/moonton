import { usePage } from "@inertiajs/react";


const FlashMessage = ({ className='' }) => {
    const { flash } = usePage().props;
    
    if (!flash.message) {
        return null;
    }

    return (
        <div className={`bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative ${className}`} role="alert">
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline">
                {flash.message.message}
            </span>
        </div>
    )
}

export default FlashMessage;