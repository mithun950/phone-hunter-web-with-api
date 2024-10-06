const loadAllPost = async(category) => {
     const response = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts${category?`?category=${category}`:'' }`)
        const data = await response.json();
        displayAllPost(data.posts)

}

const displayAllPost = (posts) =>{
    const postContainer = document.getElementById('post-container');
    

}




loadAllPost()

const handleSearchByCategory = () =>{
    const searchText = document.getElementById('searchPosts').value;
    loadAllPost(searchText);
}