// Image constants and fallbacks
export const FALLBACK_IMAGE = 'https://via.placeholder.com/500x500/667eea/ffffff?text=';

export const defaultImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1080&auto=format&fit=crop',
    name: 'Mountain Lake',
    description: 'Serene mountain lake with crystal clear waters reflecting the peaks'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=500&auto=format',
    name: 'Ocean Sunset',
    description: 'Beautiful sunset over the peaceful ocean with vibrant colors'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1080&auto=format&fit=crop',
    name: 'Forest Path',
    description: 'Mystical forest path covered in sunlight and lush greenery'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?q=80&w=1080&auto=format&fit=crop',
    name: 'Desert Dunes',
    description: 'Rolling sand dunes at golden hour with dramatic shadows'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=1080&auto=format&fit=crop',
    name: 'Waterfall',
    description: 'Majestic waterfall in tropical rainforest with lush surroundings'
  },
  {
    id: 6,
    url: 'https://images.pexels.com/photos/2895861/pexels-photo-2895861.jpeg?w=500',
    name: 'Northern Lights',
    description: 'Aurora borealis dancing in the night sky over snowy mountains'
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1080&auto=format&fit=crop',
    name: 'City Lights',
    description: 'Vibrant cityscape at night with glowing skyscrapers'
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1080&auto=format&fit=crop',
    name: 'Tropical Beach',
    description: 'Palm trees and turquoise waters with bright sunlight'
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1080&auto=format&fit=crop',
    name: 'Mountain Peak',
    description: 'Snow-capped mountain peak touching clouds above the clouds'
  },
  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1080&auto=format&fit=crop',
    name: 'Countryside Hills',
    description: 'Rolling hills and green meadows with a lone tree'
  }
];

export const ANIMATION_VARIANTS = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, scale: 0.8 }
  },
  scaleIn: {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.9, opacity: 0 }
  }
};