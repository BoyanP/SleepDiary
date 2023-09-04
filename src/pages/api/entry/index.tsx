import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(req, res) {

  if (req.method === 'POST') {
    // Process a POST request
  }
  else if (req.method == 'GET') {
    
  }
  else {
    // Handle any other HTTP method
    res.status(403).json({ error: 'Unsupported http method' })
  }
}