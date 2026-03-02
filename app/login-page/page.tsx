export default function LoginPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="flex flex-col gap-6 bg-white p-10 rounded shadow-md w-[300px]">
                <div className="flex flex-col">
                    <label htmlFor="username" className="text-sm font-medium text-gray-700 mb-2">
                        Username
                    </label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Enter username"
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password" className="text-sm font-medium text-gray-700 mb-2">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter password"
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                    Log In
                </button>
            </div>
        </div>
    );
}