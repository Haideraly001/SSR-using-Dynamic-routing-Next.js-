// pages/api/your-api.js
export default function handler(req, res) {
  if (req.method === 'GET') {
    // Handle GET request
    res.status(200).json({ message: 'Hello from GET' });
  } else if (req.method === 'POST') {
    // Handle POST request
    const data = req.body; // Access the request body
    res.status(201).json({ message: 'Data received', data });
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
