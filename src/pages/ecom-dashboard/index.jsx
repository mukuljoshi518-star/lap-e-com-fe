/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Layout, Menu, Input, Button, Card, Tag, Drawer, Divider, Typography, Row, Col, Space } from 'antd';

import { ShoppingCart, Search, Menu as MenuIcon, X, Star, Heart } from 'lucide-react';

const { Header, Content } = Layout;
const { Title, Text } = Typography;

export default function LaptopStore() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showCart, setShowCart] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const categories = ['All', 'Gaming', 'Business', 'Ultrabook', 'Creator'];

  const laptops = [
    {
      id: 1,
      name: 'MacBook Air M2',
      price: 999,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop',
      category: 'Ultrabook',
      rating: 4.8,
      specs: 'M2 Chip, 8GB RAM, 256GB SSD'
    },
    {
      id: 2,
      name: 'ASUS ROG Strix G16',
      price: 1399,
      image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop',
      category: 'Gaming',
      rating: 4.7,
      specs: 'RTX 4060, 16GB RAM, 512GB SSD'
    },
    {
      id: 3,
      name: 'Dell XPS 15',
      price: 1299,
      image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop',
      category: 'Creator',
      rating: 4.6,
      specs: 'i7-13700H, 16GB RAM, 512GB SSD'
    },
    {
      id: 4,
      name: 'Lenovo ThinkPad X1',
      price: 1199,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
      category: 'Business',
      rating: 4.5,
      specs: 'i7-1260P, 16GB RAM, 512GB SSD'
    }
  ];

  const filtered = selectedCategory === 'All' ? laptops : laptops.filter((l) => l.category === selectedCategory);

  const addToCart = (l) => {
    const exist = cart.find((c) => c.id === l.id);
    if (exist) {
      setCart(cart.map((c) => (c.id === l.id ? { ...c, quantity: c.quantity + 1 } : c)));
    } else {
      setCart([...cart, { ...l, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, delta) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item)).filter((i) => i.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((i) => i.id !== id));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Layout style={{ background: '#f5f5f5' }}>
      {/* MOBILE MENU */}
      <Drawer title="Menu" placement="left" open={mobileMenu} onClose={() => setMobileMenu(false)}>
        <Menu
          mode="vertical"
          items={[
            { key: '1', label: 'Home' },
            { key: '2', label: 'Products' },
            { key: '3', label: 'Deals' },
            { key: '4', label: 'Support' }
          ]}
        />
        <Input placeholder="Search laptops..." prefix={<Search size={18} />} style={{ marginTop: 20 }} />
      </Drawer>

      {/* CONTENT AREA */}
      <Content
        style={{
          width: '100%',
          padding: 20,
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <div style={{ width: '100%', maxWidth: 1300 }}>
          {/* CATEGORY FILTER */}
          <Space wrap size="small" style={{ marginBottom: 20 }}>
            {categories.map((c) => (
              <Button key={c} type={selectedCategory === c ? 'primary' : 'default'} shape="round" onClick={() => setSelectedCategory(c)}>
                {c}
              </Button>
            ))}
          </Space>

          {/* PRODUCT GRID */}
          <Row gutter={[20, 20]} justify="start">
            {filtered.map((item) => (
              <Col xs={24} sm={12} md={8} lg={6} key={item.id}>
                <Card
                  hoverable
                  cover={
                    <div style={{ position: 'relative' }}>
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: '100%',
                          height: 200,
                          objectFit: 'cover'
                        }}
                      />
                      <Button
                        type="text"
                        shape="circle"
                        style={{
                          position: 'absolute',
                          top: 10,
                          right: 10,
                          background: '#fff'
                        }}
                        icon={<Heart size={18} />}
                      />
                    </div>
                  }
                >
                  <Space>
                    <Star size={16} color="#f7d038" />
                    <Text>{item.rating}</Text>
                    <Tag>{item.category}</Tag>
                  </Space>

                  <Title level={5} style={{ marginTop: 10 }}>
                    {item.name}
                  </Title>

                  <Text type="secondary">{item.specs}</Text>

                  <div style={{ marginTop: 12, display: 'flex', justifyContent: 'space-between' }}>
                    <Title level={4} style={{ margin: 0, color: '#1677ff' }}>
                      ${item.price}
                    </Title>

                    <Button type="primary" onClick={() => addToCart(item)}>
                      Add to Cart
                    </Button>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Content>

      {/* CART DRAWER */}
      <Drawer title="Shopping Cart" placement="right" open={showCart} onClose={() => setShowCart(false)} width={380}>
        {cart.length === 0 ? (
          <Text type="secondary">Your cart is empty</Text>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} style={{ display: 'flex', marginBottom: 20 }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: 70,
                    height: 70,
                    objectFit: 'cover',
                    borderRadius: 6
                  }}
                />
                <div style={{ marginLeft: 15, flex: 1 }}>
                  <Text strong>{item.name}</Text>
                  <div>
                    <Text style={{ color: '#1677ff' }}>${item.price}</Text>
                  </div>

                  <Space style={{ marginTop: 5 }}>
                    <Button onClick={() => updateQuantity(item.id, -1)}>-</Button>
                    <Text>{item.quantity}</Text>
                    <Button onClick={() => updateQuantity(item.id, 1)}>+</Button>
                  </Space>
                </div>

                <Button type="text" danger icon={<X size={18} />} onClick={() => removeItem(item.id)} />
              </div>
            ))}

            <Divider />

            <Title level={3}>Total: ${totalPrice.toFixed(2)}</Title>
            <Button type="primary" block size="large">
              Checkout
            </Button>
          </>
        )}
      </Drawer>
    </Layout>
  );
}
