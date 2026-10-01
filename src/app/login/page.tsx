import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen bg-shuttle-gray-50 flex items-center justify-center py-24 px-16">
      <div className="bg-white rounded-2xl shadow-sm p-12 max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-poppins font-semibold text-shuttle-gray-950 mb-2">Welcome Back</h1>
          <p className="text-shuttle-gray-400">Please enter your details to sign in.</p>
        </div>
        
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-shuttle-gray-950" htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email"
              placeholder="Enter your email" 
              className="border border-shuttle-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-persian-blue-800 transition-colors"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-shuttle-gray-950" htmlFor="password">Password</label>
              <Link href="/forgot-password" className="text-sm text-persian-blue-800 hover:underline">Forgot password?</Link>
            </div>
            <input 
              type="password" 
              id="password"
              placeholder="Enter your password" 
              className="border border-shuttle-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-persian-blue-800 transition-colors"
            />
          </div>
          
          <button className="bg-persian-blue-800 text-white font-medium py-3 rounded-lg hover:bg-persian-blue-800/90 transition-colors mt-2">
            Sign In
          </button>
        </form>
        
        <div className="mt-8 text-center text-sm text-shuttle-gray-700">
          Don't have an account? <Link href="/register" className="text-persian-blue-800 font-medium hover:underline">Register here</Link>
        </div>
      </div>
    </div>
  );
}
