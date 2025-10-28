export const modifyHtml = (html) => {
  // Add Tailwind CSS classes to elements
  return html
    .replace(
      /<h1>/g,
      '<h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-gray-800">'
    )
    .replace(
      /<h2>/g,
      '<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-5 mt-12 text-gray-800 font-header">'
    )
    .replace(
      /<h3>/g,
      '<h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 mt-8  text-gray-800 font-header">'
    )
    .replace(
      /<h4>/g,
      '<h4 className="text-lg sm:text-xl md:text-2xl font-semibold my-4  text-gray-800 font-header">'
    )
    .replace(
      /<h5>/g,
      '<h5 className="text-base sm:text-xl md:text-xl font-semibold mb-2 mt-3  text-gray-800 font-header">'
    )
    .replace(/<p>/g, '<p className="text-base">')
    .replace(/<ul>/g, '<ul className="list-disc mb-4 mt-3 ml-9">')
    .replace(/<ol>/g, '<ol className="list-decimal mb-2 mt-3 ml-8">')
    .replace(/<li>/g, '<li className="mb-1">')
    .replace(
      /<strong>/g,
      '<strong className="font-bold text-sm sm:text-base text-gray-800">'
    )
    .replace(
      /<blockquote>/g,
      '<blockquote className="border-l-4 px-4 py-2 my-4 italic text-gray-600 bg-gray-50">'
    )
    .replace(
      /<pre>/g,
      '<pre className="bg-gray-900 text-gray-100 p-4 rounded-sm overflow-x-auto my-4">'
    )
    .replace(
      /<code>/g,
      `<code className="block font-mono text-sm leading-snug text-white 
      bg-gray-900 p-2 rounded-sm overflow-x-auto">`
    )
    .replace(/<img /g, '<img className="my-4 max-w-full h-auto" ') // Styling for images
    .replace(
      /<a /g,
      '<a className="underline italic hover:text-blue-500 transition duration-300" '
    ) // Styling for images
    .replace(/<br\s*\/?>/g, "<br />"); // Handle <br> tags
};
