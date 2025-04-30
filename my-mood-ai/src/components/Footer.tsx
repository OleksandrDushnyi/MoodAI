export default function Footer() {
    return (
      <footer className="w-full bg-white/30 backdrop-blur-md border-t border-white/40 shadow-inner py-6 mt-auto text-gray-900 ">
        <div className="max-w-7xl mx-auto text-center px-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Your Website. All Rights Reserved.
          </p>
          <div className="mt-2">
            <a href="/privacy-policy" className="text-gray-700 hover:text-black mx-3">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-700 hover:text-black mx-3">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    )
  }
  