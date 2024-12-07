import { createSlice } from '@reduxjs/toolkit';

import watchProduct from '../../Assets/watchProduct.png';
import headsets from '../../Assets/headsets.png';
import blackphone from '../../Assets/blackphone.png';
import bluephone from '../../Assets/bluephone.png';
import redphone from '../../Assets/redphone.png';
import whitephone from '../../Assets/whitephone.png';




const initialState = {
    items: [
        { 
          id: 1, 
          name: 'Apple Watch', 
          description: 'Series 5 SE', 
          shortDescription: 'Apple Watch Series 5 SE with advanced features.',
          detailedDescription: 'The Apple Watch Series 5 SE is designed with fitness tracking, notifications, and seamless integration with your other Apple devices. It features a sleek design and a large display for easy readability.',
          longDescription: `The Apple Watch Series 5 SE is the perfect companion for those who want to stay connected and keep track of their health. With its advanced fitness tracking capabilities, you can monitor your workouts, heart rate, and daily activity goals. 
                            In addition to fitness tracking, the watch also provides real-time notifications, so you can stay updated on messages, calls, and important alerts without reaching for your phone. Its always-on display ensures you can see the time and notifications at a glance.
                            This model is designed for comfort, with lightweight materials and customizable watch faces, making it a versatile accessory for any lifestyle. It's also water-resistant, making it ideal for both land and water activities.`,
          price: 529.99, 
          image:watchProduct,
        },
        { 
          id: 2, 
          name: 'Sony ZX330BT', 
          description: 'Light Grey', 
          shortDescription: 'Sony ZX330BT Bluetooth Headphones in Light Grey.',
          detailedDescription: 'Enjoy wireless freedom with Sony ZX330BT Bluetooth Headphones, providing high-quality sound and comfortable wear. These headphones are designed for long-lasting use.',
          longDescription: `The Sony ZX330BT Bluetooth Headphones are engineered to offer superior sound quality in a sleek, lightweight design. The soft ear pads provide comfort for extended listening, making them ideal for use during commutes, at work, or at home. 
                            With Bluetooth connectivity, you can enjoy your favorite music and podcasts without the hassle of tangled wires. The on-ear controls make it easy to adjust the volume, skip tracks, and answer calls.
                            Additionally, the battery life allows for hours of uninterrupted listening, so you can stay connected all day. These headphones are perfect for music lovers who want both convenience and quality.`,
          price: 39.99, 
          image: headsets,
        },
        { 
          id: 3, 
          name: 'Iphone 11', 
          description: 'Serious Black', 
          shortDescription: 'Iphone 11 in Serious Black color, 128GB model.',
          detailedDescription: 'The iPhone 11, with its Serious Black finish, offers a powerful dual-camera system and the A13 Bionic chip for incredible performance.',
          longDescription: `The iPhone 11 in Serious Black is a sleek and stylish smartphone that combines design and performance. It features a dual-camera system, allowing you to capture stunning photos and 4K videos with ease. The Night mode ensures great low-light photography.
                            Powered by the A13 Bionic chip, the iPhone 11 delivers fast, efficient performance, perfect for gaming, streaming, and multitasking. Its Liquid Retina HD display brings colors to life, making media consumption an immersive experience.
                            Additionally, the iPhone 11 is water and dust resistant, providing durability and peace of mind. It supports wireless charging, and with all-day battery life, it keeps you going longer without needing frequent recharges.`,
          price: 619.99, 
          image:blackphone,
        },
        { 
          id: 4, 
          name: 'Iphone 11', 
          description: 'Subway Blue', 
          shortDescription: 'Iphone 11 in Subway Blue color, 128GB model.',
          detailedDescription: 'The iPhone 11 Subway Blue edition combines a vibrant color with top-tier performance, featuring a dual-camera system and a long-lasting battery.',
          longDescription: `The iPhone 11 in Subway Blue offers a fresh, vibrant look with the same cutting-edge features as other iPhone 11 models. The dual-camera system lets you take wide and ultra-wide photos, while the front-facing camera supports high-quality selfies and FaceTime video.
                            The 6.1-inch Liquid Retina HD display is bright and clear, ensuring that photos, videos, and apps look their best. Paired with the A13 Bionic chip, this phone delivers fast, smooth performance, whether you're gaming or streaming video.
                            Water and dust resistance make it durable for everyday use, and wireless charging capability ensures quick and convenient recharging.`,
          price: 619.99, 
          image: bluephone,
        },
        { 
          id: 5, 
          name: 'Iphone 11', 
          description: 'Product RED', 
          shortDescription: 'Iphone 11 Product RED edition, 128GB model.',
          detailedDescription: 'The iPhone 11 Product RED edition supports global efforts to fight HIV/AIDS and offers the same performance and features of the iPhone 11 series.',
          longDescription: `The iPhone 11 Product RED is more than just a phone—it's a way to make a difference. A portion of proceeds from this model goes to the Global Fund to fight HIV/AIDS. The vivid red color stands out while offering the same high-quality features as other iPhone 11 models.
                            Its dual-camera system includes a wide and ultra-wide lens, allowing for professional-quality photos and videos. The A13 Bionic chip ensures top-tier performance, and its long-lasting battery lets you stay connected longer.
                            With iOS updates and wireless charging capability, the iPhone 11 Product RED remains a top choice for those looking for style, performance, and the opportunity to support a global cause.`,
          price: 619.99, 
          image: redphone,
        },
        { 
          id: 6, 
          name: 'Iphone 11', 
          description: 'Milky White', 
          shortDescription: 'Iphone 11 Milky White, 128GB model with dual-camera.',
          detailedDescription: 'The iPhone 11 Milky White combines elegant design with powerful performance, featuring a dual-camera system and all-day battery life.',
          longDescription: `The iPhone 11 Milky White model offers a refined, elegant design that pairs with top-tier performance. Its dual-camera system lets you take wide and ultra-wide photos, while its Night mode helps capture stunning images in low light.
                            The 6.1-inch Liquid Retina HD display provides excellent clarity and vivid colors, making media viewing a joy. The A13 Bionic chip ensures smooth performance across apps, games, and tasks, making this phone a powerhouse for daily use.
                            Water and dust resistance adds durability, and its long-lasting battery and wireless charging capability make the iPhone 11 Milky White a versatile, reliable choice.`,
          price: 619.99, 
          image: whitephone,
        },
        { 
          id: 7, 
          name: 'Iphone 13', 
          description: 'Product RED', 
          shortDescription: 'Iphone 13 Product RED edition with advanced features.',
          detailedDescription: 'The iPhone 13 Product RED edition supports global efforts to fight HIV/AIDS and offers cutting-edge camera technology and processing power.',
          longDescription: `The iPhone 13 Product RED is an eye-catching, high-performance smartphone that also helps support the fight against HIV/AIDS through Apple's partnership with the Global Fund. Its powerful A15 Bionic chip provides faster performance and improved energy efficiency.
                            This model comes with a sophisticated dual-camera system that lets you capture incredible photos and videos, including in low-light conditions with its enhanced Night mode.
                            The Ceramic Shield front cover offers four times better drop performance, and the Super Retina XDR display brings everything to life with higher brightness and contrast. The iPhone 13 Product RED is a durable, stylish, and responsible choice for users.`,
          price: 619.99, 
          image: redphone,
        },
        { 
          id: 8, 
          name: 'Iphone 14', 
          description: 'Product RED', 
          shortDescription: 'Iphone 14 Product RED edition with A16 chip.',
          detailedDescription: 'The iPhone 14 Product RED features the new A16 Bionic chip, a high-performance dual-camera system, and a sleek design for modern users.',
          longDescription: `The iPhone 14 Product RED continues Apple's commitment to innovation and social responsibility. With its vibrant red finish, a portion of the proceeds goes to help fund efforts to end HIV/AIDS. The A16 Bionic chip powers the device, offering fast processing speeds and excellent battery efficiency.
                            Its new dual-camera system allows for even better low-light photos and 4K Dolby Vision video recording, making it ideal for content creators and everyday users alike.
                            Additionally, the iPhone 14 boasts crash detection, enhanced water resistance, and the latest iOS software updates, making it one of the most advanced phones in Apple's lineup. This model combines cutting-edge technology with a meaningful cause.`,
          price: 699.99, 
          image: redphone,
        }
      ],
    totalQuantity: 0,
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // Add reducers here if needed
    },
});

export default productSlice.reducer;