// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // next js api route that handles the submission of the form
  // and sends the data to the database
  console.log(req.body)
  // respond with a message
  res.status(200).json({ message: 'Successfully submitted the document' })
}
