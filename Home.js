// Home.js
import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import Dashboard from './componets/Dashboard';
import CourseOne from './componets/CourseOne';
import CourseTwo from './componets/CourseTwo';

const { Header, Content } = Layout;

function Home() {
    const [selectedComponent, setSelectedComponent] = useState('dashboard');

    const handleCardSelection = (componentName) => {
        setSelectedComponent(componentName); // Dynamically set the component to render
    };

    const renderContent = () => {
        switch (selectedComponent) {
            case 'dashboard':
                return <Dashboard onCardSelect={handleCardSelection} />;
            case 'course1':
                return <CourseOne courseTitle="Course 1" />;
            case 'course2':
                return <CourseTwo courseTitle="Course 2" />;
            default:
                return <Dashboard onCardSelect={handleCardSelection} />;
        }
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/* Navbar */}
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">Dashboard</Menu.Item>
                </Menu>
            </Header>

            {/* Content Area */}
            <Content style={{ padding: '20px 50px' }}>
                {renderContent()} {/* Dynamically render the content here */}
            </Content>
        </Layout>
    );
}

export default Home;
