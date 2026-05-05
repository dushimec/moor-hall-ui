import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGuestInteraction } from '../../context/GuestInteractionContext';

const SuccessModal: React.FC = () => {
  const { isSuccessOpen, successData, closeSuccess } = useGuestInteraction();
  
  if (!successData) return null;
  
  const getIcon = () => {
    switch (successData.type) {
      case 'order':
        return '🎉';
      case 'reservation':
        return '✅';
      case 'catering':
        return '🎉';
      default:
        return '✅';
    }
  };
  
  const handleWhatsAppClick = () => {
    const phoneNumber = '+250788000000'; // Restaurant WhatsApp number
    const message = encodeURIComponent(
      successData.type === 'order' 
        ? `Hello! I'd like to check on my order #${successData.orderId}`
        : `Hello! I have a question about my ${successData.type === 'reservation' ? 'reservation' : 'catering request'}`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };
  
  return (
    <AnimatePresence>
      {isSuccessOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeSuccess}
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Icon */}
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">{getIcon()}</span>
              </div>
              
              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {successData.title}
              </h2>
              
              {/* Order ID for orders */}
              {successData.orderId && (
                <div className="bg-gray-50 rounded-lg px-4 py-2 mb-4 inline-block">
                  <span className="text-sm text-gray-600">Order ID:</span>
                  <span className="ml-2 font-mono font-bold text-[#BF2201]">
                    #{successData.orderId}
                  </span>
                </div>
              )}
              
              {/* Message */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {successData.message}
              </p>
              
              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 mb-3"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.71.46 3.31 1.24 4.66L2 22l5.42-1.24C9.02 21.4 10.47 21.8 12 21.8c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.61 0-3.16-.41-4.52-1.13l-.33-.16-3.11.73.73-3.01-.16-.34C4.41 15.16 4 13.61 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
                Chat on WhatsApp
              </button>
              
              {/* Close Button */}
              <button
                onClick={closeSuccess}
                className="w-full text-gray-500 hover:text-gray-700 font-medium py-2 transition-colors duration-200"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;