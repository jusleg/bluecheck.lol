import { FaceFrownIcon } from '@heroicons/react/24/solid'

export function ErrorContainer({ message } : { message: string}) {
    return (
        <div className="flex items-center justify-center mt-4">
            <FaceFrownIcon className="h-5 w-5 text-red-400" aria-hidden="true"/>
            <p className="text-sm font-medium text-red-800 ml-1">{message}</p>
        </div>
    )
}