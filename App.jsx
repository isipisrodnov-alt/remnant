import { useState } from 'react';
import './App.css';

const products = [
  {
    id: 1,
    name: 'Dreamcast',
    price: 2500,
    image: 'https://www.on-off-on.ru/upload/iblock/338/33840b5202c73c95028675ef4ad603e5.jpg',
  },
  {
    id: 2,
    name: 'GameCube',
    price: 5000,
    image: 'https://i.ebayimg.com/images/g/dSEAAOSwY45USgMs/s-l500.jpg',
  },
  {
    id: 3,
    name: 'XBOX',
    price: 3000,
    image: 'https://static1.thegamerimages.com/wordpress/wp-content/uploads/2018/10/9-Dont-Hate-the-Geek.jpg',
  },
  {
    id: 4,
    name: 'PS2',
    price: 1500,
    image: 'https://cs3.pikabu.ru/post_img/big/2014/03/04/10/1393948489_1070149033.jpg',
  },
  {
    id: 5,
    name: 'PLAYSTATION 3',
    price: 10000,
    image: 'https://www.ixbt.com/games/itogi/images/itogi-16-10-2006/01.jpg',
  },
  {
    id: 6,
    name: 'XBOX 360',
    price: 12000,
    image: 'https://dcdn-us.mitiendanube.com/stores/131/082/products/xbox-w1-39e509451f4ab5796d16196941984263-480-0.jpg',
  },
  {
    id: 7,
    name: 'WII',
    price: 2000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Wii-Console.png/960px-Wii-Console.png',
  },
  {
    id: 8,
    name: 'Zeebo',
    price: 30000,
    image: 'https://avatars.mds.yandex.net/i?id=6e6fa31740899313244567cb00f8430b_l-5235970-images-thumbs&n=13',
  },
  {
    id: 9,
    name: 'PSVITA',
    price: 20000,
    image: 'https://cdn.pricebook.co.id/images/product/LL/30908_LL_1.webp',
  },
  {
    id: 10,
    name: 'OUYA',
    price: 500,
    image: 'https://ixbt.online/gametech/sadm_images/2009/01/ouya_rev/console-gamepad.jpg',
  },
  {
    id: 11,
    name: 'WII U',
    price: 40000,
    image: 'https://i.ebayimg.com/images/g/M~kAAOSw-0xYc6Wd/s-l1600.jpg',
  },
  {
    id: 12,
    name: 'PS4',
    price: 13000,
    image: 'https://avatars.mds.yandex.net/get-mpic/4466428/2a000001956d338a95fe4ca603751d4e5d66/orig',
  },
];

const ProductCard = ({ product }) => {
  const [count, setCount] = useState(0); 
  const handleAddToCart = () => {
    setCount(count + 1); 
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Цена: {product.price} ₽</p> 
      <button onClick={handleAddToCart}>
        {count === 0 ? 'Добавить в корзину' : `В корзине: ${count}`} 
      </button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Рынок ретро-консолей</h1>
      <div className="product-list">
        <ProductCard product={products[0]} />
        <ProductCard product={products[1]} />
        <ProductCard product={products[2]} />
        <ProductCard product={products[3]} />
        <ProductCard product={products[4]} />
        <ProductCard product={products[5]} />
        <ProductCard product={products[6]} />
        <ProductCard product={products[7]} />
        <ProductCard product={products[8]} />
        <ProductCard product={products[9]} />
        <ProductCard product={products[10]} />
        <ProductCard product={products[11]} />
      </div>
    </div>
  );
}

export default App;