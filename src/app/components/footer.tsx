import Link from 'next/link'
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-600">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* BRAND */}
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-primary">
              Gufranfolio&trade;
            </Link>
            <p className="text-sm text-secondary mt-2">
              © {new Date().getFullYear()} Gufran. All rights reserved.
            </p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex space-x-6">
            
          
            <a
              href="https://github.com/iGufrankhan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaGithub className="h-6 w-6" />
            </a>

            <a
              href="https://www.youtube.com/@i_am_BackTrack"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaYoutube className="h-6 w-6" />
            </a>

            <a
              href="https://www.linkedin.com/in/gufran-khan-1ba346292/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>

          </div>

        </div>

      </div>
    </footer>
  )
}
