import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'production';

// Basic security & parsing
app.disable('x-powered-by');

// Health check endpoint for Hostinger / uptime monitoring
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    environment: NODE_ENV,
    uptime: Math.floor(process.uptime()),
    timestamp: new Date().toISOString()
  });
});

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Path to compiled Vite frontend
const distPath = path.join(__dirname, 'dist');
const indexHtmlPath = path.join(distPath, 'index.html');

if (fs.existsSync(distPath)) {
  // Serve static assets with caching for hashed files
  app.use(express.static(distPath, {
    maxAge: NODE_ENV === 'production' ? '1y' : '0',
    setHeaders: (res, filePath) => {
      // Don't cache index.html so updates are immediate
      if (filePath.endsWith('index.html')) {
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      }
    }
  }));

  // SPA fallback: any unknown route serves index.html
  app.get('*', (req, res) => {
    res.sendFile(indexHtmlPath);
  });
} else {
  // Helpful fallback if npm run build has not been executed yet
  app.get('*', (req, res) => {
    res.status(503).send(`
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>Application Starting - British Board</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; background: #0f172a; color: #fff; text-align: center; }
            .box { background: #1e293b; padding: 2rem 3rem; border-radius: 0.75rem; border: 1px solid #334155; max-width: 500px; }
            h1 { font-size: 1.25rem; margin-bottom: 0.75rem; color: #f87171; }
            p { font-size: 0.9rem; color: #94a3b8; line-height: 1.5; }
            code { background: #0f172a; padding: 0.2rem 0.4rem; border-radius: 0.25rem; font-family: monospace; color: #38bdf8; }
          </style>
        </head>
        <body>
          <div class="box">
            <h1>Frontend Build Required</h1>
            <p>The static assets directory (<code>dist/</code>) was not found.</p>
            <p>Please run <code>npm run build</code> in your Hostinger Node.js terminal or deployment build step.</p>
          </div>
        </body>
      </html>
    `);
  });
}

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`[British Board Node Server] Running on http://0.0.0.0:${PORT} (Environment: ${NODE_ENV})`);
});

// Graceful shutdown
const shutdown = (signal) => {
  console.log(`[British Board Node Server] Received ${signal}, shutting down gracefully...`);
  server.close(() => {
    console.log('[British Board Node Server] Server closed.');
    process.exit(0);
  });
};

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
