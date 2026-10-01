import Link from "next/link";

export default function Register() {
  return (
    <div className="min-h-screen bg-shuttle-gray-50 flex items-center justify-center py-24 px-16">
      <div className="bg-white rounded-2xl shadow-sm p-12 max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-poppins font-semibold text-shuttle-gray-950 mb-2">Join Us</h1>
          <p className="text-shuttle-gray-400">Create an account to start your journey.</p>
        </div>
        
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-shuttle-gray-950" htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name"
              placeholder="Enter your full name" 
              className="border border-shuttle-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-persian-blue-800 transition-colors"
            />
          </div>

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
            <label className="text-sm font-medium text-shuttle-gray-950" htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password"
              placeholder="Create a password" 
              className="border border-shuttle-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-persian-blue-800 transition-colors"
            />
          </div>
          
          <button className="bg-persian-blue-800 text-white font-medium py-3 rounded-lg hover:bg-persian-blue-800/90 transition-colors mt-2">
            Create Account
          </button>
        </form>
        
        <div className="mt-8 text-center text-sm text-shuttle-gray-700">
          Already have an account? <Link href="/login" className="text-persian-blue-800 font-medium hover:underline">Sign in</Link>
        </div>
      </div>
    </div>
  );
}
