// Cloudflare Pages middleware: 301-redirect www.simplifycalculator.com to the
// apex domain so Google sees a single canonical host (avoids duplicate URLs).
export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.hostname === 'www.simplifycalculator.com') {
    url.hostname = 'simplifycalculator.com';
    return Response.redirect(url.toString(), 301);
  }
  return next();
}
