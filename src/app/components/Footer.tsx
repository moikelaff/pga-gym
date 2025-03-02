export default function Footer() {
    return (
        <footer className="bg-brandHotPink py-8 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            {/* Logo/Name and Address */}
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Phoenix Gymnastics Academy</h3>
              <p className="text-sm max-w-md">
                Cinere Bellevue Mall, GF 18-20, Jalan Merawan No.23, Pangkalan Jati, Kec. Cinere, Kota Depok, Jawa Barat - 16514
              </p>
            </div>
  
            {/* Email Contact */}
            <div className="text-right">
              <p className="font-medium mb-2">Email Us</p>
              <a href="mailto:phoenixgymnasticsa@gmail.com" className="text-sm hover:underline">
                phoenixgymnasticsa@gmail.com
              </a>
            </div>
          </div>
  
          {/* Copyright and Social Icons */}
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-pink-400 pt-6">
            <p className="text-sm mb-4 md:mb-0">© 2025 Phoenix Gymnastics Academy. All rights reserved</p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 items-center">
              <a href="https://www.tiktok.com/@phoenixgymacademy" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                <img src="/tiktok.svg" alt="TikTok" width={24} height={24} className="align-middle" />
              </a>
              <a href="https://www.instagram.com/phoenixgymacademy" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                <img src="/instagram.svg" alt="Instagram" width={24} height={24} className="align-middle" />
              </a>
              <a href="mailto:phoenixgymnasticsa@gmail.com" className="hover:opacity-80">
                <img src="/email.svg" alt="Email" width={24} height={24} className="align-middle" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
}