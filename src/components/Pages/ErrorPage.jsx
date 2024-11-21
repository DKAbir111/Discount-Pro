import { useRouteError, Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";
import Title from "../PageTitle/Title";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
            <Title title="Error" />
            <div className="bg-white shadow-md rounded-lg p-10 text-center">
                <div className="text-red-500 text-6xl mb-4 flex justify-center">
                    <FaExclamationTriangle />
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Oops! Something went wrong.</h1>
                <p className="text-gray-600 mb-4">
                    We&apos;re sorry, but an unexpected error has occurred.
                </p>
                {error?.statusText && (
                    <p className="text-gray-500 mb-4">Error: {error.statusText}</p>
                )}
                {error?.message && (
                    <p className="text-gray-500 mb-6">Details: {error.message}</p>
                )}
                <Link
                    to="/"
                    className="inline-block bg-[#19BC9B] text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-[#17a084] transition duration-200"
                >
                    Back to Home
                </Link>
            </div>
            <div className="mt-6 text-gray-500">
                <p>
                    Need help? <a href="mailto:support@example.com" className="text-blue-500 hover:underline">Contact Support</a>
                </p>
            </div>
        </div>
    );
}
