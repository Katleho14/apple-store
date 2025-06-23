import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 1,
      name: 'Apple Watch Series 9',
      brand: 'Apple',
      price: 529.99,
      originalPrice: 599.99,
      category: 'Wearables',
      rating: 4.8,
      reviews: 2847,
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800',
      images: [
        'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1649772/pexels-photo-1649772.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      description: 'Advanced health monitoring and fitness tracking',
      longDescription: 'The Apple Watch Series 9 features the most advanced health sensors and fitness tracking capabilities. With its Always-On Retina display, comprehensive health monitoring, and seamless integration with your iPhone, it\'s the ultimate smartwatch for staying connected and healthy.',
      features: [
        'Always-On Retina display',
        'Advanced health sensors',
        'GPS + Cellular options',
        'Water resistant to 50 meters',
        'All-day battery life'
      ],
      inStock: true,
      fastShipping: true,
      tags: ['bestseller', 'new']
    },
    {
      id: 2,
      name: 'Sony WH-1000XM5',
      brand: 'Sony',
      price: 349.99,
      originalPrice: 399.99,
      category: 'Audio',
      rating: 4.7,
      reviews: 1923,
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
      images: [
        'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      description: 'Industry-leading noise canceling headphones',
      longDescription: 'Experience exceptional sound quality with industry-leading noise cancellation. The Sony WH-1000XM5 headphones deliver premium audio with crystal-clear hands-free calling and up to 30 hours of battery life.',
      features: [
        'Industry-leading noise cancellation',
        '30-hour battery life',
        'Quick charge (3 min = 3 hours)',
        'Crystal clear hands-free calling',
        'Multipoint connection'
      ],
      inStock: true,
      fastShipping: true,
      tags: ['popular']
    },
    {
      id: 3,
      name: 'iPhone 15 Pro',
      brand: 'Apple',
      price: 999.99,
      originalPrice: 1099.99,
      category: 'Smartphones',
      rating: 4.9,
      reviews: 5672,
      image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800',
      images: [
        'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      description: 'Titanium design with A17 Pro chip',
      longDescription: 'The iPhone 15 Pro features a stunning titanium design, the powerful A17 Pro chip, and an advanced camera system. Experience pro-level photography and videography with the most capable iPhone ever.',
      features: [
        'Titanium design',
        'A17 Pro chip',
        'Pro camera system',
        'Action Button',
        'USB-C connectivity'
      ],
      inStock: true,
      fastShipping: true,
      tags: ['bestseller', 'premium']
    },
    {
      id: 4,
      name: 'MacBook Air M3',
      brand: 'Apple',
      price: 1299.99,
      originalPrice: 1399.99,
      category: 'Laptops',
      rating: 4.8,
      reviews: 3421,
      image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=800',
      images: [
        'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      description: 'Supercharged by M3 chip',
      longDescription: 'The MacBook Air with M3 chip delivers exceptional performance and all-day battery life in an incredibly thin and light design. Perfect for work, creativity, and everything in between.',
      features: [
        'M3 chip performance',
        'Up to 18 hours battery life',
        '13.6-inch Liquid Retina display',
        'MagSafe charging',
        'Two Thunderbolt ports'
      ],
      inStock: true,
      fastShipping: false,
      tags: ['new', 'premium']
    },
    {
      id: 5,
      name: 'iPad Pro 12.9"',
      brand: 'Apple',
      price: 1099.99,
      originalPrice: 1199.99,
      category: 'Tablets',
      rating: 4.7,
      reviews: 2156,
      image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800',
      images: [
        'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1334598/pexels-photo-1334598.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      description: 'Ultimate iPad experience with M2 chip',
      longDescription: 'The 12.9-inch iPad Pro with M2 chip delivers next-level performance for demanding workflows. Features the stunning Liquid Retina XDR display and works seamlessly with Apple Pencil and Magic Keyboard.',
      features: [
        'M2 chip performance',
        '12.9-inch Liquid Retina XDR display',
        'Apple Pencil (2nd gen) support',
        'Magic Keyboard compatible',
        'All-day battery life'
      ],
      inStock: true,
      fastShipping: true,
      tags: ['popular', 'premium']
    },
    {
      id: 6,
      name: 'AirPods Pro (3rd Gen)',
      brand: 'Apple',
      price: 249.99,
      originalPrice: 279.99,
      category: 'Audio',
      rating: 4.6,
      reviews: 4892,
      image: 'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=800',
      images: [
        'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/8534089/pexels-photo-8534089.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      description: 'Adaptive Audio with personalized spatial audio',
      longDescription: 'AirPods Pro (3rd generation) feature Adaptive Audio, personalized spatial audio, and enhanced noise cancellation. Experience immersive sound with the most advanced AirPods ever.',
      features: [
        'Adaptive Audio',
        'Personalized Spatial Audio',
        'Enhanced noise cancellation',
        'Conversation Awareness',
        'USB-C charging case'
      ],
      inStock: true,
      fastShipping: true,
      tags: ['bestseller', 'new']
    }
  ],
  searchQuery: '',
  selectedCategory: 'all',
  sortBy: 'featured',
  loading: false,
  error: null
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const {
  setSearchQuery,
  setSelectedCategory,
  setSortBy,
  setLoading,
  setError
} = productsSlice.actions;

export default productsSlice.reducer;