import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGuestInteraction } from '../../context/GuestInteractionContext';
import { useAdmin } from '../../context/AdminContext';
import { OrderType, PaymentMethod } from '../../types';

const CheckoutModal: React.FC = () => {
  const { 
    isCheckoutOpen, 
    closeCheckout, 
    checkoutData, 
    updateCheckoutData,
    resetCheckoutData,
    clearCart,
    showSuccess
  } = useGuestInteraction();
  
  const { addOrder } = useAdmin();
  
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  // Reset step when modal opens
  useEffect(() => {
    if (isCheckoutOpen) {
      setCurrentStep(1);
      setErrors({});
    }
  }, [isCheckoutOpen]);
  
  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (step === 4) {
      if (!checkoutData.customerName.trim()) {
        newErrors.customerName = 'Name is required';
      }
      if (!checkoutData.customerPhone.trim()) {
        newErrors.customerPhone = 'Phone number is required';
      } else if (!/^[\+]?[\d\s\-\(\)]{10,}$/.test(checkoutData.customerPhone)) {
        newErrors.customerPhone = 'Please enter a valid phone number';
      }
    }
    
    if (step === 5 && checkoutData.orderType === 'delivery') {
      if (!checkoutData.deliveryAddress.trim()) {
        newErrors.deliveryAddress = 'Delivery address is required';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 8));
    }
  };
  
  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const updateItemQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    const updatedItems = checkoutData.items.map(item => 
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    ).filter(item => item.quantity > 0);
    
    const subtotal = updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const deliveryFee = checkoutData.orderType === 'delivery' ? 2000 : 0;
    const total = subtotal + deliveryFee;
    
    updateCheckoutData({ 
      items: updatedItems,
      subtotal,
      deliveryFee,
      total
    });
  };
  
  const handleSubmit = async () => {
    if (!validateStep(4) || (checkoutData.orderType === 'delivery' && !validateStep(5))) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Create order
    const orderNumber = `MH${Date.now().toString().slice(-6)}`;
    const orderId = `order_${Date.now()}`;
    
    addOrder({
      orderNumber,
      customer: {
        id: `cust_${Date.now()}`,
        name: checkoutData.customerName,
        phone: checkoutData.customerPhone,
        createdAt: new Date().toISOString(),
      },
      items: checkoutData.items.map(item => ({
        id: item.id,
        menuItemId: item.menuItemId,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        notes: item.notes,
      })),
      orderType: checkoutData.orderType,
      deliveryAddress: checkoutData.orderType === 'delivery' ? {
        street: checkoutData.deliveryAddress,
        city: 'Kigali',
        postalCode: '',
        country: 'Rwanda',
        notes: checkoutData.deliveryNotes,
      } : undefined,
      pickupTime: checkoutData.orderType === 'pickup' ? checkoutData.preferredTime : undefined,
      subtotal: checkoutData.subtotal,
      deliveryFee: checkoutData.deliveryFee,
      tax: 0,
      total: checkoutData.total,
      status: 'new',
      paymentStatus: checkoutData.paymentMethod === 'pay_on_delivery' ? 'pending' : 'paid',
      paymentMethod: checkoutData.paymentMethod,
      customerNotes: checkoutData.specialInstructions,
    });
    
    clearCart();
    resetCheckoutData();
    setIsSubmitting(false);
    closeCheckout();
    
    // Show success modal
    const isPartial = checkoutData.paymentMethod === 'partial' as PaymentMethod;
    const amountToPay = isPartial ? checkoutData.total / 2 : checkoutData.total;
    const paymentMessage = isPartial 
      ? `Your package will start being prepared. Please pay the half of your full payment (${amountToPay.toLocaleString()} RWF). We'll send updates via WhatsApp.`
      : `Your package will start being prepared. Please pay ${amountToPay.toLocaleString()} RWF. We'll send updates via WhatsApp.`;
    showSuccess({
      type: 'order',
      orderId: orderNumber,
      title: 'Order received 🎉',
      message: paymentMessage,
      momoNumber: '*182*8*1*123456#',
      bankAccount: 'BK-00123456789012',
      showPaymentInfo: true,
    });
  };
  
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Review Your Order</h3>
            <div className="max-h-60 overflow-y-auto">
              {checkoutData.items.map((item) => (
                <div key={item.id} className="flex justify-between items-center py-2 border-b">
                  <div>
                    <p className="font-medium">{item.name} × {item.quantity}</p>
                    <p className="text-sm text-gray-500">{item.notes}</p>
                  </div>
                  <p className="font-semibold">{(item.price * item.quantity).toLocaleString()} RWF</p>
                </div>
              ))}
            </div>
            <div className="border-t pt-3 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{checkoutData.subtotal.toLocaleString()} RWF</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>{checkoutData.deliveryFee.toLocaleString()} RWF</span>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-[#BF2201]">{checkoutData.total.toLocaleString()} RWF</span>
              </div>
            </div>
          </div>
        );
       
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Choose Order Type</h3>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => updateCheckoutData({ orderType: 'delivery' })}
                className={`p-4 rounded-lg border-2 transition-all ${
                  checkoutData.orderType === 'delivery'
                    ? 'border-[#BF2201] bg-red-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-2xl mb-2">🚚</div>
                <p className="font-medium">Delivery</p>
              </button>
              <button
                onClick={() => updateCheckoutData({ orderType: 'pickup' })}
                className={`p-4 rounded-lg border-2 transition-all ${
                  checkoutData.orderType === 'pickup'
                    ? 'border-[#BF2201] bg-red-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-2xl mb-2">🏃</div>
                <p className="font-medium">Pickup</p>
              </button>
            </div>
          </div>
        );
       
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Customer Information</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input
                type="text"
                value={checkoutData.customerName}
                onChange={(e) => updateCheckoutData({ customerName: e.target.value })}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#BF2201] focus:border-transparent ${
                  errors.customerName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your full name"
              />
              {errors.customerName && <p className="text-red-500 text-sm mt-1">{errors.customerName}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number (WhatsApp) *</label>
              <input
                type="tel"
                value={checkoutData.customerPhone}
                onChange={(e) => updateCheckoutData({ customerPhone: e.target.value })}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#BF2201] focus:border-transparent ${
                  errors.customerPhone ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="+250 XXX XXX XXX"
              />
              {errors.customerPhone && <p className="text-red-500 text-sm mt-1">{errors.customerPhone}</p>}
            </div>
          </div>
        );
       
      case 4:
        return checkoutData.orderType === 'delivery' ? (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Delivery Details</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Address *</label>
              <textarea
                value={checkoutData.deliveryAddress}
                onChange={(e) => updateCheckoutData({ deliveryAddress: e.target.value })}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#BF2201] focus:border-transparent ${
                  errors.deliveryAddress ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your delivery address"
                rows={3}
              />
              {errors.deliveryAddress && <p className="text-red-500 text-sm mt-1">{errors.deliveryAddress}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Notes (Optional)</label>
              <textarea
                value={checkoutData.deliveryNotes}
                onChange={(e) => updateCheckoutData({ deliveryNotes: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BF2201] focus:border-transparent"
                placeholder="Landmark, directions, etc."
                rows={2}
              />
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Pickup Time</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Pickup Time</label>
              <input
                type="time"
                value={checkoutData.preferredTime}
                onChange={(e) => updateCheckoutData({ preferredTime: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BF2201] focus:border-transparent"
              />
            </div>
          </div>
        );
       
      case 5:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Special Instructions</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Food Preferences & Notes</label>
              <textarea
                value={checkoutData.specialInstructions}
                onChange={(e) => updateCheckoutData({ specialInstructions: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BF2201] focus:border-transparent"
                placeholder="Any special requests, allergies, or preferences..."
                rows={4}
              />
            </div>
          </div>
        );
       
      case 6:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Payment Method</h3>
            <div className="space-y-3">
              {[
                { value: 'partial', label: 'Partial Payment', icon: '💳' },
                { value: 'paid', label: 'Full Payment', icon: '✅' },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => updateCheckoutData({ paymentMethod: option.value as PaymentMethod })}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                    checkoutData.paymentMethod === option.value
                      ? 'border-[#BF2201] bg-red-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{option.icon}</span>
                    <span className="font-medium">{option.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );
       
      case 7:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Confirm Order</h3>
            <div className="max-h-80 overflow-y-auto space-y-3">
              {checkoutData.items.map((item) => {
                // Determine image based on item name
                let itemImage = '/food.png';
                const nameLower = item.name.toLowerCase();
                if (nameLower.includes('pizza')) itemImage = '/pizza.png';
                else if (nameLower.includes('burger')) itemImage = '/burger.png';
                else if (nameLower.includes('salmon') || nameLower.includes('fish') || nameLower.includes('tilapia')) itemImage = '/food.png';
                else if (nameLower.includes('cake') || nameLower.includes('dessert')) itemImage = '/food.png';
                else if (nameLower.includes('brochette') || nameLower.includes('meat')) itemImage = '/burger.png';
                else if (nameLower.includes('ugali') || nameLower.includes('mandazi') || nameLower.includes('sambaza')) itemImage = '/food.png';
                
                return (
                  <div key={item.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <img
                      src={itemImage}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover bg-white p-1"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/food.png';
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.notes || 'No special notes'}</p>
                      <p className="text-sm font-semibold text-[#BF2201]">{item.price.toLocaleString()} RWF each</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                        disabled={isSubmitting}
                      >
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </button>
                      <span className="w-8 text-center font-semibold text-gray-900">{item.quantity}</span>
                      <button
                        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full bg-[#BF2201] hover:bg-[#A01B00] flex items-center justify-center transition-colors"
                        disabled={isSubmitting}
                      >
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="border-t pt-3 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">{checkoutData.subtotal.toLocaleString()} RWF</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Fee</span>
                <span className="font-medium">{checkoutData.deliveryFee.toLocaleString()} RWF</span>
              </div>
              <div className="flex justify-between text-lg font-bold border-t pt-2">
                <span>Total</span>
                <span className="text-[#BF2201]">{checkoutData.total.toLocaleString()} RWF</span>
              </div>
            </div>
          </div>
        );
       
      default:
        return null;
    }
  };
  
  const getStepTitle = () => {
    const titles = [
      '',
      'Review Order',
      'Order Type',
      'Your Information',
      checkoutData.orderType === 'delivery' ? 'Delivery Details' : 'Pickup Time',
      'Special Instructions',
      'Payment',
      'Confirm',
    ];
    return titles[currentStep] || '';
  };
  
  return (
    <AnimatePresence>
      {isCheckoutOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end md:items-center justify-center"
            onClick={!isSubmitting ? closeCheckout : undefined}
          >
            {/* Modal - Bottom sheet on mobile, centered on desktop */}
            <motion.div
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="bg-white w-full md:max-w-lg md:rounded-2xl md:max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-3">
                  {currentStep > 1 && (
                    <button
                      onClick={handleBack}
                      disabled={isSubmitting}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                  )}
                  <h2 className="text-xl font-bold text-gray-900">{getStepTitle()}</h2>
                </div>
                <button
                  onClick={closeCheckout}
                  disabled={isSubmitting}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Progress indicator */}
              <div className="px-4 py-2">
                <div className="flex gap-1">
                  {Array.from({ length: 7 }, (_, i) => (
                    <div
                      key={i}
                      className={`flex-1 h-1 rounded-full ${
                        i + 1 <= currentStep ? 'bg-[#BF2201]' : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 overflow-y-auto p-4">
                {renderStep()}
              </div>
              
              {/* Footer - Sticky button */}
              <div className="p-4 border-t bg-white">
                {currentStep < 7 ? (
                  <button
                    onClick={handleNext}
                    disabled={isSubmitting}
                    className="w-full bg-[#BF2201] hover:bg-[#A01B00] text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-[#BF2201] hover:bg-[#A01B00] text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Processing...
                      </>
                    ) : (
                      'Place Order'
                    )}
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CheckoutModal;