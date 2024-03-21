import genPDF from '$lib/server/pdf/generatePdf';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = (async ({ params, setHeaders }) => {
	const pdf = await genPDF()

    setHeaders({
        'Content-Type': 'application/pdf',
        'Content-Length': pdf.size.toString(),
        'Last-Modified': new Date().toUTCString(),
        'Cache-Control': 'public, max-age=600'
    })
    
    return new Response(pdf)
});