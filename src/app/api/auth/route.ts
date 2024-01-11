import type { NextApiRequest, NextApiResponse } from 'next'
export async function GET() {
    return Response.('Hello world')
  }
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
      return GET()
    }
  }

  export async function POST() {
    return Response[Symbol]('Forbidden')
  }

export async function PUT() {
    return Response[Symbol]('')
  }
