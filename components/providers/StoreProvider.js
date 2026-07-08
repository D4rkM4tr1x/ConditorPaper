'use client';

import React, { useEffect, useState } from 'react';

const StoreContext = React.createContext(null);
const STORAGE_KEY = 'conditor-paper-store';

function getInitialState() {
  if (typeof window === 'undefined') {
    return {
      favorites: [],
      cart: [],
      promoCode: '',
      appliedPromo: null,
      paymentMethod: 'online',
      email: '',
    };
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return {
        favorites: [],
        cart: [],
        promoCode: '',
        appliedPromo: null,
        paymentMethod: 'online',
        email: '',
      };
    }

    const parsed = JSON.parse(raw);
    return {
      favorites: Array.isArray(parsed.favorites) ? parsed.favorites : [],
      cart: Array.isArray(parsed.cart) ? parsed.cart : [],
      promoCode: typeof parsed.promoCode === 'string' ? parsed.promoCode : '',
      appliedPromo: parsed.appliedPromo || null,
      paymentMethod: typeof parsed.paymentMethod === 'string' ? parsed.paymentMethod : 'online',
      email: typeof parsed.email === 'string' ? parsed.email : '',
    };
  } catch {
    return {
      favorites: [],
      cart: [],
      promoCode: '',
      appliedPromo: null,
      paymentMethod: 'online',
      email: '',
    };
  }
}

export function StoreProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('online');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const state = getInitialState();
    setFavorites(state.favorites);
    setCart(state.cart);
    setPromoCode(state.promoCode);
    setAppliedPromo(state.appliedPromo);
    setPaymentMethod(state.paymentMethod);
    setEmail(state.email);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ favorites, cart, promoCode, appliedPromo, paymentMethod, email })
    );
  }, [favorites, cart, promoCode, appliedPromo, paymentMethod, email]);

  const addToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
    setMessage(`${product.name} wurde zum Warenkorb hinzugefügt.`);
  };

  const updateQuantity = (productId, quantity) => {
    setCart((prev) =>
      prev
        .map((item) => (item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const toggleFavorite = (product) => {
    setFavorites((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const isFavorite = (productId) => favorites.some((item) => item.id === productId);

  const applyPromo = (code) => {
    const normalized = code.trim().toUpperCase();
    if (!normalized) {
      setAppliedPromo(null);
      setPromoCode('');
      return;
    }

    if (normalized === 'SPRING10') {
      setAppliedPromo({ code: normalized, percent: 10 });
      setPromoCode(normalized);
      setMessage('Promo-Code angewendet: 10% Rabatt.');
      return;
    }

    if (normalized === 'SAVE15') {
      setAppliedPromo({ code: normalized, percent: 15 });
      setPromoCode(normalized);
      setMessage('Promo-Code angewendet: 15% Rabatt.');
      return;
    }

    setAppliedPromo(null);
    setPromoCode(normalized);
    setMessage('Dieser Promo-Code ist leider ungültig.');
  };

  const removePromo = () => {
    setAppliedPromo(null);
    setPromoCode('');
  };

  const placeOrder = (customerEmail) => {
    if (!cart.length) {
      setMessage('Ihr Warenkorb ist leer.');
      return;
    }

    const finalEmail = customerEmail || email || '';
    if (finalEmail) {
      setEmail(finalEmail);
    }

    setMessage(finalEmail ? `Bestellung bestätigt. Eine Bestätigungs-E-Mail wird an ${finalEmail} gesendet.` : 'Bestellung bestätigt.');
    setCart([]);
    setAppliedPromo(null);
    setPromoCode('');
  };

  const subtotal = cart.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);
  const discount = appliedPromo ? subtotal * (appliedPromo.percent / 100) : 0;
  const total = Math.max(0, subtotal - discount);

  const value = {
    favorites,
    cart,
    promoCode,
    appliedPromo,
    paymentMethod,
    email,
    message,
    subtotal,
    discount,
    total,
    addToCart,
    updateQuantity,
    removeFromCart,
    toggleFavorite,
    isFavorite,
    setPromoCode,
    applyPromo,
    removePromo,
    setPaymentMethod,
    setEmail,
    setMessage,
    placeOrder,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = React.useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
}
