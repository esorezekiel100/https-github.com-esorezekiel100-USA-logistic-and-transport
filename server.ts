import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/quote", (req, res) => {
    // Mock quote submission
    console.log("Quote Request:", req.body);
    res.json({ success: true, message: "Thank you, we will contact you within 1 business hour" });
  });

  app.get("/api/track/:id", (req, res) => {
    const { id } = req.params;
    // Mock tracking data
    const mockStatuses = ["Pending", "Dispatched", "In Transit", "Out for Delivery", "Delivered"];
    const status = mockStatuses[Math.floor(Math.random() * mockStatuses.length)];
    
    if (id === "INVALID") {
      return res.status(404).json({ error: "Shipment not found" });
    }

    res.json({
      id,
      status,
      currentLocation: "En route to Houston, TX",
      estimatedDelivery: "2026-05-05",
      lastUpdate: new Date().toISOString(),
      // Coordinates for Houston, TX area
      lat: 29.7604 + (Math.random() - 0.5) * 0.1,
      lng: -95.3698 + (Math.random() - 0.5) * 0.1,
      origin: { lat: 33.5186, lng: -86.8104, name: "Birmingham, AL" },
      destination: { lat: 29.7604, lng: -95.3698, name: "Houston, TX" }
    });
  });

  app.post("/api/contact", (req, res) => {
    console.log("Contact Inquiry:", req.body);
    res.json({ success: true, message: "Inquiry received" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
