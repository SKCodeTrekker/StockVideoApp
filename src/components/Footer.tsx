import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white px-9 py-9">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* About Section */}
        <div>
          <h2 className="font-bold mb-4">ABOUT STOCKVIDEOAPP</h2>
          <p className="text-gray-400 mb-4">
            It offers free stock videos and motion graphics for use in any project. You may use these video clips free of charge, in both personal and commercial productions. Video clips that carry the Creative Commons 3.0 license must be attributed to the original author.
          </p>
          <p className="text-gray-400">
            If you have any suggestions for the site, or would like to make a request for free stock footage please contact us at: <br/>
            <a href="mailto:support@stockvideoapp.net" className="text-blue-500">support@videvo.net</a>
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="font-bold mb-4">QUICK LINKS</h2>
          <ul className="space-y-2">
            <li><a href="/videos" className="text-gray-400 hover:underline">Stock Video</a></li>
            <li><a href="/footage" className="text-gray-400 hover:underline">Footage</a></li>
            <li><a href="/motion-graphics" className="text-gray-400 hover:underline">Motion Graphics</a></li>
            <li><a href="/templates" className="text-gray-400 hover:underline">Video Templates</a></li>
            <li><a href="/privacy-policy" className="text-gray-400 hover:underline">Privacy Policy</a></li>
            <li><a href="/terms" className="text-gray-400 hover:underline">Terms and Conditions</a></li>
            <li><a href="/api" className="text-gray-400 hover:underline">API</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h2 className="font-bold mb-4">SOCIAL MEDIA</h2>
          <p className="text-gray-400 mb-4">For recent updates and news follow our social media feeds</p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="text-white w-6 h-6" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} className="text-white w-6 h-6" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="text-white w-6 h-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="text-white w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
        <p>Copyright ©2024 Freepik Company S.L. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
