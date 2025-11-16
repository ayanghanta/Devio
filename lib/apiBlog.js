import { notFound } from "next/navigation";
const BASE_URL = `${""}/api/blogs`;

export async function getMostLiedBlogs(quantity = 4) {
  const res = await fetch(`${BASE_URL}?limit=${quantity}&sort=-likes`);
  const data = await res.json();
  if (!data.ok || !res.ok)
    throw new Error(data.message || "Blog can not be found");
  return data.blogs;
}
export async function getLatestBlog() {
  const res = await fetch(`${BASE_URL}?limit=1`);
  const data = await res.json();
  if (!data.ok || !res.ok)
    throw new Error(data.message || "Blog can not be found");
  return data.blogs;
}

export async function getBlog(blogId) {
  const res = await fetch(`${BASE_URL}/${blogId}`);
  const data = await res.json();
  if (!data.ok || !res.ok)
    throw new Error(data.message || "Blog can not be found");
  return data.blog;
}

export async function getAllBlogs() {
  const res = await fetch(`${BASE_URL}`);
  const data = await res.json();
  if (!data.ok || !res.ok)
    throw new Error(data.message || "Blog can not be found");
  return data.blogs;
}

// export async function getPublishedBlogs(){

// }

// // const BASE_URL = `https://Indev-rail.up.railway.app/api/v1/blogs`;

// export async function getPublishedBlogs(aliasUrl = "") {
//   let reqUrl = BASE_URL;
//   if (aliasUrl) reqUrl = `${BASE_URL}/${aliasUrl}`;

//   try {
//     const res = await fetch(reqUrl);
//     const data = await res.json();
//     if (!data.ok) throw new Error("Somthing went wrong in getting all blogs!");

//     // await new Promise((res) => setTimeout(res, 10000));

//     return data.data.blogs;
//   } catch (err) {
//     throw new Error(err.message);
//   }
// }

// export async function getBlog(id) {
//   try {
//     const res = await fetchWithCookie(`${BASE_URL}/${id}`, {
//       method: "GET",
//       credentials: "include",
//     });
//     const data = await res.json();
//     if (!data.ok) throw new Error("No blog found");

//     return data.data.blog;
//   } catch (err) {
//     notFound();
//   }
// }
// export async function getProxyBlog(id) {
//   const proxyUrl = "http://localhost:3000/api/proxy";
//   // `http://localhost:3000/api/proxy/api/blog/'
//   try {
//     const res = await fetch(`${proxyUrl}/api/v1/blogs/${id}`, {
//       method: "GET",
//       credentials: "include",
//     });
//     const data = await res.json();
//     if (!data.ok) throw new Error("No blog found");

//     return data.data.blog;
//   } catch (err) {
//     notFound();
//   }
// }

// export async function createBlog(newBlog) {
//   try {
//     const res = await fetch(`${BASE_URL}`, {
//       method: "POST",
//       body: newBlog,
//       credentials: "include",
//     });

//     const data = await res.json();
//     if (!data.ok) throw new Error("Somthing went wrong in creating new blog!");

//     return data.data.blog;
//   } catch (err) {
//     throw new Error(err.message);
//   }
// }

// export async function updateBlog(id, blogData) {
//   try {
//     const res = await fetch(`${BASE_URL}/${id}`, {
//       method: "PATCH",
//       body: blogData,
//       credentials: "include",
//     });

//     const data = await res.json();
//     console.log(data);
//     if (!data.ok) throw new Error(data.message);

//     return data.data.blog;
//   } catch (err) {
//     throw new Error(err.message);
//   }
// }

// export async function updatePublishing(id, publishData) {
//   // console.log(JSON.stringify(publishData));
//   try {
//     const res = await fetch(`${BASE_URL}/${id}`, {
//       method: "PATCH",
//       body: JSON.stringify(publishData),
//       credentials: "include",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     const data = await res.json();
//     // console.log(data);
//     // console.log(data);
//     if (!data.ok) throw new Error(data.message);

//     return data.data.blog;
//   } catch (err) {
//     throw new Error(err.message);
//   }
// }

// export async function deleteBlog(id) {
//   try {
//     const res = await fetch(`${BASE_URL}/${id}`, {
//       method: "DELETE",
//       credentials: "include",
//     });

//     const data = await res.json();
//     // console.log(data);
//     if (!data.ok) throw new Error(data.message);

//     return null;
//   } catch (err) {
//     throw new Error(err.message);
//   }
// }
