import React from 'react';
import { Routes, Route } from 'react-router'
import Main from '../components/Main';
import Layout from '../layout/Layout';
import News from '../pages/News/News';
import Projects from '../pages/Project/Projects';
import About from '../pages/About/About';
export default function Router() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path='news' element={<News />} />
                    <Route path='projects' element={<Projects />} />
                    <Route path='about' element={<About />} />
                </Route>
            </Routes>
        </>
    )
}
