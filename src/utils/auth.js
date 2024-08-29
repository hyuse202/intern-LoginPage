export async function authenticate(username, password) {
    try {
    //   const response = await fetch('/api/auth', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ username, password }),
    //   });
  
    //   if (!response.ok) {
    //     throw new Error('Authentication failed');
    //   }
  
    //   const data = await response.json();
    //   console.log(data.message); // Authentication successful
    //   return data;
    const data = {
        title: "Book Title",
        author: "Author Name",
        year: 2024
    };
    
    // Convert to JSON string
    const jsonString = JSON.stringify(data);
        // console.log(jsonString)
        return jsonString;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }