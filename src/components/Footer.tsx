import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 justify-start gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1 max-w-3/4">
            <div className="flex items-center gap-2 mb-4 ">
              <Image
                alt="logo"
                src="/images/tarteeb-gradient.svg"
                width={140}
                height={48}
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transform your workflow with intelligent task management that
              adapts to your team&apos;s needs.
            </p>
            {/* <div className="flex gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white p-2"
              >
                <span className="text-xl">📘</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white p-2"
              >
                <span className="text-xl">🐦</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white p-2"
              >
                <span className="text-xl">💼</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white p-2"
              >
                <span className="text-xl">📧</span>
              </Button>
            </div> */}
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Reviews
                </a>
              </li>

              <li>
                <a
                  href="#solutions"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Solution
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div> */}

          {/* Support Links */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Status
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Security
                </a>
              </li>
            </ul>
          </div> */}
        </div>

        {/* Newsletter Signup */}
        {/* <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Get the latest updates and productivity tips.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
              <Button className="bg-purple-600 hover:bg-purple-700 px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div> */}

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-center items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Tarteeb. All rights reserved.
          </div>
          {/* <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Cookie Policy
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
