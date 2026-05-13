const express = require('express');
const path = require('path');
const app = express();

// Port configuration (useful for future deployment)
const PORT = process.env.PORT || 3000;

/**
 * MIDDLEWARE
 */

// 1. Logger: Shows every request in the terminal
app.use((req, res, next) => {
    const now = new Date().toLocaleTimeString();
    console.log(`[${now}] ${req.method} request to: ${req.url}`);
    next();
});

// 2. Static Server: Serves everything in the "public" folder automatically
// This means index.html, style.css, and any images you add will just work.
app.use(express.static(path.join(__dirname, 'public')));


/**
 * ROUTES
 */

// Main Route: Explicitly serve index.html for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 404 Handler: If a user types a wrong URL, we send a clean message (or a 404 page)
app.use((req, res) => {
    res.status(404).send(`
        <div style="text-align:center; font-family:sans-serif; padding-top:50px;">
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for doesn't exist.</p>
            <a href="/">Back to Home</a>
        </div>
    `);
});


/**
 * START SERVER
 */
app.listen(PORT, () => {
    console.log('------------------------------------');
    console.log(`🚀 Server is flying at: http://localhost:${PORT}`);
    console.log(`📂 Serving static files from: ${path.join(__dirname, 'public')}`);
    console.log('------------------------------------');
});