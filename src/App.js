import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Loading from './components/Loading';
import ThemeToggle from './components/ThemeToggle';
import { AppProvider } from './contexts/AppContext';

const Home = React.lazy(() => import('./pages/Home'));
const ChannelSelection = React.lazy(() => import('./pages/ChannelSelection'));
const VideoPlayerPage = React.lazy(() => import('./pages/VideoPlayerPage'));

const App = () => {
    return (
        <ErrorBoundary>
            <AppProvider>
                <Router basename={process.env.PUBLIC_URL}>
                    <div className="app">
                        <ThemeToggle />
                        <Suspense fallback={<Loading />}>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/channel/:channelName" element={<ChannelSelection />} />
                                <Route path="/watch/:subChannel" element={<VideoPlayerPage />} />
                            </Routes>
                        </Suspense>
                    </div>
                </Router>
            </AppProvider>
        </ErrorBoundary>
    );
};

export default App;