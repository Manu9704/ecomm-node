const axios = require("axios");

const data = [
    {
        "name": "Seeds of Change Organic Quinoa, Brown",
        "price": 238.85,
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!",
        "category": "clothing",
        "stock": 27,
        "color": "blue",
        "sizes": [
            "s"
        ],
        "fits": [],
        "thumbnail": {
            "main": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-1-1.jpg",
            "img1": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-1-1.jpg",
            "img2": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-1-1.jpg"
        },
        "images": {
            "main": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-1-1.jpg",
            "img1": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-1-2.jpg"
        },
        "pattern": [
            "red",
            "yellow",
            "white",
            "orange",
            "cyan",
            "green",
            "purple"
        ],
        "brand": "coding school"
    },
    {
        "name": "All Natural Italian-Style Chicken Meatballs",
        "price": 78,
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!",
        "category": "jeans",
        "stock": 27,
        "color": "blue",
        "sizes": [
            "s"
        ],
        "fits": [],
        "thumbnail": {
            "main": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-2-1.jpg",
            "img1": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-2-2.jpg",
            "img2": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-2-1.jpg"
        },
        "images": {
            "main": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-2-1.jpg",
            "img1": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-2-2.jpg"
        },
        "pattern": [
            "red",
            "yellow",
            "white",
            "orange",
            "cyan",
            "green",
            "purple"
        ],
        "brand": "coding school"
    },
    {
        "name": "Angie’s Boomchickapop Sweet & Salty",
        "price": 35,
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!",
        "category": "accessories",
        "stock": 27,
        "color": "blue",
        "sizes": [
            "s"
        ],
        "fits": [],
        "thumbnail": {
            "main": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-3-1.jpg",
            "img1": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-3-2.jpg",
            "img2": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-3-1.jpg"
        },
        "images": {
            "main": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-3-1.jpg",
            "img1": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-3-2.jpg"
        },
        "pattern": [
            "red",
            "yellow",
            "white",
            "orange",
            "cyan",
            "green",
            "purple"
        ],
        "brand": "coding school"
    },
    {
        "name": "Foster Farms Takeout Crispy Classic",
        "price": 55,
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!",
        "category": "trousers",
        "stock": 27,
        "color": "blue",
        "sizes": [
            "s"
        ],
        "fits": [],
        "thumbnail": {
            "main": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-4-1.jpg",
            "img1": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-4-2.jpg",
            "img2": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-4-1.jpg"
        },
        "images": {
            "main": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-4-1.jpg",
            "img1": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-4-2.jpg"
        },
        "pattern": [
            "red",
            "yellow",
            "white",
            "orange",
            "cyan",
            "green",
            "purple"
        ],
        "brand": "coding school"
    },
    {
        "name": "Green Diamond Almonds Lightly From Oska",
        "price": 110,
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!",
        "category": "shoe",
        "stock": 27,
        "color": "red",
        "sizes": [
            "s"
        ],
        "fits": [],
        "thumbnail": {
            "main": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-5-1.jpg",
            "img1": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-5-2.jpg",
            "img2": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-5-1.jpg"
        },
        "images": {
            "main": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-5-1.jpg",
            "img1": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-5-2.jpg"
        },
        "pattern": [
            "red",
            "yellow",
            "white",
            "orange",
            "cyan",
            "green",
            "purple"
        ],
        "brand": "coding school"
    },
    {
        "name": "Chobani Complete Vanilla Greek Yogurt",
        "price": 150,
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!",
        "category": "jeans",
        "stock": 27,
        "color": "green",
        "sizes": [
            "s"
        ],
        "fits": [],
        "thumbnail": {
            "main": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-6-2.jpg",
            "img1": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-6-1.jpg",
            "img2": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-6-2.jpg"
        },
        "images": {
            "main": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-6-1.jpg",
            "img1": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-6-2.jpg"
        },
        "pattern": [
            "red",
            "yellow",
            "white",
            "orange",
            "cyan",
            "green",
            "purple"
        ],
        "brand": "coding school"
    },
    {
        "name": "Canada Dry Ginger Ale – 2 L Bottle",
        "price": 98,
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!",
        "category": "trousers",
        "stock": 27,
        "color": "blue",
        "sizes": [
            "s"
        ],
        "fits": [],
        "thumbnail": {
            "main": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-7-1.jpg",
            "img1": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-7-2.jpg",
            "img2": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-7-1.jpg"
        },
        "images": {
            "main": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-7-1.jpg",
            "img1": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-7-2.jpg"
        },
        "pattern": [
            "red",
            "yellow",
            "white",
            "orange",
            "cyan",
            "green",
            "purple"
        ],
        "brand": "coding school"
    },
    {
        "name": "Encore Seafoods Stuffed Alaskan",
        "price": 24,
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!",
        "category": "shoe",
        "stock": 27,
        "color": "blue",
        "sizes": [
            "s"
        ],
        "fits": [],
        "thumbnail": {
            "main": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-8-1.jpg",
            "img1": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-8-2.jpg",
            "img2": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-8-1.jpg"
        },
        "images": {
            "main": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-8-1.jpg",
            "img1": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-8-2.jpg"
        },
        "pattern": [
            "red",
            "yellow",
            "white",
            "orange",
            "cyan",
            "green",
            "purple"
        ],
        "brand": "coding school"
    },
    {
        "name": "Gorton’s Beer Battered Fish Fillets",
        "price": 146,
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!",
        "category": "accessories",
        "stock": 27,
        "color": "blue",
        "sizes": [
            "s"
        ],
        "fits": [],
        "thumbnail": {
            "main": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-9-1.jpg",
            "img1": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-9-2.jpg",
            "img2": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-9-1.jpg"
        },
        "images": {
            "main": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-9-1.jpg",
            "img1": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-9-2.jpg"
        },
        "pattern": [
            "red",
            "yellow",
            "white",
            "orange",
            "cyan",
            "green",
            "purple"
        ],
        "brand": "coding school"
    },
    {
        "name": "Haagen-Dazs Caramel Cone Ice Cream",
        "price": 67,
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!",
        "category": "jacket",
        "stock": 27,
        "color": "blue",
        "sizes": [
            "s"
        ],
        "fits": [],
        "thumbnail": {
            "main": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-10-1.jpg",
            "img1": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-10-2.jpg",
            "img2": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-10-1.jpg"
        },
        "images": {
            "main": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-10-1.jpg",
            "img1": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-10-2.jpg"
        },
        "pattern": [
            "red",
            "yellow",
            "white",
            "orange",
            "cyan",
            "green",
            "purple"
        ],
        "brand": "coding school"
    },
    {
        "name": "Hamitoki - Seeds of Change Organic Quinoe",
        "price": 116,
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!",
        "category": "jacket",
        "stock": 27,
        "color": "red",
        "sizes": [
            "s"
        ],
        "fits": [],
        "thumbnail": {
            "main": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-11-1.jpg",
            "img1": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-11-2.jpg",
            "img2": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-11-1.jpg"
        },
        "images": {
            "main": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-11-1.jpg",
            "img1": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-11-2.jpg"
        },
        "pattern": [
            "red",
            "yellow",
            "white",
            "orange",
            "cyan",
            "green",
            "purple"
        ],
        "brand": "coding school"
    },
    {
        "name": "All Natural Italian-Style Chicken Meatballs",
        "price": 73,
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!",
        "category": "jeans",
        "stock": 1227,
        "color": "green",
        "sizes": [
            "s"
        ],
        "fits": [],
        "thumbnail": {
            "main": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-12-1.jpg",
            "img1": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-12-2.jpg",
            "img2": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-12-1.jpg"
        },
        "images": {
            "main": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-12-1.jpg",
            "img1": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-12-2.jpg"
        },
        "pattern": [
            "red",
            "yellow",
            "white",
            "orange",
            "cyan",
            "green",
            "purple"
        ],
        "brand": "coding school"
    },
    {
        "name": "Angie’s Boomchickapop Sweet & Salty",
        "price": 238.85,
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!",
        "category": "clothing",
        "stock": 27,
        "color": "blue",
        "sizes": [
            "s"
        ],
        "fits": [],
        "thumbnail": {
            "main": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-13-1.jpg",
            "img1": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-13-2.jpg",
            "img2": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-13-1.jpg"
        },
        "images": {
            "main": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-13-1.jpg",
            "img1": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-13-2.jpg"
        },
        "pattern": [
            "red",
            "yellow",
            "white",
            "orange",
            "cyan",
            "green",
            "purple"
        ],
        "brand": "coding school"
    },
    {
        "name": "Foster Farms Takeout Crispy Classic",
        "price": 238.85,
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!",
        "category": "clothing",
        "stock": 27,
        "color": "blue",
        "sizes": [
            "s"
        ],
        "fits": [],
        "thumbnail": {
            "main": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-14-1.jpg",
            "img1": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-14-2.jpg",
            "img2": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-14-1.jpg"
        },
        "images": {
            "main": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-14-1.jpg",
            "img1": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-14-2.jpg"
        },
        "pattern": [
            "red",
            "yellow",
            "white",
            "orange",
            "cyan",
            "green",
            "purple"
        ],
        "brand": "coding school"
    },
    {
        "name": "Blue Diamond Almonds Lightly Salted Vegetables",
        "price": 238.85,
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!",
        "category": "clothing",
        "stock": 27,
        "color": "blue",
        "sizes": [
            "s"
        ],
        "fits": [],
        "thumbnail": {
            "main": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-15-1.jpg",
            "img1": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-15-2.jpg",
            "img2": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-15-1.jpg"
        },
        "images": {
            "main": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-15-1.jpg",
            "img1": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-15-2.jpg"
        },
        "pattern": [
            "red",
            "yellow",
            "white",
            "orange",
            "cyan",
            "green",
            "purple"
        ],
        "brand": "coding school"
    },
    {
        "name": "Helen Tokio Chobani Complete Vanilla Greek",
        "price": 238.85,
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!",
        "category": "clothing",
        "stock": 27,
        "color": "blue",
        "sizes": [
            "s"
        ],
        "fits": [],
        "thumbnail": {
            "main": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-16-1.jpg",
            "img1": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-16-2.jpg",
            "img2": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-16-3.jpg",
            "img3": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-16-4.jpg",
            "img4": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-16-5.jpg",
            "img5": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-16-6.jpg",
            "img6": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-16-7.jpg"
        },
        "images": {
            "main": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-1-1.jpg",
            "img1": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-1-2.jpg"
        },
        "pattern": [
            "red",
            "yellow",
            "white",
            "orange",
            "cyan",
            "green",
            "purple"
        ],
        "brand": "coding school"
    },
    {
        "name": "Canada Dry Ginger Ale – 2 L Bottle",
        "price": 238.85,
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!",
        "category": "clothing",
        "stock": 27,
        "color": "blue",
        "sizes": [
            "s"
        ],
        "fits": [],
        "thumbnail": {
            "main": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-16-1.jpg",
            "img1": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-16-2.jpg",
            "img2": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-16-3.jpg",
            "img3": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-16-4.jpg",
            "img4": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-16-5.jpg",
            "img5": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-16-6.jpg",
            "img6": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-16-7.jpg"
        },
        "images": {
            "main": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-1-1.jpg",
            "img1": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-1-2.jpg"
        },
        "pattern": [
            "red",
            "yellow",
            "white",
            "orange",
            "cyan",
            "green",
            "purple"
        ],
        "brand": "coding school"
    },
    {
        "name": "Encore Seafoods Stuffed Alaskan",
        "price": 238.85,
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!",
        "category": "clothing",
        "stock": 27,
        "color": "blue",
        "sizes": [
            "s"
        ],
        "fits": [],
        "thumbnail": {
            "main": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-16-1.jpg",
            "img1": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-16-2.jpg",
            "img2": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-16-3.jpg",
            "img3": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-16-4.jpg",
            "img4": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-16-5.jpg",
            "img5": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-16-6.jpg",
            "img6": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-16-7.jpg"
        },
        "images": {
            "main": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-1-1.jpg",
            "img1": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-1-2.jpg"
        },
        "pattern": [
            "red",
            "yellow",
            "white",
            "orange",
            "cyan",
            "green",
            "purple"
        ],
        "brand": "coding school"
    },
    {
        "name": "Gorton’s Beer Battered Fish Fillets",
        "price": 238.85,
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!",
        "category": "clothing",
        "stock": 27,
        "color": "blue",
        "sizes": [
            "s"
        ],
        "fits": [],
        "thumbnail": {
            "main": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-16-1.jpg",
            "img1": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-16-2.jpg",
            "img2": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-16-3.jpg",
            "img3": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-16-4.jpg",
            "img4": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-16-5.jpg",
            "img5": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-16-6.jpg",
            "img6": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-16-7.jpg"
        },
        "images": {
            "main": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-1-1.jpg",
            "img1": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-1-2.jpg"
        },
        "pattern": [
            "red",
            "yellow",
            "white",
            "orange",
            "cyan",
            "green",
            "purple"
        ],
        "brand": "coding school"
    },
    {
        "name": "Haagen-Dazs Caramel Cone Ice Cream",
        "price": 238.85,
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!",
        "category": "clothing",
        "stock": 27,
        "color": "blue",
        "sizes": [
            "s"
        ],
        "fits": [],
        "thumbnail": {
            "main": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-16-1.jpg",
            "img1": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-16-2.jpg",
            "img2": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-16-3.jpg",
            "img3": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-16-4.jpg",
            "img4": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-16-5.jpg",
            "img5": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-16-6.jpg",
            "img6": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-16-7.jpg"
        },
        "images": {
            "main": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-1-1.jpg",
            "img1": "https://nest-nextjs.vercel.app//assets/imgs/shop/product-1-2.jpg"
        },
        "pattern": [
            "red",
            "yellow",
            "white",
            "orange",
            "cyan",
            "green",
            "purple"
        ],
        "brand": "coding school"
    }
]

data.forEach(async (e) => {
    const { data: response } = await axios.post("http://localhost:2000/products/create", e,{
        headers: {
            "Authorization": "Bearer U2FsdGVkX1+pt0TUhszdPUtIxogIiaVh4N/MSAUDVnsMafs5g1iWXzniCERAme49LvDm+q7kewphKSn0Hjr0uqz4TVxeP1kkMFQl1kM2tz8P1Jy1UMyczzL9/8fM5msf4L5yGjXfzHBiztR86d7pMg=="
        }
        
    })
    console.log(response);
})