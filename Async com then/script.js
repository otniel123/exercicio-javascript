async function callPosts(id) {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  
      if (!res.ok) {
        throw new Error(`ID não existe! Status: ${res.status}`);
      }
  
      const data = await res.json();
      console.log("Título:", data.title);
  
    } catch (err) {
      console.error("Erro:", err.message);
    }
  }
  
  callPosts(1);
